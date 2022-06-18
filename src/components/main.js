import React from "react"
import Title from "./title"
import Die from "./die"
import ShowInfo from "./showinfo"
import RollButton from "./rollbutton"
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"
import BestScore from "./bestscore"

export default function Main() {

    let rollSpan = document.querySelector(".roll--span")
    let timeSpan = document.querySelector(".time--span")
    let newTime;
    let newRoll;


    const [dieState, setDieState] = React.useState(newDie())

    const [tenzies, setTenzies] = React.useState(false)

    const [numRolls, setNumRoll] = React.useState(0)

    const [theTime, setTheTime] = React.useState(0)

    const [timeOn, setTimeOn] = React.useState(false)

    const [rollScore, setRollScore] = React.useState(localStorage.getItem("rolls") || 0)

    const [timeScore, setTimeScore] = React.useState(`0:${localStorage.getItem("time")?.slice(0, 2) || 0}`)



    React.useEffect(() => {
        if (rollScore === 0) {
            localStorage.setItem("rolls", 0)
        }

        if (timeScore === "0:0") {
            localStorage.setItem("time", 0)
        }

        console.log("running initializer")

    }, [])

    if (tenzies) {
        if (rollScore > numRolls) {
            newRoll = true
            localStorage.setItem("rolls", JSON.stringify(numRolls))
            setRollScore(rollSpan.textContent)
            console.log("newrollscore")
        } else if (rollScore === 0) {
            newRoll = true
            localStorage.setItem("rolls", JSON.stringify(numRolls))
            setRollScore(rollSpan.textContent)
            console.log("newrollscore")
        }
    }

    if (tenzies) {
        if (timeScore > theTime) {
            localStorage.setItem("time", JSON.stringify(theTime))
            setTimeScore(timeSpan.textContent)
            console.log("newTime score")
        } else if (timeScore === "0:0") {
            newTime = true
            localStorage.setItem("time", JSON.stringify(theTime))
            setTimeScore(timeSpan.textContent)
            console.log("newTime score")
        } else {
            console.log("shit aint working")
        }
    }

    React.useEffect(() => {

        let interval = 0

        if (timeOn) {
            interval = setInterval(() => {
                setTheTime(prev => prev + 10)
            }, 10)
        } else {
            clearInterval(interval)

        }

        return () => clearInterval(interval)

    }, [timeOn])


    React.useEffect(() => {

        const allDiceHeld = dieState.every(dice => dice.isHeld)
        const allSameValue = dieState.every(dice => dice.value === dieState[0].value)

        if (allDiceHeld && allSameValue) {
            console.log("You Won")
            setTenzies(true)
            setTimeOn(false)
        }

    }, [dieState])

    function time() {

        let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
        let timer = ` ${h} : ${m} : ${s} : ${ms}`;
        return timer
    }


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
            setTimeOn(true)
            setNumRoll(prev => {
                let rolls = 0
                rolls = prev + 1
                return rolls
            })
            setDieState(prev => {
                return prev.map(item => {
                    return item.isHeld ? { ...item } : generateNewDie()
                })
            })
        } else {
            setDieState(newDie())
            setTenzies(false)
            setNumRoll(0)
            setTheTime(0)
        }
    }


    function selectDie(id) {
        setTimeOn(true)
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
                    <ShowInfo numRolls={numRolls} theTime={theTime} />
                    <RollButton tenzie={tenzies} handleClick={rollDice} />
                    <BestScore bestTime={timeScore} bestRolls={rollScore} />
                </div>
            </div>
        </div>
    )
}