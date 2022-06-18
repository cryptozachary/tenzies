export default function ShowInfo(props) {
    return (
        <div className="showinfo-container">
            <div className="num-rolls"><span className="roll-span">Rolls:</span><span className="roll--span"> {props.numRolls}</span></div>
            <div className="time">
                <span className="time-span">Time:</span><span className="time--span"> {("0" + Math.floor((props.theTime / 60000) % 60)).slice(-2)}:
                    {("0" + Math.floor((props.theTime / 1000) % 60)).slice(-2)}</span>
                {/* <span>{("0" + ((props.theTime / 10) % 100)).slice(-2)}</span> */}
            </div>
        </div>
    )
}