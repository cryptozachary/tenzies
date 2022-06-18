export default function BestScore(props) {
    return (
        <div className="best-container">
            <div className="best-time"><span className="time--score">Best Time: {props.bestTime}</span></div>
            <div className="best-roll">
                <span className="roll--score">Best Rolls: {props.bestRolls}</span></div>
        </div>
    )
}