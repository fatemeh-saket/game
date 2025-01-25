import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import '../../style/modal.css'
import { resetGame } from '../../utility/Utils'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PauseModal = ({ openModal, onCloseModal, setPause, pause }) => {
  const dispach= useDispatch()
  const navigate= useNavigate()
  
  return (
    <>
      <Modal open={openModal} center
        showCloseIcon={false}
      >

        <div className='modalList'>
          <h2> PAUSE </h2>
          <div className='modalListButton'>

            <button onClick={() => {
              onCloseModal()
              setPause(!pause)
            }}>
              ادامه بازی
            </button>
            {/* <button onClick={() => {
              resetGame(dispach)
              onCloseModal()
            }}>
              شروع مجدد
            </button> */}
            <button className='exitButton' 
             onClick={()=>{
              resetGame(dispach)
              onCloseModal()
              navigate('/')
             }}
            >
              خروج از بازی
            </button>

          </div>
        </div>

      </Modal>
    </>
  )

}

export default PauseModal
