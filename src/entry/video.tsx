import { useEffect, useRef, useState, useTransition } from "react";
import { useHotkeys } from "@/hooks/use-hotkeys";
import { usePage } from "@/hooks/use-page";
import { videoManager } from "@/services/video";
import { playVideoItem } from "@/services/play";
import VideoItem from "@/components/video-item";
import styles from "@/assets/entry.module.scss";

const VideoPage = (props: { onSetting: () => void }) => {
  const [list, setList] = useState(videoManager.list);
  const [isPending, startTransition] = useTransition();

  const contentRef = useRef<HTMLDivElement>(null!);
  useHotkeys("Tab", {
    once: true,
    onClick: () => {
      setTimeout(() => {
        (contentRef.current.firstElementChild as HTMLElement)?.focus();
      }, 50);
    },
  });

  useEffect(() => {
    startTransition(() => {
      videoManager.update().then(() => setList(videoManager.list));
    });
  }, []);

  const { slice, onPrev, onNext } = usePage(list, 6);

  if (isPending) return null;

  const handleDelete = (bvid: string, index: number) => {
    videoManager.getByBvid(bvid); // 删掉
    setList(videoManager.list);
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
              setList(videoManager.list);
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
