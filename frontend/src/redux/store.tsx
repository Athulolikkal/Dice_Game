import { configureStore } from "@reduxjs/toolkit";
import pointReducer from "./pointReducer";
import gameReducer from "./gameReducer";

const store = configureStore({
    reducer: {
        totalPoints: pointReducer,
        gameInfo: gameReducer,
    }
});

export default store;
export type StoreType = typeof store;