import React from "react";

function ModalBackground(props) {
	const css = {
		position: "absolute",
		width: "100%",
		height: document.documentElement.scrollHeight,
		backgroundColor: "#000",
		zIndex: 99,
		opacity: 0,
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
