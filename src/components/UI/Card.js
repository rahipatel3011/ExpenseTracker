import "./Card.css";

function Card(props){

    const classes = props.className + " card"; //space is necessary between class name
    return <div className={classes}>{props.children}</div>
}

export default Card;