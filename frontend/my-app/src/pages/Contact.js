import React, { useState } from "react";

import ContactForm from "../components/contact/ContactForm";
import ContactNameList from "../components/contact/ContactNameList";
import classes from "./Contact.module.css";

function Contact() {
	const [showThankYou, setShowThankYou] = useState(false);

	return (
		<div className={classes.contactContainer}>
			{showThankYou ? (
				<ContactNameList />
			) : (
				<ContactForm setShowThankYou={setShowThankYou} />
			)}
		</div>
	);
}

export default Contact;
