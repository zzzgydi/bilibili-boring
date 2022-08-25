import { useEffect, useRef, useState } from "react";
import { useHotkey } from "@/hooks/use-hotkey";
import { videoManager } from "@/services/video";
import styles from "./video-list.module.scss";

interface Props {
  onClose: () => void;
}

const VideoList = (props: Props) => {
  const { onClose } = props;

  const [list, setList] = useState(() => videoManager.list);
  const [page, setPage] = useState(0);
  const ref = useRef<HTMLDivElement>(null!);

  useHotkey("Escape", onClose);

  const setFocus = () => {
    setTimeout(() => {
      (ref.current.firstElementChild as HTMLDivElement)?.focus();
    }, 50);
  };

  useEffect(() => {
    setFocus();
  }, []);

  const onPrev = () => {
    setPage((p) => Math.max(0, p - 1));
    setFocus();
  };
  const onNext = () => {
    setPage((p) => Math.min(list.length / 6 - 1, p + 1));
    setFocus();
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.leftBtn}
        tabIndex={1}
        onClick={onPrev}
        onKeyDown={(e) => e.key === "Enter" && onPrev()}
      />
      <div
        className={styles.rightBtn}
        tabIndex={2}
        onClick={onNext}
        onKeyDown={(e) => e.key === "Enter" && onNext()}
      />

      <div className={styles.content} ref={ref}>
        {list.slice(page * 6, page * 6 + 6).map((item) => (
          <div className={styles.item} key={item.bvid} tabIndex={1}>
            <img src={item.pic} alt={item.title} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
