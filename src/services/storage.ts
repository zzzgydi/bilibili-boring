type Getter<T> = () => T | undefined | null;
type NotNoneGetter<T> = () => T;
type Return<T, G> = { set: (data?: T) => void; get: G };

type Options<T> = {
  isJSON?: boolean;
  cacheTime?: number;
  validate?: (data: any) => boolean;
  stringify?: (data: any) => string;
  parse?: (data: string) => T;
};
type OptionsWithDefault<T> = Options<T> & { defaultValue: T };

export function storage<T = any>(key: string): Return<T, Getter<T>>;
export function storage<T = any>(
  key: string,
  options: OptionsWithDefault<T>
): Return<T, NotNoneGetter<T>>;

export function storage<T = any>(key: string, options?: OptionsWithDefault<T>) {
  const {
    defaultValue,
    isJSON = true,
    cacheTime = 0,
    validate,
    stringify,
    parse,
  } = options ?? {};

  let cache: T | undefined;
  let updated = 0;

  return {
    set: (data?: T) => {
      cache = data;
      updated = Date.now();

      try {
        if (data == null) {
          localStorage.removeItem(key);
          return;
        }
        const value = isJSON
          ? JSON.stringify(data)
          : stringify
          ? stringify(data)
          : (data as unknown as string);
        localStorage.setItem(key, value);
      } catch (e) {
        console.error(e);
      }
    },
    get: () => {
      if (cacheTime > 0 && Date.now() - updated < cacheTime) {
        return cache;
      }
      try {
        updated = Date.now();
        const dataStr = localStorage.getItem(key);
        if (!dataStr) return (cache = defaultValue);
        const data = isJSON
          ? (JSON.parse(dataStr) as T)
          : parse
          ? parse(dataStr)
          : (dataStr as unknown as T);

        if (!validate || (validate && validate(data))) return (cache = data);
      } catch (e) {
        console.log(e);
      }
      return (cache = defaultValue);
    },
  };
}

export const SVideoList = storage<IVideoItem[]>("boring-list", {
  defaultValue: [] as IVideoItem[],
  cacheTime: 60000,
  validate: Array.isArray,
});
export const SVideoHistoryList = storage<string[]>("boring-history", {
  defaultValue: [],
  cacheTime: 30000,
  validate: Array.isArray,
});
export const SWhitelistText = storage<string>("boring-whitelist", {
  defaultValue: "",
  isJSON: false,
  cacheTime: 20000,
});
export const SBlacklistText = storage<string>("boring-blacklist", {
  defaultValue: "",
  isJSON: false,
  cacheTime: 20000,
});
