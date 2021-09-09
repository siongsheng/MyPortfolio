import { useState } from "react";

import classes from "../pages/Homepage.module.css";

function EmploymentHistory(props) {
	const [showHR, setShowHR] = useState(false);
	const employmentHistoryList = [
		{
			Company: "Integrated Health Information Systems",
			Year: "2019 - Present",
			Role: "Senior Software Engineer",
		},
		{
			Company: "Integrated Health Information Systems",
			Year: "2019 - Present",
			Role: "Senior Software Engineer",
		},
	];

	return (
		<section
			key={props.ID}
			className={classes.sectionContainer}
			onMouseEnter={() => setShowHR(true)}
			onMouseLeave={() => setShowHR(false)}
		>
			<div className={classes.sectionTitle}>
				<span>{"{ Employment History }"}</span>
				{showHR && (
					<hr
						style={{
							opacity: showHR ? 1 : 0,
							transition: "opacity 5s ease-in",
						}}
					/>
				)}
			</div>
			<div className={classes.sectionDetail}>
				{employmentHistoryList.map((company) => (
					<div key={company.Company} className={classes.sectionDetailItem}>
						{company.Company}{" "}
						<p className={classes.sectionDetailItemText}>
							{"( " + company.Year + " ) => " + company.Role}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default EmploymentHistory;
