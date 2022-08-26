import { useEffect, useRef, useState, useTransition } from "react";
import { useHotkeys } from "@/hooks/use-hotkeys";
import { usePage } from "@/hooks/use-page";
import { videoManager } from "@/services/video";
import { playVideo, playVideoItem } from "@/services/play";
import VideoItem from "./video-item";
import styles from "@/assets/entry.module.scss";

const Entry = () => {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState(videoManager.list);
  const [isPending, startTransition] = useTransition();

  useHotkeys("Escape", {
    enabled: visible,
    onClick: () => setVisible(false),
  });

  useHotkeys("Backspace", {
    onClick: () => setVisible(true), // 单击
    onDouble: () => playVideo(), // 双击
  });

  const contentRef = useRef<HTMLDivElement>(null!);
  useHotkeys("Tab", {
    once: true,
    enabled: visible,
    onClick: () => {
      setTimeout(() => {
        (contentRef.current.firstElementChild as HTMLDivElement)?.focus();
      }, 50);
    },
  });

  useEffect(() => {
    if (!visible) return;
    startTransition(() => {
      setList(videoManager.latestList());
    });
  }, [visible]);

  const { slice, onPrev, onNext } = usePage(list, 6);

  if (!visible || isPending) return null;

  return (
    <div className={styles.container}>
      <button
        className={styles.leftBtn}
        tabIndex={1}
        onClick={() => onPrev(6)}
      />

      <div className={styles.content} ref={contentRef}>
        {slice.map((item) => (
          <VideoItem
            key={item.bvid}
            item={item}
            tabIndex={1}
            onClick={() => playVideoItem(item.bvid)}
          />
        ))}

        <div className={styles.setting}>
          <span>库存：{list.length}</span>
          <button
            tabIndex={3}
            onClick={async () => {
              await videoManager.refresh();
              setList(videoManager.list);
            }}
          >
            刷新
          </button>
        </div>
      </div>

      <button
        className={styles.rightBtn}
        tabIndex={2}
        onClick={() => onNext(6)}
      />
    </div>
  );
};

export default Entry;
