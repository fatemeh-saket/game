import { useSelector, useDispatch } from 'react-redux'
import '../../style/Cursor.css'
import {playAgain} from '../../utility/Utils.jsx'

const Cursor = ({settIsWin}) => {
  const timer = useSelector(state => state.data.timer)
  const turn = useSelector(state => state.data.turn)
  const winner = useSelector(state => state.data.winner)
  const scorePlayerOne = useSelector(state => state.data.scorePlayerOne)
  const scorePlayerTwo = useSelector(state => state.data.scorePlayerTwo)
  const dispach = useDispatch()

  return (
    <>
      {winner === 0 && <div className="pointer">
        <div className="top"></div>
        <div className="bottom">
          <span className='turn'>  نوبت بازیکن {turn} </span>
          <span className='timer'> {timer}s </span>
        </div>
      </div>}
      {winner != 0 &&
        <div className="winnerBord">
          <h6 className='playerWinner'>{winner===1?"بازیکن 1":" بازیکن 2"}</h6>
          <p> برنده شد </p>
          <button onClick={()=>
           { 
            playAgain({scorePlayerOne,scorePlayerTwo,dispach});
            settIsWin("")
          }}> بازی مجدد </button>
        </div>
      }
    </>

  )
}

export default Cursor