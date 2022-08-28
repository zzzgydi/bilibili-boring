import useSWR from "swr";
import { useRef } from "react";
import { useHotkeys } from "@/hooks/use-hotkeys";
import { usePage } from "@/hooks/use-page";
import { videoManager } from "@/services/video";
import { playVideoItem } from "@/services/play";
import VideoItem from "@/components/video-item";
import styles from "@/assets/entry.module.scss";

const VideoPage = (props: { onSetting: () => void }) => {
  const { data: list = [], mutate } = useSWR(
    "videoList",
    () => videoManager.list
  );

  const contentRef = useRef<HTMLDivElement>(null!);
  useHotkeys("Tab", {
    once: true,
    onClick: () => {
      setTimeout(() => {
        (contentRef.current.firstElementChild as HTMLElement)?.focus();
      }, 50);
    },
  });

  const { slice, onPrev, onNext } = usePage(list, 6);

  const handleDelete = (bvid: string, index: number) => {
    videoManager.getByBvid(bvid); // 删掉
    mutate();
    setTimeout(() => {
      (contentRef.current.children[index] as HTMLElement)?.focus();
    }, 0);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.leftBtn}
        tabIndex={1}
        onClick={() => onPrev(6)}
      />

      <div className={styles.content} ref={contentRef}>
        {slice.map((item, index) => (
          <VideoItem
            key={item.bvid}
            item={item}
            tabIndex={1}
            onClick={() => playVideoItem(item.bvid)}
            onDelete={() => handleDelete(item.bvid, index)}
          />
        ))}

        <div className={styles.setting}>
          <span>库存：{list.length}</span>
          <button
            tabIndex={2}
            onClick={async () => {
              await videoManager.refresh();
              mutate();
            }}
          >
            刷新
          </button>
          <button tabIndex={2} onClick={props.onSetting}>
            设置
          </button>
        </div>
      </div>

      <button
        className={styles.rightBtn}
        tabIndex={1}
        onClick={() => onNext(6)}
      />
    </div>
  );
};

export default VideoPage;
