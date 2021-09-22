import classes from "./SkillHighlights.module.css";

function SkillItem(props) {
	return (
		<div className={classes.skillHighlightItem}>
			<div className={classes.skillHighlightItemContents}>
				{props.children}
				<div className={classes.skillHighlightItemText}>{props.text}</div>
			</div>
		</div>
	);
}

export default SkillItem;
