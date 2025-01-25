import '../../style/faceStyle.css'

const FearFace = ({ player }) => {
    return (
        <div className={`face ${player === 'two' ? 'playerTwo' : 'playerOne'}`}>
            <div className="eye left eye-fear"></div>
            <div className="eye right eye-fear"></div>
            <div className="fear-mouth"></div>
            <div className="eyebrow rightSide"></div>
            <div className="eyebrow leftSide"></div>
        </div>
    )
}
export default FearFace