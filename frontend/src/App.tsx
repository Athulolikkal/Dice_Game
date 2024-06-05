import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPlay from "./pages/letsStartPlay/startPlay";
import PlayArea from "./pages/play_ground/playGround";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartPlay />} />
          <Route path="/play_area" element={<PlayArea />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
