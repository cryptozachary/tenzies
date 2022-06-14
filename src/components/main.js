import React from "react"
import Title from "./title"
import Die from "./die"
import RollButton from "./rollbutton"

export default function Main() {
    newDie()

    const [dieState, setDieState] = React.useState(newDie())

    console.log(dieState)

    let dieElement = dieState.map((dieNum, dieIndex) => {
        return <Die key={dieIndex} value={dieNum} />
    })

    function newDie() {

        let dieArray = []
        for (let i = 0; i < 10; i++) {
            dieArray.push(Math.ceil(Math.random() * 6))
        }
        console.log(dieArray)
        return dieArray

    }

    function rollDice() {

        setDieState(prev => {
            return (
                newDie())
        })
    }

    return (
        <div className="game-container">
            <div className="outer-frame">
                <div className="inner-frame">
                    <Title />
                    <div className="die-container">
                        {dieElement}
                    </div>
                    <RollButton handleClick={rollDice} />
                </div>
            </div>
        </div>
    )
}