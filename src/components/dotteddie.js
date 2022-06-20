export default function DottedDie(props) {


    const styles = {
        backgroundColor: props.held ? "green" : "white"
    }

    return (
        <div style={styles} onClick={props.selectDie} className="die" > {props.value} </div >
    )
}

