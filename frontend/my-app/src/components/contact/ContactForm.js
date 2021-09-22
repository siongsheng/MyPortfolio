import React, { useState, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

import classes from "./ContactForm.module.css";

function ContactForm() {
	const formInputsInit = {
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	};
	const [form, setForm] = useState(formInputsInit);
	// const [showInputFields, setshowInputFields] = useState(true);
	const inputRef = useRef(null);

	const onChangeInput = (e) => {
		setForm((form) => {
			return { ...form, [e.target.id]: e.target.value };
		});
	};

	const submitForm = (e) => {
		e.preventDefault();
		console.log(form);
		// setshowInputFields(false);
		// Submit to API
		setForm(formInputsInit);
	};

	return (
		<div className={classes.contactFormContainer}>
			<h1>Let's Start a Conversation!</h1>
			<form onSubmit={submitForm} className={classes.contactForm}>
				<input
					id="firstName"
					type="text"
					ref={inputRef}
					className={classes.firstName}
					value={form.firstName}
					onChange={onChangeInput}
					placeholder="First Name"
					required
				/>
				<input
					id="lastName"
					type="text"
					className={classes.lastName}
					value={form.lastName}
					onChange={onChangeInput}
					placeholder="Last Name"
				/>

				<input
					id="email"
					type="email"
					className={classes.email}
					value={form.email}
					onChange={onChangeInput}
					placeholder="What's your email?"
					required
				/>

				<textarea
					id="message"
					type="text"
					className={classes.textarea}
					value={form.message}
					onChange={onChangeInput}
					placeholder="Your message..."
					required
				/>

				<button type="submit" className={classes.submitBtn}>
					<span>SEND MESSAGE </span>
					<span>{<FaPaperPlane size={17} />}</span>
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
