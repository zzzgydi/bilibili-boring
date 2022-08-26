import { useState } from "react";
import { useHotkeys } from "@/hooks/use-hotkeys";
import { autoPlayVideo, playVideoItem } from "@/services/play";
import { videoManager } from "@/services/video";
import { isVideoPage } from "@/services/utils";
import SettingPage from "./setting";
import VideoPage from "./video";

const Entry = () => {
  const [video, setVideo] = useState(false);
  const [setting, setSetting] = useState(false);

  useHotkeys("Escape", {
    enabled: video || setting,
    onClick: () => {
      if (setting) setSetting(false);
      else setVideo(false);
    },
  });

  useHotkeys("Backspace", {
    onClick: () => setVideo(true), // 单击
    onDouble: () => {
      if (!setting) autoPlayVideo();
    }, // 双击
  });

  // 跳过当前视频
  useHotkeys(["Delete", "Meta+Backspace", "Ctrl+Backspace"], {
    enabled: !video && !setting && isVideoPage,
    onClick: async () => {
      const item = await videoManager.tryNext(5);
      playVideoItem(item?.bvid!);
    },
  });

  return (
    <>
      {video && <VideoPage onSetting={() => setSetting(true)} />}
      {setting && <SettingPage />}
    </>
  );
};

export default Entry;
