import axios from "axios";

const VideoListKey = "boring-list";
const VideoListLenKey = "boring-list-len";
const HistoryListKey = "boring-history";

export function getVideoList(): IVideoItem[] {
  try {
    const dataStr = localStorage.getItem(VideoListKey);
    if (!dataStr) return [];

    const data = JSON.parse(dataStr);
    if (Array.isArray(data)) return data;
  } catch (e) {
    console.error(e);
  }
  return [];
}

export function getVideoListLen(): number {
  try {
    return +localStorage.getItem(VideoListLenKey)!;
  } catch {
    return 0;
  }
}

export function setVideoList(list: IVideoItem[]) {
  try {
    const dataStr = JSON.stringify(list);
    localStorage.setItem(VideoListKey, dataStr);
    localStorage.setItem(VideoListLenKey, list.length.toString());
  } catch (e) {
    console.error(e);
  }
}

export function getHistoryList(): string[] {
  try {
    const dataStr = localStorage.getItem(HistoryListKey);
    if (dataStr) {
      const data = JSON.parse(dataStr);
      if (Array.isArray(data)) return data;
    }
  } catch (e) {
    console.error(e);
  }
  return [];
}

export function setHistoryList(list: string[]) {
  try {
    const dataStr = JSON.stringify(list);
    localStorage.setItem(HistoryListKey, dataStr);
  } catch (e) {
    console.error(e);
  }
}

export function transformVideoItem(data: any): IVideoItem | null {
  if (!data) return null;

  try {
    const {
      bvid,
      title,
      pic,
      uri,
      owner = {},
      stat,
      duration,
      is_followed,
      pubdate,
    } = data;

    const { mid, name } = owner;

    return {
      bvid,
      title,
      pic,
      uri,
      stat,
      duration,
      is_followed,
      pubdate,
      owner: { mid, name },
    };
  } catch {
    return null;
  }
}

export async function refreshVideos() {
  const freshCount = 1; // Math.ceil(Math.random() * 10);

  const { data } = await axios
    .get("https://api.bilibili.com/x/web-interface/index/top/feed/rcmd", {
      withCredentials: true,
      params: {
        y_num: 5,
        fresh_idx_1h: freshCount,
        fresh_idx: freshCount,
        feed_version: "V4",
        fetch_row: 4, // Math.ceil(Math.random() * 20),
        homepage_ver: 1,
        ps: 15, // Math.ceil(Math.random() * 20),
        fresh_type: 4, // Math.ceil(Math.random() * 10),
      },
    })
    .then((res) => res.data);

  if (!data.item.length) return;

  const oldItems = getVideoList();
  const historyList = getHistoryList();
  const itemSet = new Set(oldItems.map((e) => e.bvid).concat(historyList));
  const items = (data.item as any[])
    .map(transformVideoItem)
    .filter((e) => e && e.bvid && !itemSet.has(e.bvid)) as IVideoItem[];

  setVideoList(
    oldItems
      .concat(items)
      .filter((e) => e && e.bvid)
      .sort()
  );
}

export function popVideoItem(): IVideoItem | null {
  const len = getVideoListLen();

  if (len > 0) {
    const items = getVideoList();
    const item = items.shift();

    if (item) {
      const historyList = getHistoryList();
      historyList.unshift(item.bvid);
      setHistoryList(historyList);
    }

    setVideoList(items);
    return item!;
  }

  return null;
}
