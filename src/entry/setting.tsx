import { useEffect, useState } from "react";
import { videoManager } from "@/services/video";
import styles from "@/assets/setting.module.scss";

const SettingPage = () => {
  const [white, setWhite] = useState(videoManager.whiteText);
  const [black, setBlack] = useState(videoManager.blackText);

  useEffect(() => videoManager.setWhiteText(white), [white]);
  useEffect(() => videoManager.setBlackText(black), [black]);

  return (
    <div className={styles.setting}>
      <div className={styles.white}>
        <h3>白名单</h3>

        <div className={styles.textarea}>
          <textarea
            name="boring-whitelist"
            rows={5}
            value={white}
            onChange={(e) => setWhite(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.black}>
        <h3>黑名单</h3>
        <div className={styles.textarea}>
          <textarea
            name="boring-blacklist"
            rows={10}
            value={black}
            onChange={(e) => setBlack(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
