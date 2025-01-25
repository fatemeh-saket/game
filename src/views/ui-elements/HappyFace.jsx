import '../../style/faceStyle.css'

const HappyFace = ({ player }) => {
    return (
        <div className={`face ${player === 'two' ? 'playerTwo' : 'playerOne'}`}>
            <div className="eye left eye-happy"></div>
            <div className="eye right eye-happy"></div>
            <div className="happy-mouth"></div>
        </div>
    )
}
export default HappyFace