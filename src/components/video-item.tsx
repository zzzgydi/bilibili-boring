import { parseDate, parseDuration } from "@/services/utils";
import styles from "@/assets/video-item.module.scss";

interface Props {
  item: IVideoItem;
  tabIndex?: number;
  onClick: () => void;
}

const VideoItem = (props: Props) => {
  const { item, tabIndex = 1, onClick } = props;

  return (
    <a
      className={styles.item}
      tabIndex={tabIndex}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className={styles.imgWrap}>
        <img src={item.pic} alt={item.title} />

        <div className={styles.top}>
          <span title={item.owner?.name}>
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

      <div className={styles.title} title={item.title}>
        {item.title}
      </div>
    </a>
  );
};

export default VideoItem;
