import {
    changeTurn, ChoosingTheWinner, emptyBoard, givingPoints, fillWinArray, resetscore, resetTimer, changeRound
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

    p1Records.forEach(({ x, y }) => {

        if (p1Records.find(m => m.x === x + 1 && m.y === y) &&
            p1Records.find(m => m.x === x + 2 && m.y === y) &&
            p1Records.find(m => m.x === x + 3 && m.y === y)) {
            dispach(ChoosingTheWinner(1))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 1 }, { x: x + 1, y: y, player: 1 }, { x: x + 2, y: y, player: 1 }, { x: x + 3, y: y, player: 1 }]))
        }

        if (p1Records.find(m => m.x === x && m.y === y + 1) &&
            p1Records.find(m => m.x === x && m.y === y + 2) &&
            p1Records.find(m => m.x === x && m.y === y + 3)) {
            dispach(ChoosingTheWinner(1))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 1 }, { x: x, y: y + 1, player: 1 }, { x: x, y: y + 2, player: 1 }, { x: x, y: y + 3, player: 1 }]))
        }

        if (p1Records.find(m => m.x === x - 1 && m.y === y + 1) &&
            p1Records.find(m => m.x === x - 2 && m.y === y + 2) &&
            p1Records.find(m => m.x === x - 3 && m.y === y + 3)
        ) {
            dispach(ChoosingTheWinner(1))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 1 }, { x: x - 1, y: y + 1, player: 1 }, { x: x - 2, y: y + 2, player: 1 }, { x: x - 3, y: y + 3, player: 1 }]))
        }

        if (p1Records.find(m => m.x === x + 1 && m.y === y + 1) &&
            p1Records.find(m => m.x === x + 2 && m.y === y + 2) &&
            p1Records.find(m => m.x === x + 3 && m.y === y + 3)
        ) {
            dispach(ChoosingTheWinner(1))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 1 }, { x: x + 1, y: y + 1, player: 1 }, { x: x + 2, y: y + 2, player: 1 }, { x: x + 3, y: y + 3, player: 1 }]))
        }
    });


    p2Records.forEach(({ x, y }) => {

        if (p2Records.find(m => m.x === x + 1 && m.y === y) &&
            p2Records.find(m => m.x === x + 2 && m.y === y) &&
            p2Records.find(m => m.x === x + 3 && m.y === y)) {
            dispach(ChoosingTheWinner(2))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 2 }, { x: x + 1, y: y, player: 2 }, { x: x + 2, y: y, player: 2 }, { x: x + 3, y: y, player: 2 }]))

        }

        if (p2Records.find(m => m.x === x && m.y === y + 1) &&
            p2Records.find(m => m.x === x && m.y === y + 2) &&
            p2Records.find(m => m.x === x && m.y === y + 3)) {
            dispach(ChoosingTheWinner(2))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 2 }, { x: x, y: y + 1, player: 2 }, { x: x, y: y + 2, player: 2 }, { x: x, y: y + 3, player: 2 }]))

        }

        if (p2Records.find(m => m.x === x - 1 && m.y === y + 1) &&
            p2Records.find(m => m.x === x - 2 && m.y === y + 2) &&
            p2Records.find(m => m.x === x - 3 && m.y === y + 3)
        ) {
            dispach(ChoosingTheWinner(2))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 2 }, { x: x - 1, y: y + 1, player: 2 }, { x: x - 2, y: y + 2, player: 2 }, { x: x - 3, y: y + 3, player: 2 }]))
        }

        if (p2Records.find(m => m.x === x + 1 && m.y === y + 1) &&
            p2Records.find(m => m.x === x + 2 && m.y === y + 2) &&
            p2Records.find(m => m.x === x + 3 && m.y === y + 3)
        ) {
            dispach(ChoosingTheWinner(2))
            dispach(givingPoints(turn == 1 ? 2 : 1))
            dispach(fillWinArray([{ x: x, y: y, player: 2 }, { x: x + 1, y: y + 1, player: 2 }, { x: x + 2, y: y + 2, player: 2 }, { x: x + 3, y: y + 3, player: 2 }]))
        }

    });

}

export const resetGame = (dispach) => {
    dispach(resetscore())
    dispach(changeTurn(1))
    dispach(emptyBoard())
    dispach(resetTimer())
    dispach(fillWinArray([]))
    dispach(ChoosingTheWinner(0))
}
