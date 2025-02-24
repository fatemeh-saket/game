import style from '../../style/StartPage.module.css'
import logo from '../../assets/logo.png'
import system from '../../assets/user-setting-svgrepo-com.svg'
import users from '../../assets/users-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {changeMode} from '../../store/gameStore'
function StartPage() {
    let navidate = useNavigate()
    const dispach = useDispatch()
    return (
        <div className={style.main}>
            <div className={style.list}>
                <div className={style.logo}><img src={logo} /></div>
                <div className={style.listBottom}>
                    <button
                        onClick={() => {
                             navidate('/game/systemPlay');
                             dispach(changeMode("dynamic"))

                            }}
                        className={`${style.row} ${style.playCpu}`}>
                        <p> بازی با سیستم</p>
                        <div><img src={system} /></div>
                    </button>
                    <button
                        onClick={() => { 
                            navidate('/game/twoPlayers');
                            dispach(changeMode("static"))
                         }}
                        className={`${style.row} ${style.twolayer}`}>
                        <p> بازی دو نفره </p>
                        <div><img src={users} /></div>
                    </button>
                    <button
                        onClick={() => { navidate('/rules') }}
                        className={`${style.row} ${style.rule}`}> قانون بازی </button>
                </div>

            </div>
        </div>
    )
}
export default StartPage