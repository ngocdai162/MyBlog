/** @format */

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { loadCanvas } from "./loadCanvas";

export default function MusicPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const audioElm = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		toggleAudio();
	}, [isPlaying]);

	const toggleAudio = () => {
		if (audioElm?.current) {
			if (isPlaying) {
				if (audioElm?.current.currentTime === 0) {
					loadCanvas();
				} else audioElm?.current?.play();
			} else {
				audioElm?.current?.pause();
			}
		}
	};

	return (
		<MusicPlayerStyled>
			<div id='content'>
				<canvas id='canvas-audio'></canvas>
				<audio
					id='background-audio'
					src={require("./backgroundAudio.mp3")}
					ref={audioElm}
					autoPlay={true}></audio>
			</div>
			<button onClick={() => setIsPlaying(!isPlaying)}>
				{isPlaying ? "Pause" : "Load Music Background"}
			</button>
		</MusicPlayerStyled>
	);
}

const MusicPlayerStyled = styled.div`
	position: relative;
	height: 240px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	#content {
		position: absolute;
		width: 100%;
		height: 240px;
		display: flex;
		justify-content: center;
		#canvas-audio {
			transform: rotate(180deg);
		}
	}
	button {
		z-index: 1000;
		height: 60px;
		top: 300px;
		border: none;
		border: 1px solid #000;
		background: none;
		font-size: 30px;
		cursor: pointer;
	}
	#thefile {
		position: absolute;
		top: 10px;
		left: 10px;
		z-index: 100;
	}

	#canvas {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	audio {
		position: absolute;
		left: 10px;
		bottom: 10px;
		width: calc(100% - 20px);
	}
`;
