import {  useState } from 'react'
import '../../style/DropZone.css'
import ActiveCoin from './ActiveCoin'
import {  useSelector } from 'react-redux'

const DropZone = ({ pause }) => {

    const dropped = useSelector(state => state.data.dropped)
    const turn = useSelector(state => state.data.turn)
    const winner = useSelector(state => state.data.winner)
    const winArray = useSelector(state => state.data.winArray)
    const [col, setCol] = useState(0)

    return (
        <div className='drap-zone'>
            <ActiveCoin
                turn={turn}
                col={col}
                setCol={setCol}
                dropped={dropped}
                pause={pause}
                winner={winner}
            />

            {dropped.map((element, index) => <div
                key={index}
                className={`droppedCoin p${element.player} droppedCoin-column-${element.y} droppedCoin-row-${element.x} `}
            >{winner !== 0 && winArray.find(e => e.x === element.x && e.y === element.y && e.player === element.player) ? <div className='winner'>x</div> : ''}</div>)}
        </div>
    )
}
export default DropZone