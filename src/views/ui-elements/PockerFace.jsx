import '../../style/faceStyle.css'

const PockerFace = ({ player }) => {
    return (
        <div className={`face ${player === 'two' ? 'playerTwo' : 'playerOne'}`}>
            <div className="eye left eye-pocker"></div>
            <div className="eye right eye-pocker"></div>
            <div className="pocker-mouth"></div>
        </div>
    )
}
export default PockerFace