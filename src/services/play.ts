import { SVideoListLen } from "./storage";
import { isVideoPage, isBoringYes } from "./utils";
import { videoManager } from "./video";

let onended: any = null;

export async function playVideo() {
  if (!isVideoPage) {
    const item = videoManager.next();
    if (!item) return videoManager.refresh();

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
    onended = () => {
      const item = videoManager.next();
      if (!item) return videoManager.refresh();
      // 2s后自动播放下一个视频
      setTimeout(() => {
        history.pushState("", "", getVideoUrl(item));
        window.location.reload();
      }, 2500);
    };
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
    return;
  }

  if (SVideoListLen.get() < 10) {
    videoManager.refresh();
  } else {
    videoManager.latestList();
  }
}
