import { mutate } from "swr";
import { useState } from "react";
import { videoManager } from "@/services/video";
import styles from "@/assets/setting.module.scss";

const SettingPage = (props: { onClose: () => void }) => {
  const [white, setWhite] = useState(videoManager.whiteText);
  const [black, setBlack] = useState(videoManager.blackText);

  const handleSave = async () => {
    videoManager.setWhiteText(white);
    videoManager.setBlackText(black);
    videoManager.updateList();
    mutate("videoList", videoManager.list);
  };

  return (
    <div className={styles.setting}>
      <a className={styles.close} onClick={props.onClose}>
        ESC
      </a>

      <div className={styles.black}>
        <h3>黑名单</h3>
        <div className={styles.textarea}>
          <textarea
            name="boring-blacklist"
            rows={8}
            value={black}
            onChange={(e) => setBlack(e.target.value)}
          />
        </div>
      </div>

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

      <div className={styles.footer}>
        <button className={styles.saveBtn} onClick={handleSave}>
          保存
        </button>
      </div>
    </div>
  );
};

export default SettingPage;
