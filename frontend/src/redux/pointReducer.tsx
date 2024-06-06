import { createSlice } from "@reduxjs/toolkit";

interface IstartInfo {
    started: boolean;
    points: number
}

const initialState: IstartInfo = {
    started: false,
    points: 5000
}
const pointSice = createSlice({
    name: 'started',
    initialState: initialState,
    reducers: {
        getStart: () => {
            return {
                started: true,
                points: 5000
            }
        },
        changePoints: (state, action) => {
            return { started: state.started, points: action.payload, }
        }
    }
})

export const { getStart, changePoints } = pointSice.actions;
export default pointSice.reducer;