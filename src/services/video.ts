import axios from "axios";
import { SVideoHistoryList, SVideoList, SVideoListLen } from "./storage";
import { shuffleList, transformVideoItem } from "./utils";

class VideoManager {
  private _freshCount = 1;
  private _list: IVideoItem[] = [];

  get list() {
    return this._list;
  }

  async update() {
    this._list = SVideoList.get();
    if (!this._list.length) await this.refresh();
    return this._list;
  }

  // 从storage里取一个视频
  // 可以设置取第几个
  next(index: number = 0): IVideoItem | null {
    index = Math.max(0, Math.floor(index));

    if (SVideoListLen.get() > index) {
      const list = SVideoList.get().filter((e) => e && e.bvid);
      const [item] = list.splice(index, 1);

      if (item) {
        const historyList = SVideoHistoryList.get();
        historyList.unshift(item.bvid);
        SVideoHistoryList.set(historyList);
      }

      SVideoList.set(list);
      SVideoListLen.set(list.length);
      this._list = list;
      return item!;
    }
    return null;
  }

  nextByBvid(bvid: string): IVideoItem | null {
    if (bvid && SVideoListLen.get() > 0) {
      const list = SVideoList.get().filter((e) => e && e.bvid);
      const index = list.findIndex((i) => i.bvid === bvid);
      const [item] = list.splice(index, 1);

      if (item) {
        const historyList = SVideoHistoryList.get();
        historyList.unshift(item.bvid);
        SVideoHistoryList.set(historyList);
      }

      SVideoList.set(list);
      SVideoListLen.set(list.length);
      this._list = list;
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

    const oldList = SVideoList.get().filter((e) => e && e.bvid);
    const historyList = SVideoHistoryList.get();

    const itemSet = new Set(oldList.map((e) => e.bvid).concat(historyList));
    const items = (data.item as any[])
      .map(transformVideoItem)
      .filter((e) => e && e.bvid && !itemSet.has(e.bvid)) as IVideoItem[];

    const newList = shuffleList(oldList.concat(items));
    SVideoList.set(newList);
    SVideoListLen.set(newList.length);
    this._list = newList;
  }
}

export const videoManager = new VideoManager();
