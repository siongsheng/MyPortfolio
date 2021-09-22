import React from "react";

function ModalBackground(props) {
	const css = {
		position: "absolute",
		top: "0",
		left: "0",
		width: "100vw",
		height: "100vh",
		backgroundColor: "#000",
		zIndex: 99,
		opacity: 0,
		boxSizing: "border-box",
	};

	const closeModal = () => {
		props.close(false);
	};

	return (
		<div style={css} onClick={() => closeModal()}>
			{props.children}
		</div>
	);
}

export default ModalBackground;
