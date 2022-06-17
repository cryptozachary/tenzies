export default function RollButton(props) {
    return (
        <div className="roll-button-container"><div className="num-rolls">{props.numRolls}</div><button onClick={props.handleClick} className="roll-button">{props.tenzie ? "New Game" : "Roll"}</button><div className="time">{props.theTime}</div></div>
    )
}