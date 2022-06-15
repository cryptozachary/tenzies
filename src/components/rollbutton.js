export default function RollButton(props) {
    return (
        <button onClick={props.handleClick} className="roll-button">{props.tenzie ? "New Game" : "Roll"}</button>
    )
}