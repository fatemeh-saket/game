import { createSlice } from "@reduxjs/toolkit";

export const gameStore = createSlice({
    name: "game",
    initialState: {
        turn: 1,
        round:0,
        dropped: [],
        row: [0, 0, 0, 0, 0, 0, 0],
        winner: 0,
        winArray:[],
        timer: 0,
        scorePlayerOne: 0,
        scorePlayerTwo: 0,
        mode:""
    },
    reducers: {
        changeMode: (state, action) => {
            state.mode = action.payload
        },
        changeTurn: (state, action) => {
            state.turn = action.payload
        },
        changeRound: (state, action) => {
            state.round = action.payload
        },
        changeRow: (state, action) => {
            state.row.splice(action.payload, 1, state.row[action.payload] + 1)
        },
        changeDropped: (state, action) => {
            state.dropped = [...state.dropped, { x: 6 - state.row[action.payload[0]], y: action.payload[0], player: action.payload[1] }]
        },
        ChoosingTheWinner: (state, action) => {
            state.winner = action.payload
        },
        fillWinArray :(state, action) => {
            state.winArray=action.payload
         },
        setTimer: (state) => {
            state.timer = state.timer + 1
        },
        givingPoints: (state, action) => {
            if (action.payload === 1)
                state.scorePlayerOne = state.scorePlayerOne + 1
            if (action.payload === 2)
                state.scorePlayerTwo = state.scorePlayerTwo + 1
        },


         //************reset ******************//
        emptyBoard: (state) => {
            state.dropped = []
            state.row = [0, 0, 0, 0, 0, 0, 0]
        },
        resetTimer: (state) => {
            state.timer = 0
        },
        resetscore:(state)=>{
            state.scorePlayerOne= 0
            state.scorePlayerTwo= 0
        }

    }

})
export const { changeTurn, changeRow, changeDropped, setTimer, resetTimer, ChoosingTheWinner, givingPoints, emptyBoard,fillWinArray, resetscore,changeRound, changeMode } = gameStore.actions
export default gameStore.reducer