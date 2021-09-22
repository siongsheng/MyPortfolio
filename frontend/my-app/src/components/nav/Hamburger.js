import classes from "./Hamburger.module.css";

function Hamburger(props) {
	return (
		<div className={classes.hamburger} onClick={() => props.onClick(true)}>
			{props.IsOpenSideMenu ? (
				<>
					<div className={classes.close} />
				</>
			) : (
				<>
					<span />
					<span />
					<span />
				</>
			)}
		</div>
	);
}

export default Hamburger;
