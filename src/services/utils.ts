export const currentUrl = window.location.href;

export const isBoringYes = currentUrl.includes("boring=yes");

export const isVideoPage = currentUrl.includes("bilibili.com/video/");

export function shuffleList(list: any[]) {
  const len = list.length;
  for (let i = 0; i < len; i++) {
    const target = Math.floor(Math.random() * len);
    if (i !== target) {
      const temp = list[i];
      list[i] = list[target];
      list[target] = temp;
    }
  }
  return list;
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
