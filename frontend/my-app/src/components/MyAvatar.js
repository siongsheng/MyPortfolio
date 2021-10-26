import React, { useEffect, useState, useRef } from "react";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { LoopRepeat } from "three";
import ReactTypingEffect from "react-typing-effect";

import classes from "./MyAvatar.module.css";

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

// function GroundPlane() {
// 	return (
// 		<mesh receiveShadow rotation={[4.7, 0, 0]} position={[0, -1.8, 0]}>
// 			<planeBufferGeometry attach="geometry" args={[1000, 1000]} />
// 			<meshStandardMaterial
// 				attach="material"
// 				color={"#faf9f6"}
// 				transparent={true}
// 				opacity={1}
// 			/>
// 		</mesh>
// 	);
// }

function MyAvatar() {
	const [playAnimation, setplayAnimation] = useState(false);
	const textColour = {
		0: "#e34c26",
		1: "#2965f1",
		2: "#333",
		3: "#092e20aa",
	};

	const rte = useRef(null);
	useEffect(() => {
		const interval = setInterval(() => {
			if (
				(rte.current !== null) &
				(rte.current.state.index === 0) &
				(rte.current.state.displayText === "Shaun.")
			) {
				setplayAnimation((p) => (p = !p));
				console.log(playAnimation);
			}
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={classes.MyAvatarContainer}>
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
			<div className={classes.MyAvatarTextContainer}>
				<div className={classes.MyAvatarSubText}>Hi there!</div>
				<div className={classes.MyAvatarText}>
					<div>I am</div>
					<div>
						<ReactTypingEffect
							ref={rte}
							text={[
								"Shaun.",
								"a Software Engineer.",
								"a Fullstack Developer.",
								"keen to work with you :)",
							]}
							cursor
							speed={200}
							eraseSpeed={100}
							eraseDelay={1500}
							typingDelay={1000}
							displayTextRenderer={(text, i) => {
								return (
									<div
										style={{
											color: textColour[i],
										}}
									>
										{" "}
										{text}
									</div>
								);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyAvatar;
