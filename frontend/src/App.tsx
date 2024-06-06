import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPlay from "./pages/letsStartPlay/startPlay";
import PlayArea from "./pages/play_ground/playGround";
import BetItemList from "./pages/bet_slots/bet_item";
import BetTypes from "./pages/bet_types/betTypes";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartPlay />} />
          <Route path="/play_area" element={<PlayArea />} />
          <Route path="/bet_items" element={<BetItemList />} />
          <Route path='/challenges' element={<BetTypes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
