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
    let isWin = "reject"
    p1Records.forEach(({ x, y }) => {

        if (p1Records.find(m => m.x === x + 1 && m.y === y) &&
            p1Records.find(m => m.x === x + 2 && m.y === y) &&
            p1Records.find(m => m.x === x + 3 && m.y === y)) {
            dispach(ChoosingTheWinner(1))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 1 }, { x: x + 1, y: y, player: 1 }, { x: x + 2, y: y, player: 1 }, { x: x + 3, y: y, player: 1 }]))
            dispach(changeTurn(0))
            isWin = "done"
        }

        if (p1Records.find(m => m.x === x && m.y === y + 1) &&
            p1Records.find(m => m.x === x && m.y === y + 2) &&
            p1Records.find(m => m.x === x && m.y === y + 3)) {
            dispach(ChoosingTheWinner(1))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 1 }, { x: x, y: y + 1, player: 1 }, { x: x, y: y + 2, player: 1 }, { x: x, y: y + 3, player: 1 }]))
            dispach(changeTurn(0))
            isWin = "done"
        }

        if (p1Records.find(m => m.x === x - 1 && m.y === y + 1) &&
            p1Records.find(m => m.x === x - 2 && m.y === y + 2) &&
            p1Records.find(m => m.x === x - 3 && m.y === y + 3)
        ) {
            dispach(ChoosingTheWinner(1))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 1 }, { x: x - 1, y: y + 1, player: 1 }, { x: x - 2, y: y + 2, player: 1 }, { x: x - 3, y: y + 3, player: 1 }]))
            dispach(changeTurn(0))
            isWin = "done"

        }

        if (p1Records.find(m => m.x === x + 1 && m.y === y + 1) &&
            p1Records.find(m => m.x === x + 2 && m.y === y + 2) &&
            p1Records.find(m => m.x === x + 3 && m.y === y + 3)
        ) {
            dispach(ChoosingTheWinner(1))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 1 }, { x: x + 1, y: y + 1, player: 1 }, { x: x + 2, y: y + 2, player: 1 }, { x: x + 3, y: y + 3, player: 1 }]))
            dispach(changeTurn(0))
            isWin = "done"

        }
    });


    p2Records.forEach(({ x, y }) => {

        if (p2Records.find(m => m.x === x + 1 && m.y === y) &&
            p2Records.find(m => m.x === x + 2 && m.y === y) &&
            p2Records.find(m => m.x === x + 3 && m.y === y)) {
            dispach(ChoosingTheWinner(2))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 2 }, { x: x + 1, y: y, player: 2 }, { x: x + 2, y: y, player: 2 }, { x: x + 3, y: y, player: 2 }]))
            dispach(changeTurn(0))
            isWin = "done"

        }

        if (p2Records.find(m => m.x === x && m.y === y + 1) &&
            p2Records.find(m => m.x === x && m.y === y + 2) &&
            p2Records.find(m => m.x === x && m.y === y + 3)) {
            dispach(ChoosingTheWinner(2))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 2 }, { x: x, y: y + 1, player: 2 }, { x: x, y: y + 2, player: 2 }, { x: x, y: y + 3, player: 2 }]))
            dispach(changeTurn(0))
            isWin = "done"

        }

        if (p2Records.find(m => m.x === x - 1 && m.y === y + 1) &&
            p2Records.find(m => m.x === x - 2 && m.y === y + 2) &&
            p2Records.find(m => m.x === x - 3 && m.y === y + 3)
        ) {
            dispach(ChoosingTheWinner(2))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 2 }, { x: x - 1, y: y + 1, player: 2 }, { x: x - 2, y: y + 2, player: 2 }, { x: x - 3, y: y + 3, player: 2 }]))
            dispach(changeTurn(0))
            isWin = "done"

        }

        if (p2Records.find(m => m.x === x + 1 && m.y === y + 1) &&
            p2Records.find(m => m.x === x + 2 && m.y === y + 2) &&
            p2Records.find(m => m.x === x + 3 && m.y === y + 3)
        ) {
            dispach(ChoosingTheWinner(2))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 2 }, { x: x + 1, y: y + 1, player: 2 }, { x: x + 2, y: y + 2, player: 2 }, { x: x + 3, y: y + 3, player: 2 }]))
            dispach(changeTurn(0))
            isWin = "done"
        }

    });
    return isWin

}

export const resetGame = (dispach) => {
    dispach(ChoosingTheWinner(0))
    dispach(resetscore())
    dispach(resetTimer())
    dispach(fillWinArray([]))
    dispach(emptyBoard())
    dispach(changeTurn(1))
}



const checkForWin = (dropped, turn) => {
    const player = dropped.filter(element => element.player === turn)
    let column = -1

    player.forEach(({ x, y }) => {
        //  به صورت عمودی سه تا کنار هم هستن
        if (player.find(m => m.x + 1 === x && m.y === y) &&
            player.find(m => m.x + 2 === x && m.y === y)
            && dropped.findIndex(m => m.x + 3 === x && m.y === y) === -1
        ) {
            console.log(" برنده عمودی ", y)

            column = y
        }

        //  به صورت افقی سه تا کنار هم هستن
        if (player.find(m => m.x === x && m.y === y + 1) &&
            player.find(m => m.x === x && m.y === y + 2)) {
            // در سمت راستشان خانه ی خالی وجود داشته باشد که خانه ی زیر آن پر است
            if (dropped.findIndex(m => m.x === x && m.y === y + 3) === -1
                && y <= 3
                && (dropped.findIndex(m => m.x === x + 1 && m.y === y + 3) !== -1 || x == 5)) {
                console.log(" برنده افقی ", y + 3)
                column = y + 3
            }
            // در سمت چپشان خانه ی خالی وجود داشته باشد که خانه ی زیر آن پر است
            if (dropped.findIndex(m => m.x === x && m.y === y - 1) === -1
                && (dropped.findIndex(m => m.x === x + 1 && m.y === y - 1) !== -1 || x == 5)) {
                console.log(" برنده افقی  ", y - 1)
                column = y - 1
            }

        }


        // به صورت مورب رو به پایین سه خانه ی کنار هم پر است
        if (player.find(m => m.x === x - 1 && m.y === y + 1) &&
            player.find(m => m.x === x - 2 && m.y === y + 2)
            && dropped.findIndex(m => m.x === x - 3 && m.y === y + 3) === -1
            && dropped.findIndex(m => m.x === x - 2 && m.y === y + 3) !== -1
            && y <= 3
        ) {
            console.log(" برنده مورب پایین", y + 3)
            column = y + 3
        }
        if (player.find(m => m.x === x - 1 && m.y === y + 1)
            && player.find(m => m.x === x - 3 && m.y === y + 3)
            && dropped.findIndex(m => m.x === x - 2 && m.y === y + 2) === -1
            && dropped.findIndex(m => m.x === x - 1 && m.y === y + 2) !== -1
            && y <= 4
        ) {
            console.log(" برنده مورب پایین", y + 2)
            column = y + 2
        }
        if (player.find(m => m.x === x - 2 && m.y === y + 2)
            && player.find(m => m.x === x - 3 && m.y === y + 3)
            && dropped.findIndex(m => m.x === x - 1 && m.y === y + 1) === -1
            && dropped.findIndex(m => m.x === x && m.y === y + 1) !== -1
            && y <= 5
        ) {
            console.log(" برنده مورب پایین", y + 1)
            column = y + 1
        }


        // به صورت مورب رو به بالا سه خانه ی کنار هم پر است
        if (player.find(m => m.x + 1 === x && m.y + 1 === y) &&
            player.find(m => m.x + 2 === x && m.y + 2 === y) &&
            dropped.findIndex(m => m.x + 3 === x && m.y + 3 === y) === -1
            && dropped.findIndex(m => m.x + 2 === x && m.y + 3 === y) !== -1
        ) {
            console.log(" برنده مورب بالا", y - 3)
            column = y - 3
        }
        if (player.find(m => m.x + 1 === x && m.y + 1 === y) &&
            player.find(m => m.x + 3 === x && m.y + 3 === y) &&
            dropped.findIndex(m => m.x + 2 === x && m.y + 2 === y) === -1
            && dropped.findIndex(m => m.x + 1 === x && m.y + 2 === y) !== -1
        ) {
            console.log(" برنده مورب بالا", y - 2)
            column = y - 2
        }
        if (player.find(m => m.x + 2 === x && m.y + 2 === y) &&
            player.find(m => m.x + 3 === x && m.y + 3 === y) &&
            dropped.findIndex(m => m.x + 1 === x && m.y + 1 === y) === -1
            && dropped.findIndex(m => m.x === x && m.y + 1 === y) !== -1
        ) {
            console.log(" برنده مورب بالا", y - 1)
            column = y - 1
        }




    });

    return column

}

const foundRow = (dropped) => {
    const player = dropped.filter(element => element.player === 1)
    let column = -1

    player.forEach(({ x, y }) => {

        // *******************افقی میسازد
        if (
            player.find(m => m.x === x && m.y + 1 === y) &&
            dropped.findIndex(m => m.x === x && m.y + 2 === y) === -1 &&
            ((dropped.findIndex(m => m.x === x && m.y - 1 === y) === -1 && y >= 1) || (dropped.findIndex(m => m.x === x && m.y + 3 === y) === -1 && y <= 3))
        ) {
            console.log("افقی", y - 2)
            column = y - 2
        }

        //   *******************مورب میسازد
        if (
            player.find(m => m.x === x - 1 && m.y === y + 1) &&
            dropped.findIndex(m => m.x === x - 2 && m.y === y + 2) === -1
            && y < 5
        ) {
            console.log("مورب یک", y + 2)
            column = y + 2
        }

        if (player.find(m => m.x === x - 2 && m.y - 2 === y)
            && dropped.findIndex(m => m.x === x - 1 && m.y - 1 === y) === -1
            && dropped.findIndex(m => m.x === x - 3 && m.y - 3 === y) === -1
            && dropped.findIndex(m => m.x === x && m.y - 1 === y) === -1
        ) {
            console.log("مورب دو", y + 1)
            column = y + 1
        }

        // *******************عمودی میسازد

        // .دوتا خونه رنگ قرمز هست و حداقل دو تا بالای ان جا دارد
        if (player.find(m => m.x === x + 1 && m.y === y) &&
            (dropped.findIndex(m => m.x === x - 1 && m.y === y) === -1 && x >= 2)
        ) {
            console.log("عمودی یک", y)
            column = y
        }
        // حداقل سه تا خانه ی بالای ان خالی است
        if (x >= 3 && dropped.findIndex(m => m.x === x - 1 && m.y === y) === -1
        ) {
            console.log("عمودی دو", y)
            column = y
        }


    })
    return column
}


const systemAlgorithm = ({ dropped }) => {
    let column
    let dangerColumn = checkForWin(dropped, 2)
    let winColumn = checkForWin(dropped, 1)

    // ***  اولین حرکت را وسط برد میگذاریم
    if (dropped.length === 0 || (dropped.length === 1 && dropped[0]?.y !== 3 && dropped[0]?.player === 2)) {
        return column = 3
    }

    // ***  بررسی برنده شدن با یک حرکت
    if (winColumn !== -1) {
        // return column = winColumn
    }

    // ***  بررسی جلوگیری از برنده شدن طرف مقابل با یک حرکت
    if (dangerColumn !== -1) {
        return column = dangerColumn
    }

    // **************************  بررسی قرار داشتن رنگ قرمز در وسط برد     
    if (dropped.findIndex(element => element.x === 5 && element.y === 3 && element.player === 1) !== -1) {

        //   به صورت ستونی پشت هم قرار گیرند قرمز ها
        if (dropped.findIndex(element => element.y === 3 && element.x === 4 && element.player == 2) == -1
            && dropped.findIndex(element => element.y === 3 && element.x === 3 && element.player == 2) == -1
            && dropped.findIndex(element => element.y === 3 && element.x === 2 && element.player == 2) == -1
        )
            return column = 3

        // بررسی میشود سطر پایین نیمه ی راست برد خالی باشد
        if (dropped.findIndex(element => element.y === 0 && element.x === 5 && element.player === 2) === -1
            && dropped.findIndex(element => element.y === 1 && element.x === 5 && element.player === 2) === -1
            && dropped.findIndex(element => element.y === 2 && element.x === 5 && element.player === 2) === -1) {

            column = 2
            if (dropped.findIndex(element => element.y === 2 && element.x === 5 && element.player === 1) !== -1)
                column = 1

            return column

        }

        // بررسی میشود سطر پایین نیمه ی چپ برد خالی یاشد
        if (dropped.findIndex(element => element.y === 4 && element.x === 5 && element.player === 2) === -1
            && dropped.findIndex(element => element.y === 5 && element.x === 5 && element.player === 2) === -1
            && dropped.findIndex(element => element.y === 6 && element.x === 5 && element.player === 2) === -1) {
            column = 4
            if (dropped.findIndex(element => element.y === 4 && element.x === 5 && element.player === 1) !== -1)
                column = 5


            return column

        }


        // قرار دادن سکه در سطر بعدی ستون کنار ستون وسط
        if (dropped.findIndex(element => element.x === 5 && element.y == 4) !== -1
            && dropped.findIndex(element => element.x === 4 && element.y == 4) === -1
        )
            return column = 4

        if (dropped.findIndex(element => element.x === 5 && element.y == 2) !== -1
            && dropped.findIndex(element => element.x === 4 && element.y == 2) === -1
        )
            return column = 2


        //    بررسی مناسب بودن گزینه ی مناسب
        if (foundRow(dropped) !== -1) {
            return column = foundRow(dropped)
        }


    }

    // **************************  بررسی قرار داشتن رنگ زرد در وسط برد     
    if (dropped.findIndex(element => element.x === 5 && element.y === 3 && element.player === 2) !== -1) {

        // وسط نیمه ی سمت راست قرار میگیرد
        if (dropped.findIndex(m => m.y === 1 && m.x === 5) === -1)
            return column = 1

        // وسط نیمه ی سمت چپ قرار میگیرد
        if (dropped.findIndex(m => m.y === 5 && m.x === 5) === -1)
            return column = 5

        // بررسی میکند اگر دوتاخانه ی پایین وسط برد پر شده و سومی خالی است. ان را پر میکند
        if (dropped.findIndex(m => m.y === 3 && m.x === 5) !== -1 &&
            dropped.findIndex(m => m.y === 3 && m.x === 4) !== -1 &&
            dropped.findIndex(m => m.y === 3 && m.x === 3) === -1
        )
            return column = 3

        // قرار دادن در سطر بالای وسط نیمه ی راست
        if (dropped.findIndex(element => element.x === 5 && element.y == 1) !== -1
            &&
            dropped.findIndex(element => element.x === 4 && element.y == 1) === -1
        )
            return column = 1

        // قرار دادن در سطر بالای وسط نیمه ی چپ
        if (dropped.findIndex(element => element.x === 5 && element.y == 5) !== -1
            &&
            dropped.findIndex(element => element.x === 4 && element.y == 5) === -1
        )
            return column = 5


        // ابتدای برد قرار گیرد برای مورب شدن
        if (dropped.findIndex(element => element.x === 5 && element.y == 5 && element.player === 1) !== -1
            && dropped.findIndex(element => element.x === 4 && element.y == 5 && element.player === 1) !== -1
            && dropped.findIndex(element => element.x === 2 && element.y == 3 && element.player === 1) !== -1
            && dropped.findIndex(element => element.x === 5 && element.y == 6) === -1
        )
            return column = 6

        // انتهای برد قرار گیرد برای مورب شدن
        if (dropped.findIndex(element => element.x === 5 && element.y == 1 && element.player === 1) !== -1
            && dropped.findIndex(element => element.x === 4 && element.y == 1 && element.player === 1) !== -1
            && dropped.findIndex(element => element.x === 2 && element.y == 3 && element.player === 1) !== -1
            && dropped.findIndex(element => element.x === 5 && element.y == 0) === -1
        )
            return column = 0


        //    بررسی مناسب بودن گزینه ی مناسب
        if (foundRow(dropped) !== -1) {
            return column = foundRow(dropped)
        }


    }







}


export const systemMove = async ({ turn, dispach, setCol, row, setPauseTime, setDelay, setPointRow, dropped }) => {

    const delay = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
    let column = systemAlgorithm({ dropped, row })
    console.log("column", column)
    setTimeout(() => {
        setCol(column)
    }, 500)
    await delay(1000);
    setTimeout(() => {
        if (5 - row[column] >= 0) {
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


