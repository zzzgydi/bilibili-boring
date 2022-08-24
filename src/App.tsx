import { setupDefault, playVideo } from "./play";
import { refreshVideos } from "./storage";
import "./App.css";

setupDefault();

function App() {
  return (
    <div className="App">
      <button onClick={refreshVideos}>刷新</button>
      <button onClick={playVideo}>播放</button>
    </div>
  );
}

export default App;
