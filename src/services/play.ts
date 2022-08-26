import { SVideoListLen } from "./storage";
import { isVideoPage, isBoringYes, querySelector, currentUrl } from "./utils";
import { videoManager } from "./video";

let onended: any = null;

// 设置视频播放结束后自动播放下一个视频
export async function setupVideoEnd() {
  if (!isVideoPage) return;

  let video = await querySelector<HTMLVideoElement>(
    ".bpx-player-container video"
  );

  if (!video) {
    video = await querySelector<HTMLVideoElement>(
      ".bpx-player-container bwp-video"
    );
  }

  if (!video) return;

  if (onended) {
    video.removeEventListener("ended", onended);
  }

  onended = async () => {
    const item = await videoManager.tryNext(10);
    if (!item) return;

    // 2s后自动播放下一个视频
    setTimeout(() => {
      history.pushState("", "", getVideoUrl(item));
      window.location.reload();
    }, 2000);
  };

  video.addEventListener("ended", onended);
}

export async function setupFullScreen(): Promise<void> {
  if (!isVideoPage) return;

  const fullBtn = await querySelector<HTMLDivElement>(
    ".bpx-player-control-wrap .bpx-player-ctrl-btn.bpx-player-ctrl-full"
  );

  const onFullScreenError = async () => {
    const webBtn = await querySelector<HTMLDivElement>(
      ".bpx-player-control-wrap .bpx-player-ctrl-btn.bpx-player-ctrl-web"
    );
    webBtn?.click();
    window.removeEventListener("fullscreenerror", onFullScreenError);
  };

  window.addEventListener("fullscreenerror", onFullScreenError);

  fullBtn?.click();
}

export function getVideoUrl(item: IVideoItem) {
  const { protocol } = window.location;
  return `${protocol}//www.bilibili.com/video/${item.bvid}?boring=yes`;
}

export async function playVideo() {
  if (!isVideoPage) {
    const next = await videoManager.tryNext(5);
    if (next) {
      window.location.href = getVideoUrl(next);
    }
    return;
  }

  setupFullScreen();
  setupVideoEnd();
}

export function playVideoItem(bvid: string) {
  const item = videoManager.nextByBvid(bvid);
  if (!item) return;
  if (!isVideoPage) {
    window.location.href = getVideoUrl(item);
  } else {
    history.pushState("", "", getVideoUrl(item));
    location.reload();
  }
}

export function setupDefault() {
  if (isVideoPage && isBoringYes) {
    // 避免刷新页面后自动全屏
    history.replaceState("", "", currentUrl.replace("boring=yes", "boring=no"));
    setTimeout(() => playVideo(), 1500);
    return;
  }

  if (SVideoListLen.get() < 10) {
    videoManager.refresh();
  }
}
