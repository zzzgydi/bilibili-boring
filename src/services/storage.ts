export function storage<T = any>(
  key: string
): { set: (data?: T) => void; get: () => T | undefined | null };

export function storage<T = any>(
  key: string,
  defaultValue: T
): { set: (data?: T) => void; get: () => T };

export function storage<T = any>(
  key: string,
  defaultValue: T,
  validate: (data: any) => boolean
): { set: (data?: T) => void; get: () => T };

export function storage<T = any>(
  key: string,
  defaultValue?: T,
  validate?: (data: any) => boolean
) {
  return {
    set: (data?: T) => {
      try {
        if (data == null) {
          localStorage.removeItem(key);
          return;
        }
        localStorage.setItem(key, JSON.stringify(data));
      } catch (e) {
        console.error(e);
      }
    },
    get: () => {
      try {
        const dataStr = localStorage.getItem(key);
        if (!dataStr) return defaultValue;

        const data = JSON.parse(dataStr) as T;
        if (!validate || (validate && validate(data))) return data;
      } catch (e) {
        console.log(e);
      }
      return defaultValue;
    },
  };
}

const VideoListKey = "boring-list";
const VideoListLenKey = "boring-list-len";
const HistoryListKey = "boring-history";

export const SVideoList = storage<IVideoItem[]>(
  "boring-list",
  [],
  Array.isArray
);
export const SVideoListLen = storage<number>("boring-list-len", 0);
export const SVideoHistoryList = storage<string[]>(
  "boring-history",
  [],
  Array.isArray
);

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
