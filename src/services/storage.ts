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
