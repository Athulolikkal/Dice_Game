/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StartPlay from "./pages/letsStartPlay/startPlay";
import PlayArea from "./pages/play_ground/playGround";
import BetItemList from "./pages/bet_slots/bet_item";
import BetTypes from "./pages/bet_types/betTypes";
import { useSelector } from 'react-redux';
function App() {

  const isUser = useSelector((state: any) => state.totalPoints.started)
  const isBetType = useSelector((state: any) => state.gameInfo.betType)
  const isBetAmount = useSelector((state: any) => state.gameInfo.betAmount)
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={!isUser ? (<StartPlay />) : ((<Navigate to='/challenges' replace={true} />))} />
          <Route path="/play_area" element={isBetAmount !== undefined ? (<PlayArea />) : ((<Navigate to='/bet_items' replace={true} />))} />
          <Route path="/bet_items" element={isBetType !== undefined ? (<BetItemList />) : ((<Navigate to='/challenges' replace={true} />))} />
          <Route path='/challenges' element={isUser ? (<BetTypes />) : ((<Navigate to='/' replace={true} />))} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
