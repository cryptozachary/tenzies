export default function Die(props) {


    const styles = {
        backgroundColor: props.held ? "green" : "white"
    }

    return (
        <div style={styles} onClick={props.selectDie} className="die" > {props.value} </div >
    )
}


export function DieDots(props) {

    const styles = {
        backgroundColor: props.held ? "green" : "white"
    }

    return (
        <div style={styles} onClick={props.selectDie} className="die" > {props.value} </div >
    )
}