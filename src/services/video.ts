import axios from "axios";
import { executeFilter, generateFilters } from "./filter";
import {
  SBlacklistText,
  SVideoHistoryList,
  SVideoList,
  SWhitelistText,
} from "./storage";
import { shuffleList, transformVideoItem } from "./utils";

class VideoManager {
  private _freshCount = 1;

  private _whiteText = "";
  private _blackText = "";
  private _whitelist: IFilterItem[] = [];
  private _blacklist: IFilterItem[] = [];

  constructor() {
    this._whiteText = SWhitelistText.get();
    this._blackText = SBlacklistText.get();
    this._whitelist = generateFilters(this._whiteText);
    this._blacklist = generateFilters(this._blackText);

    // 先过滤
    const list = SVideoList.get().filter(
      (i) => i && i.bvid && this.rulesFilter(i)
    );
    SVideoList.set(list);

    // 太少了就加一点
    if (list.length < 12) this.refresh();
  }

  async update() {
    const list = SVideoList.get();
    if (list.length < 12) await this.refresh();
    return SVideoList.get();
  }

  // 从storage里取一个视频
  // 可以设置取第几个
  next(index: number = 0): IVideoItem | null {
    index = Math.max(0, Math.floor(index));

    const list = this.list;
    if (list.length > index) {
      const [item] = list.splice(index, 1);
      if (item) {
        const historyList = SVideoHistoryList.get();
        historyList.unshift(item.bvid);
        SVideoHistoryList.set([...historyList]);
      }
      SVideoList.set(list);
      return item!;
    }
    return null;
  }

  // 尝试获取下一个
  // 如果不存在就刷新
  async tryNext(retryCount = 5): Promise<IVideoItem | null> {
    let item = this.next();
    while (!item && retryCount-- > 0) {
      await this.refresh();
      item = this.next();
    }
    return item;
  }

  getByBvid(bvid: string): IVideoItem | null {
    const list = this.list;

    if (bvid && list.length > 0) {
      const index = list.findIndex((i) => i.bvid === bvid);
      const [item] = list.splice(index, 1);

      if (item) {
        const historyList = SVideoHistoryList.get();
        historyList.unshift(item.bvid);
        SVideoHistoryList.set(historyList);
      }
      SVideoList.set(list);
      return item!;
    }
    return null;
  }

  // 添加更多视频到storage里
  async refresh() {
    const { data } = await axios
      .get("https://api.bilibili.com/x/web-interface/index/top/feed/rcmd", {
        withCredentials: true,
        params: {
          y_num: 5,
          fresh_idx_1h: this._freshCount,
          fresh_idx: this._freshCount++,
          feed_version: "V4",
          fetch_row: 4,
          homepage_ver: 1,
          ps: 15,
          fresh_type: 4,
        },
      })
      .then((res) => res.data);

    if (!data.item.length) return;

    const list = this.list;
    const historyList = SVideoHistoryList.get();
    const itemSet = new Set(list.map((e) => e.bvid).concat(historyList));

    const items = (data.item as any[])
      .map(transformVideoItem)
      .filter((e) => e && e.bvid && !itemSet.has(e.bvid))
      .filter(this.rulesFilter.bind(this)) as IVideoItem[];

    SVideoList.set(shuffleList(list.concat(items)));
  }

  get list() {
    return SVideoList.get().filter((e) => e && e.bvid);
  }

  get whiteText() {
    return this._whiteText;
  }

  get blackText() {
    return this._blackText;
  }

  setWhiteText(value: string) {
    if (this._whiteText === value) return;
    SWhitelistText.set(value);
    this._whiteText = value;
    this._whitelist = generateFilters(this._whiteText);
  }

  setBlackText(value: string) {
    if (this._blackText === value) return;
    SBlacklistText.set(value);
    this._blackText = value;
    this._blacklist = generateFilters(this._blackText);
  }

  private rulesFilter(item: IVideoItem | null) {
    if (!item) return false;
    if (this._whitelist.some((f) => executeFilter(item, f))) return true;
    return !this._blacklist.some((f) => executeFilter(item, f));
  }
}

export const videoManager = new VideoManager();
