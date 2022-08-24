import { popVideoItem, refreshVideos } from "./storage";

export const currentUrl = window.location.href;

export const isBoringYes = currentUrl.includes("boring=yes");

export const isVideoPage = currentUrl.includes("bilibili.com/video/");

let onended: any = null;

export async function nextVideo() {
  const item = popVideoItem();
  if (!item) return refreshVideos();

  history.pushState("", "", getVideoUrl(item));
  window.location.reload();
}

export async function playVideo() {
  if (!isVideoPage) {
    const item = popVideoItem();
    if (!item) return refreshVideos();

    window.location.href = getVideoUrl(item);
    return;
  }

  console.log("playing video");

  let video = document.querySelector(
    ".bpx-player-container video"
  ) as HTMLVideoElement;

  if (!video) {
    video = document.querySelector(
      ".bpx-player-container bwp-video"
    ) as HTMLVideoElement;
  }

  if (onended) video?.removeEventListener("ended", onended);
  if (video) {
    onended = nextVideo;
    video.addEventListener("ended", onended);
  }

  const fullBtn = document.querySelector(
    ".bpx-player-control-wrap div.bpx-player-ctrl-btn.bpx-player-ctrl-web"
  ) as HTMLDivElement;

  console.log("handle video", !!video, !!fullBtn);

  fullBtn?.click();
}

export function getVideoUrl(item: IVideoItem) {
  return `${window.location.origin}/video/${item.bvid}?boring=yes`;
}

export function setupDefault() {
  if (isVideoPage && isBoringYes) {
    // history.replaceState("", "", currentUrl.replace("boring=yes", "boring=no"));
    setTimeout(() => playVideo(), 1500);
  }
}
