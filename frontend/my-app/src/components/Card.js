import classes from "./Card.module.css";

function Card(props) {
	return (
		<div className={classes.cardContainer}>
			{props.image !== null && <img src={props.image} />}
			{props.children}
		</div>
	);
}

export default Card;
