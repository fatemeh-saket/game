import { useState } from 'react'
import {
    changeTurn, ChoosingTheWinner, emptyBoard, givingPoints, fillWinArray, resetscore, resetTimer, changeRound, changeRow, changeDropped
} from '../store/gameStore'

export const playAgain = ({ scorePlayerOne, scorePlayerTwo, dispach }) => {

    dispach(changeRound(scorePlayerTwo + scorePlayerOne))
    const rondNumber = scorePlayerTwo + scorePlayerOne
    dispach(ChoosingTheWinner(0))
    dispach(emptyBoard())

    if (rondNumber % 2 == 0) {
        dispach(changeTurn(1))
        dispach(resetTimer())
    }
    if (rondNumber % 2 != 0) {
        dispach(changeTurn(2))
        dispach(resetTimer())
    }
}

export const wins = ({ dropped, dispach, turn }) => {

    const p1Records = dropped.filter(element => element.player === 1)
    const p2Records = dropped.filter(element => element.player === 2)
    let result = "reject"
    p1Records.forEach(({ x, y }) => {

        if (p1Records.find(m => m.x === x + 1 && m.y === y) &&
            p1Records.find(m => m.x === x + 2 && m.y === y) &&
            p1Records.find(m => m.x === x + 3 && m.y === y)) {
            dispach(ChoosingTheWinner(1))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 1 }, { x: x + 1, y: y, player: 1 }, { x: x + 2, y: y, player: 1 }, { x: x + 3, y: y, player: 1 }]))
            result = "done"
        }

        if (p1Records.find(m => m.x === x && m.y === y + 1) &&
            p1Records.find(m => m.x === x && m.y === y + 2) &&
            p1Records.find(m => m.x === x && m.y === y + 3)) {
            dispach(ChoosingTheWinner(1))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 1 }, { x: x, y: y + 1, player: 1 }, { x: x, y: y + 2, player: 1 }, { x: x, y: y + 3, player: 1 }]))
            result = "done"
        }

        if (p1Records.find(m => m.x === x - 1 && m.y === y + 1) &&
            p1Records.find(m => m.x === x - 2 && m.y === y + 2) &&
            p1Records.find(m => m.x === x - 3 && m.y === y + 3)
        ) {
            dispach(ChoosingTheWinner(1))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 1 }, { x: x - 1, y: y + 1, player: 1 }, { x: x - 2, y: y + 2, player: 1 }, { x: x - 3, y: y + 3, player: 1 }]))
            result = "done"
        }

        if (p1Records.find(m => m.x === x + 1 && m.y === y + 1) &&
            p1Records.find(m => m.x === x + 2 && m.y === y + 2) &&
            p1Records.find(m => m.x === x + 3 && m.y === y + 3)
        ) {
            dispach(ChoosingTheWinner(1))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 1 }, { x: x + 1, y: y + 1, player: 1 }, { x: x + 2, y: y + 2, player: 1 }, { x: x + 3, y: y + 3, player: 1 }]))
            result = "done"
        }
    });


    p2Records.forEach(({ x, y }) => {

        if (p2Records.find(m => m.x === x + 1 && m.y === y) &&
            p2Records.find(m => m.x === x + 2 && m.y === y) &&
            p2Records.find(m => m.x === x + 3 && m.y === y)) {
            dispach(ChoosingTheWinner(2))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 2 }, { x: x + 1, y: y, player: 2 }, { x: x + 2, y: y, player: 2 }, { x: x + 3, y: y, player: 2 }]))
            result = "done"
        }

        if (p2Records.find(m => m.x === x && m.y === y + 1) &&
            p2Records.find(m => m.x === x && m.y === y + 2) &&
            p2Records.find(m => m.x === x && m.y === y + 3)) {
            dispach(ChoosingTheWinner(2))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 2 }, { x: x, y: y + 1, player: 2 }, { x: x, y: y + 2, player: 2 }, { x: x, y: y + 3, player: 2 }]))
            result = "done"
        }

        if (p2Records.find(m => m.x === x - 1 && m.y === y + 1) &&
            p2Records.find(m => m.x === x - 2 && m.y === y + 2) &&
            p2Records.find(m => m.x === x - 3 && m.y === y + 3)
        ) {
            dispach(ChoosingTheWinner(2))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 2 }, { x: x - 1, y: y + 1, player: 2 }, { x: x - 2, y: y + 2, player: 2 }, { x: x - 3, y: y + 3, player: 2 }]))
            result = "done"
        }

        if (p2Records.find(m => m.x === x + 1 && m.y === y + 1) &&
            p2Records.find(m => m.x === x + 2 && m.y === y + 2) &&
            p2Records.find(m => m.x === x + 3 && m.y === y + 3)
        ) {
            dispach(ChoosingTheWinner(2))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 2 }, { x: x + 1, y: y + 1, player: 2 }, { x: x + 2, y: y + 2, player: 2 }, { x: x + 3, y: y + 3, player: 2 }]))
            result = "done"
        }

    });
    return result
}

export const resetGame = (dispach) => {
    dispach(ChoosingTheWinner(0))
    dispach(resetscore())
    dispach(resetTimer())
    dispach(fillWinArray([]))
    dispach(emptyBoard())
    dispach(changeTurn(1))
}

// const emptyCell = (dropped, col, row) => {
//     const result = dropped.findIndex((element) => element.y === col && element.x === row)
//     return result
// }

const systemAlgorithm = ({ dropped }) => {
    console.log("systemAlgorithm")
    const player1 = dropped.filter(element => element.player === 1)
    const player2 = dropped.filter(element => element.player === 2)
    let column
    let left = 0
    let Right = 0


    // **************************  اولین حرکت را وسط برد میگذاریم
    if (dropped[0]?.y !== 3) {
        return column = 0
    }
    // **************************  بررسی قرار داشتن رنگ قرمز در وسط برد     
    if (dropped[0]?.y === 3 && dropped[0]?.player === 1) {

        //   به صورت ستونی پشت هم قرار گیرند قرمز ها
        if (dropped.findIndex(element => element.y === 3 && element.x === 4 && element.player == 2) == -1
            && dropped.findIndex(element => element.y === 3 && element.x === 3 && element.player == 2) == -1
            && dropped.findIndex(element => element.y === 3 && element.x === 2 && element.player == 2) == -1
        )
            return column = 3

        // بررسی میشود سطر پایین نیمه ی راست برد خالی یاشد
        if (dropped.findIndex(element => element.y === 0 && element.x === 5 && element.player === 2) === -1
            && dropped.findIndex(element => element.y === 1 && element.x === 5 && element.player === 2) === -1
            && dropped.findIndex(element => element.y === 2 && element.x === 5 && element.player === 2) === -1) {
            column = 2
            if (dropped.findIndex(element => element.y === 1 && element.x === 5 && element.player === 2) === -1
                && dropped.findIndex(element => element.y === 2 && element.x === 5 && element.player === 1) !== -1)
                column = 1

            if (dropped.findIndex(element => element.y === 1 && element.x === 5 && element.player === 1) !== -1
                && dropped.findIndex(element => element.y === 2 && element.x === 5 && element.player === 1) !== -1)
                column = 0

            return column

        }

        // بررسی میشود سطر پایین نیمه ی چپ برد خالی یاشد
        if (dropped.findIndex(element => element.y === 4 && element.x === 5 && element.player === 2) === -1
            && dropped.findIndex(element => element.y === 5 && element.x === 5 && element.player === 2) === -1
            && dropped.findIndex(element => element.y === 6 && element.x === 5 && element.player === 2) === -1) {
            return column = 4

        }











    }







}


export const systemMove = async ({ turn, dispach, setCol, row, setPauseTime, setDelay, setPointRow, dropped, col }) => {
    const delay = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
    let column = systemAlgorithm({ dropped })



    // // ***************اولین حرکت وسط برد باشد
    // if (dropped[0]?.y !== 3) {
    //     column = 3
    // }

    // ***************  اگر اولین حرکتش وسط برد باشد حرکت بعدی روی ان قرار گیرد   
    // if (dropped[0]?.y === 3 && dropped[0]?.player === 1 && dropped.findIndex(element => element.y === 3 && element.x === 4) == -1) {
    //     column = 3
    // }

    // ***************  اگر وسط مرکز دو تا ستون قرمز باشد و سومی زرد نباشد ان ستون سوم را زرد میکنیم   

    // if (dropped[0]?.y === 3
    //     && dropped[0]?.player === 1
    //     && dropped.findIndex(element => element.y === 3 && element.x === 4 && element.player === 1) !== -1
    //     && dropped.findIndex(element => element.y === 3 && element.x === 3 && element.player === 2) == -1) {
    //     column = 3
    // }


    // if (dropped[0]?.y === 3
    //     && dropped.findIndex(element => element.y === 0 && element.x === 5 && element.player === 2) === -1
    //     && dropped.findIndex(element => element.y === 1 && element.x === 5 && element.player === 2) === -1
    //     && dropped.findIndex(element => element.y === 2 && element.x === 5 && element.player === 2) === -1
    // ) {
    //     column = 2
    // }
    // if (dropped[0]?.y === 3
    //     && dropped.findIndex(element => element.y === 0 && element.x === 5 && element.player === 2) === -1
    //     && dropped.findIndex(element => element.y === 1 && element.x === 5 && element.player === 2) === -1
    //     && dropped.findIndex(element => element.y === 2 && element.x === 5 && element.player === 1) !== -1
    // ) {
    //     column = 1
    // }
    // if (dropped[0]?.y === 3
    //     && dropped.findIndex(element => element.y === 0 && element.x === 5 && element.player === 2) === -1
    //     && dropped.findIndex(element => element.y === 1 && element.x === 5 && element.player === 1) !== -1
    //     && dropped.findIndex(element => element.y === 2 && element.x === 5 && element.player === 2) === -1
    // ) {
    //     column = 0
    // }

    // if (dropped[0]?.y === 3 && dropped[0]?.player === 1 && dropped.findIndex(element => element.y === 3 && element.x === 4 ) == -1) {
    //     column = 3
    // }























    setTimeout(() => {
        setCol(column)
    }, 500)
    await delay(1000);
    setTimeout(() => {
        if (5 - row[col] >= 0) {
            dispach(changeTurn(turn == 1 ? 2 : 1))
            dispach(changeDropped([column, turn]))

            // ***** timer
            dispach(resetTimer())
            setPauseTime(0)
            setDelay(0)
        }
    }, 500)
    dispach(changeRow(column))
    setPointRow(5 - row[column])






}


