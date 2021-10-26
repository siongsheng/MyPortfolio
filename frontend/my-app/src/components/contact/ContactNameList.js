import React, { useEffect, useState } from "react";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { LoopRepeat } from "three";

import Subheader from "../Subheader";
import classes from "./ContactNameList.module.css";

function Model(props) {
	const { scene, animations } = useGLTF("MyAvatar_wave.glb");
	const { actions } = useAnimations(animations, scene);
	actions.rigAction.setLoop(LoopRepeat, 1);
	scene.traverse((mesh) => {
		mesh.castShadow = true;
	});
	scene.castShadow = true;
	useEffect(() => {
		actions.rigAction.play();
		return actions.rigAction.reset();
	}, [props.playAnimation, actions.rigAction]);
	// actions.rigAction.play();
	return <primitive position={[0, -1.8, 0]} object={scene} castShadow />;
}

function ContactNameList() {
	const [playAnimation, setplayAnimation] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setplayAnimation((p) => (p = !p));
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={classes.contactNameListContainer}>
			<Subheader
				mainText="Thank you for reaching out!"
				subText="I will be in touch with you shortly"
			/>
			<div
				className={classes.MyAvatar}
				onClick={() => setplayAnimation(!playAnimation)}
			>
				<Canvas shadows camera={{ position: [-5, 3, 50], fov: 4.5 }}>
					<Suspense fallback={null}>
						<ambientLight intensity={1} />
						<pointLight
							position={[10, 100, 70]}
							intensity={1}
							castShadow={true}
						/>
						<Model playAnimation={playAnimation} />
						<OrbitControls
							enablePan={false}
							enableZoom={false}
							minZoom={50}
							maxZoom={50}
						/>
					</Suspense>
				</Canvas>
			</div>
		</div>
	);
}

export default ContactNameList;
