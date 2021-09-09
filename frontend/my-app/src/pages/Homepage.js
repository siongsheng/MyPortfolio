import ShortDescription from "../components/ShortDescription";
import EmploymentHistory from "../components/EmploymentHistory";

function Homepage() {
	return (
		<>
			<ShortDescription />
			<EmploymentHistory ID={1} />
			<EmploymentHistory ID={2} />
			<EmploymentHistory ID={3} />
		</>
	);
}

export default Homepage;
