import { useEffect, useState } from 'react'
import '../../style/DropZone.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeTurn, emptyBoard, changeRow, changeDropped, setTimer, resetTimer, ChoosingTheWinner, givingPoints } from '../../store/gameStore'
import { useParams } from 'react-router-dom'
import { systemMove, wins } from '../../utility/Utils'
const ActiveCoin = ({ turn, col, setCol, pause, winner, dropped }) => {

    const dispach = useDispatch()
    const params = useParams()

    let intervalId
    const [pointRow, setPointRow] = useState()
    const [delay, setDelay] = useState(0)
    const [pauseTime, setPauseTime] = useState(0)

    const row = useSelector(state => state.data.row)
    const round = useSelector(state => state.data.round)

    const handleKeys = (e) => {
        if (winner === 0) {

            if (e.keyCode === 37 && col >= 0 && col < 6)  /* up botton */
                setCol(col + 1)

            else if (e.keyCode === 39 && col <= 6 && col > 0) /* down botton */
                setCol(col - 1)

            else if (e.keyCode === 32 || e.keyCode === 13 || e.keyCode === 40)  /* enter or  space or play*/ {
        
                setTimeout(() => {
                    if (5 - row[col] >= 0) {
                        dispach(changeTurn(turn == 1 ? 2 : 1))
                        dispach(changeDropped([col, turn]))

                        // ***** timer
                        dispach(resetTimer())
                        setPauseTime(0)
                        setDelay(0)
                    }
                }, 500)
                dispach(changeRow(col))
                setPointRow(5 - row[col])


            }
        }
    }

    useEffect(() => {
        if (params.players === "twoPlayers" || (params.players === "systemPlay" && turn === 2)) {
            document.addEventListener('keyup', handleKeys, false)
            return () => document.removeEventListener('keyup', handleKeys)
        }

    })

    useEffect(() => {
        if (params.players === "systemPlay" && turn === 1) {
            systemMove({ turn, setCol, dispach, row, setPauseTime, setDelay, setPointRow, dropped, col })
        }

        // check for wins
        let isWine = wins({ dropped, dispach, turn })
        
        setPointRow()
        setCol(0)
        let counter = 0
        if (!pause) {
            intervalId = setInterval(() => {
                dispach(setTimer())
                if (counter === 10 - delay && isWine === "reject") {
                    counter = 0
                    setPauseTime(0)
                    setDelay(0)
                    dispach(resetTimer())
                    clearInterval(intervalId)
                    dispach(ChoosingTheWinner(turn == 1 ? 2 : 1))
                    dispach(givingPoints(turn == 1 ? 2 : 1))
                }
                counter++
                setPauseTime(counter)
            }, 1000)
            return () => clearInterval(intervalId)
        }
        if (pause) {
            setDelay(delay + pauseTime)
            clearInterval(intervalId)
        }

    }, [turn, pause, round])

    return (
        <>
            <div className={`droppedCoin p${turn} droppedCoin-column-${col === 0 && pointRow === undefined ? '-' : col} droppedCoin-row-${pointRow} `}></div>
        </>
    )
}
export default ActiveCoin