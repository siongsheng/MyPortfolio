import React, { useState, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";

import classes from "./ContactForm.module.css";
import Subheader from "../Subheader";

function ContactForm(props) {
	const formInputsInit = {
		first_name: "",
		last_name: "",
		email: "",
		message: "",
	};

	const [form, setForm] = useState(formInputsInit);

	const onChangeInput = (e) => {
		setForm((form) => {
			return { ...form, [e.target.id]: e.target.value };
		});
	};

	const submitForm = (e) => {
		console.log("submit!");
		e.preventDefault();
		console.log(form);
		// Submit to API
		axios
			.post(
				`http://127.0.0.1:8000/api/contact`,
				JSON.parse(JSON.stringify(form))
			)
			.then((res) => {
				console.log(res);
				console.log(res.data);
				setForm(formInputsInit);
				props.setShowThankYou(true);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<div className={classes.contactFormContainer}>
			<Subheader
				mainText="Let's Start a Conversation!"
				subText="A start of something new"
			/>
			<form onSubmit={submitForm} className={classes.contactForm}>
				<input
					id="first_name"
					type="text"
					// ref={inputRef}
					className={classes.firstName}
					value={form.first_name}
					onChange={onChangeInput}
					placeholder="First Name"
					required
				/>
				<input
					id="last_name"
					type="text"
					className={classes.lastName}
					value={form.last_name}
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
