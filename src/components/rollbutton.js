export default function RollButton(props) {
    return (
        <div className="roll-button-container"><button onClick={props.handleClick} className="roll-button">{props.tenzie ? "New Game" : "Roll"}</button></div>
    )
}