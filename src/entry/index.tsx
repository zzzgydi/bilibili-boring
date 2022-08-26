import { useState } from "react";
import { useHotkeys } from "@/hooks/use-hotkeys";
import { autoPlayVideo } from "@/services/play";
import VideoPage from "./video";
import SettingPage from "./setting";

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

  return (
    <>
      {video && <VideoPage onSetting={() => setSetting(true)} />}
      {setting && <SettingPage />}
    </>
  );
};

export default Entry;
