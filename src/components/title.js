export default function Title(props) {
    return (
        <div className="title-container">
            <button onClick={props.toggleShowType} className="toggle-button"></button>
            <h1 className="title">Tenzies </h1>
            <p className="title-paragraph">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
    )
}