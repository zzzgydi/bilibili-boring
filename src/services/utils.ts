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

export function parseDate(timestamp: number): string {
  if (!timestamp) return "-";

  const date = new Date(timestamp * 1000);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${month}-${day}`;
}

export function parseDuration(duration: number): string {
  if (!duration) return "-";

  const hour = Math.floor(duration / 3600);
  const mins = Math.floor((duration - hour * 60) / 60);
  const secs = duration % 60;

  const minsStr = mins.toString().padStart(2, "0");
  const secsStr = secs.toString().padStart(2, "0");

  if (hour > 0) return `${hour}:${minsStr}:${secsStr}`;
  return `${minsStr}:${secsStr}`;
}

export async function sleep(wait: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, wait));
}

export async function querySelector<T extends Element>(
  selector: string,
  retryCount: number = 5,
  retryInterval: number = 100
): Promise<T | null> {
  let dom: T | null = null;

  while (!dom && retryCount-- >= 0) {
    dom = document.querySelector<T>(selector);
    await sleep(retryInterval);
  }

  return dom;
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
