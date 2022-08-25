import { useState } from "react";
import { setupDefault, playVideo } from "@/services/play";
import { useMixedHotkey } from "@/hooks/use-hotkey";
import VideoList from "./video-list";

setupDefault();

const Entry = () => {
  const [visible, setVisible] = useState(false);

  useMixedHotkey(
    "Backspace",
    () => setVisible(true), // 单击
    () => playVideo() // 双击
  );

  if (!visible) return null;
  return <VideoList onClose={() => setVisible(false)} />;
};

export default Entry;
