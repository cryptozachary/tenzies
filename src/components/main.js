export default function Main() {

    return (
        <div className="game-container">
            <div className="outer-frame">
                <div className="inner-frame">
                    <h1 className="title">Tenzies</h1>
                    <p className="title-paragraph">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    <div className="die-container">
                        <div className="die">1</div>
                    </div>
                    <button className="roll-button">Roll</button>
                </div>
            </div>
        </div>
    )
}