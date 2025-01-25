import { useEffect } from 'react'
import '../../style/GameBoard.css'

const GameBoard = () => {
    const rows = 6
    const cols = 7
    const boards = new Array(rows).fill().map(() => new Array(cols).fill(""))

    return (
        <div className="container">
            {
                boards.map(
                    (row, i) =>
                        row.map(
                            (col, j) =>
                                <div key={i + '_' + j}>{col}</div>
                        ))
            }

        </div>
    )
}
export default GameBoard