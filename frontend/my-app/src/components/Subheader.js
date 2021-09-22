import classes from "./Subheader.module.css";

function Subheader(props) {
	return (
		<div className={classes.subheaderContainer}>
			<div className={classes.mainSubHeader}>{props.mainText}</div>
			<div className={classes.subSububHeader}>{props.subText}</div>
		</div>
	);
}

export default Subheader;
