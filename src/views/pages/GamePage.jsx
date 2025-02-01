import style from '../../style/GamePage.module.css'
import logo from '../../assets/logo.png'
import GameBoard from '../ui-elements/GameBoard'
import PockerFace from '../ui-elements/PockerFace'
import HappyFace from '../ui-elements/HappyFace'
import FearFace from '../ui-elements/FearFace'
import Cursor from '../ui-elements/Cursor'
import DropZone from './DropZone'
import { useDispatch, useSelector } from 'react-redux'
import { resetGame } from '../../utility/Utils'
import { useState } from 'react'
import PauseModal from '../ui-elements/Modal'
import { useParams } from 'react-router-dom'

function GamePage() {
    const winner = useSelector(state => state.data.winner)
    const scorePlayerTwo = useSelector(state => state.data.scorePlayerTwo)
    const scorePlayerOne = useSelector(state => state.data.scorePlayerOne)
    const [pause, setPause] = useState(false)
    const [openModal, setOpenModal] = useState(false);

    const dispach = useDispatch()
    const params = useParams()

    const onOpenModal = () => setOpenModal(true);
    const onCloseModal = () => setOpenModal(false);

    return (
        <div className={style.main}>
            <section className={style.header}>
                <div>
                    <button className={style.button} onClick={() => {
                        resetGame(dispach)
                    }} > شروع مجدد </button></div>
                <div><img className={style.logo} src={logo} /></div>
                <div>
                    <button className={style.button}
                        onClick={() => {
                            setPause(!pause)
                            onOpenModal()
                        }}> فهرست </button>
                </div>
            </section>
            <section className={style[`main-content`]}>
                <div className={style[`pointer-row`]}>
                    <DropZone pause={pause} />
                </div>
                <div className={style.resultBoard}>
                    <div className={`${style.figure} ${style.playerTwo}`}>
                        {scorePlayerTwo - scorePlayerOne === -1 && <PockerFace player="two" />}
                        {scorePlayerTwo - scorePlayerOne >= 0 && <HappyFace player="two" />}
                        {scorePlayerTwo - scorePlayerOne <= -2 && <FearFace player="two" />}
                    </div>
                    <address>بازیکن 2    </address>
                    <span>{scorePlayerTwo}</span>
                </div>
                <div className={style.resultBoard}>
                    <div className={`${style.figure} ${style.playerOne}`}>
                        {scorePlayerOne - scorePlayerTwo === -1 && <PockerFace player="one" />}
                        {scorePlayerOne - scorePlayerTwo >= 0 && <HappyFace player="one" />}
                        {scorePlayerOne - scorePlayerTwo <= -2 && <FearFace player="one" />}
                    </div>
                    <address> 
                        {params.players === "twoPlayers"? "  بازیکن1 ":" سیستم " }
                        </address>
                    <span>{scorePlayerOne}</span>
                </div>
                <div className={style[`game-bord`]}>
                    <GameBoard />
                </div>
            </section>
            <div className={`${style.footer} ${winner === 0 && style.mainFooter} ${winner === 2 && style.p2Footer} ${winner === 1 && style.p1Footer}`}></div>
            <Cursor />
            <PauseModal openModal={openModal} onCloseModal={onCloseModal} setPause={setPause} pause={pause} />

        </div>
    )
}
export default GamePage