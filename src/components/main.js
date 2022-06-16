import React from "react"
import Title from "./title"
import Die from "./die"
import RollButton from "./rollbutton"
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"

export default function Main() {

    const [dieState, setDieState] = React.useState(newDie())

    const [tenzies, setTenzies] = React.useState(false)

    let numRolls = 0

    React.useEffect(() => {

        const allDiceHeld = dieState.every(dice => dice.isHeld)
        const allSameValue = dieState.every(dice => dice.value === dieState[0].value)

        if (allDiceHeld && allSameValue) {
            console.log("You Won")
            setTenzies(true)
        }

    }, [dieState])


    function generateNewDie() {
        return { value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() }
    }

    function newDie() {
        let dieArray = []
        for (let i = 0; i < 10; i++) {
            dieArray.push({ value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() })
        }
        return dieArray
    }

    function rollDice() {
        if (!tenzies) {
            numRolls++
            setDieState(prev => {
                return prev.map(item => {
                    return item.isHeld ? { ...item } : generateNewDie()
                })
            })
        } else {
            setDieState(newDie())
            setTenzies(false)
            numRolls = 0

        }
    }


    function selectDie(id) {
        setDieState(oldDice => {
            return oldDice.map(dice => {
                return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
            })
        })
    }

    //     let dieArray = []
    //     for (let i = 0; i < 10; i++) {
    //         let currentDie = prev[i]
    //         if (currentDie.id === id) {
    //             dieArray.push({ ...prev, isHeld: !currentDie.isHeld })
    //         } else {
    //             dieArray.push({ ...prev })
    //         }

    //     }
    //     return dieArray



    let dieElement = dieState.map((dieNum, dieIndex) => {
        return <Die selectDie={() => selectDie(dieNum.id)} key={dieNum.id} value={dieNum.value} held={dieNum.isHeld} />
    })




    return (

        <div className="game-container">
            {tenzies && <Confetti className="conf" width={320} height={320}></Confetti>}
            <div className="outer-frame">
                <div className="inner-frame">

                    <Title />
                    <div className="die-container">
                        {dieElement}
                    </div>
                    <RollButton tenzie={tenzies} handleClick={rollDice} />
                </div>
            </div>
        </div>
    )
}