import React, { useState } from "react";

import ContactForm from "../components/contact/ContactForm";
import ContactNameList from "../components/contact/ContactNameList";
import classes from "./Contact.module.css";

function Contact() {
	const [showAnimation, setShowAnimation] = useState(false);

	return (
		<div className={classes.contactContainer}>
			{showAnimation && <ContactNameList />}
			<ContactForm />
		</div>
	);
}

export default Contact;
