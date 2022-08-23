import axios from "axios";
import "./App.css";

const getData = async () => {
  const freshCount = Math.ceil(Math.random() * 10);

  const { data } = await axios
    .get("https://api.bilibili.com/x/web-interface/index/top/feed/rcmd", {
      params: {
        y_num: 5,
        fresh_idx_1h: freshCount,
        fresh_idx: freshCount,
        feed_version: "V4",
        fetch_row: Math.ceil(Math.random() * 20),
        homepage_ver: 1,
        ps: Math.ceil(Math.random() * 20),
        fresh_type: Math.ceil(Math.random() * 10),
      },
    })
    .then((res) => res.data);

  if (!data.item.length) return;

  const index = Math.floor(Math.random() * data.item.length);
  const item = data.item[index];
  if (!item?.uri) return;

  window.location.href = item.uri + "?boring=1";
};

const currentUrl = window.location.href;
if (currentUrl.includes("boring=1")) {
  history.pushState("", "", currentUrl.replace("boring=1", "boring=0"));

  setTimeout(() => {
    let video = document.querySelector(
      ".bpx-player-container video"
    ) as HTMLVideoElement;

    if (!video) {
      video = document.querySelector(
        ".bpx-player-container bwp-video"
      ) as HTMLVideoElement;

      if (!video) return;
    }

    const fullBtn = document.querySelector(
      ".bpx-player-control-wrap div.bpx-player-ctrl-btn.bpx-player-ctrl-web"
    ) as HTMLDivElement;

    fullBtn?.click();

    video.addEventListener("ended", () => getData());
  }, 1000);
}

function App() {
  return (
    <div className="App">
      <button onClick={getData}>点击</button>
    </div>
  );
}

export default App;
