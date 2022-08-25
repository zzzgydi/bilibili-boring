import { useEffect, useRef, useState, useTransition } from "react";
import { useHotkey } from "@/hooks/use-hotkey";
import { videoManager } from "@/services/video";
import { playVideoItem } from "@/services/play";
import { parseDate, parseDuration } from "@/services/utils";
import styles from "./video-list.module.scss";

interface Props {
  onClose: () => void;
}

const VideoList = (props: Props) => {
  const { onClose } = props;

  const [list, setList] = useState(videoManager.list);
  const [page, setPage] = useState(0);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null!);

  useHotkey("Escape", onClose);

  const setFocus = () => {
    setTimeout(() => {
      (ref.current.firstElementChild as HTMLDivElement)?.focus();
    }, 50);
  };

  useEffect(() => {
    startTransition(() => {
      setList(videoManager.latestList());
      setFocus();
    });
  }, []);

  const onPrev = () => {
    setPage((p) => Math.max(0, p - 1));
    setFocus();
  };
  const onNext = () => {
    setPage((p) => Math.min(list.length / 6 - 1, p + 1));
    setFocus();
  };

  const handleClickItem = async (bvid: string) => {
    const item = videoManager.nextByBvid(bvid);
    if (item) playVideoItem(item);
  };

  const handleRefresh = async () => {
    await videoManager.refresh();
    setList(videoManager.list);
  };

  if (isPending) return null;

  return (
    <div className={styles.container}>
      <div
        className={styles.leftBtn}
        tabIndex={2}
        onClick={onPrev}
        onKeyDown={(e) => e.key === "Enter" && onPrev()}
      />

      <div className={styles.content} ref={ref}>
        {list.slice(page * 6, page * 6 + 6).map((item) => (
          <div
            className={styles.item}
            key={item.bvid}
            tabIndex={1}
            onClick={() => handleClickItem(item.bvid)}
            onKeyDown={(e) => e.key === "Enter" && handleClickItem(item.bvid)}
          >
            <div className={styles.imgWrap}>
              <img src={item.pic} alt={item.title} />

              <div className={styles.top}>
                <span>
                  <svg>
                    <use xlinkHref="#widget-up"></use>
                  </svg>
                  {item.owner?.name}
                </span>

                <span>{parseDate(item.pubdate)}</span>
              </div>

              <div className={styles.bottom}>
                <span>{parseDuration(item.duration)}</span>
              </div>
            </div>

            <div className={styles.title}>{item.title}</div>
          </div>
        ))}

        <div className={styles.setting}>
          <span>库存：{list.length}</span>
          <button
            tabIndex={3}
            onClick={handleRefresh}
            onKeyDown={(e) => e.key === "Enter" && handleRefresh()}
          >
            刷新
          </button>
        </div>
      </div>

      <div
        className={styles.rightBtn}
        tabIndex={2}
        onClick={onNext}
        onKeyDown={(e) => e.key === "Enter" && onNext()}
      />
    </div>
  );
};

export default VideoList;
