import { createSlice } from "@reduxjs/toolkit";

interface IGameInfo {
    betType?: string;
    betAmount?: number;

}

const initialState: IGameInfo = {
    betType: undefined,
    betAmount: undefined,
}

const gameSlice = createSlice({
    name: 'gameInfo',
    initialState,
    reducers: {
        changeBetType: (state, action) => {
            return {
                betType: action.payload,
                betAmount: state.betAmount
            }
        },
        changeBetPoint: (state, action) => {
            return {
                betType: state.betType,
                betAmount: action.payload,
            }
        }
    }
})

export const { changeBetType, changeBetPoint } = gameSlice.actions;
export default gameSlice.reducer;