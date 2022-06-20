export default function Die(props) {


    const styles = {
        backgroundColor: props.held ? "228B22" : "white"
    }

    return (
        <div style={styles} onClick={props.selectDie} className="die" > {props.value} </div >
    )
}


