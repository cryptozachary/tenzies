export default function BestScore(props) {
    return (
        <div className="best-container">
            <div className="best-time"><span className="time--score">Best Time: {props.bestTime}</span><span className="roll--score"> Rolls: {props.bestRolls}</span></div>
        </div>
    )
}