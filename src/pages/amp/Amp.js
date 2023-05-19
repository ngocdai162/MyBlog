/** @format */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function Amp() {
	const context = new AudioContext();
	const analyserNode = new AnalyserNode(context, { fftSize: 256 });
	const [volume, setVolume] = useState(0);
	const [bass, setBass] = useState(0);
	const [mid, setMid] = useState(0);
	const [treble, setTreble] = useState(0);
	const visualizer = useRef();

	const handleChangeVolume = (e) => {
		setVolume(e.target.value);
	};
	const handleChangeBass = (e) => {
		setBass(e.target.value);
	};
	const handleChangeMid = (e) => {
		setMid(e.target.value);
	};
	const handleChangeTreble = (e) => {
		setTreble(e.target.value);
	};

	const gainNode = new GainNode(context, { gain: volume });
	const bassEQ = new BiquadFilterNode(context, {
		type: "lowshelf",
		frequency: 500,
		gain: bass,
	});
	const midEQ = new BiquadFilterNode(context, {
		type: "peaking",
		Q: Math.SQRT1_2,
		frequency: 1500,
		gain: mid,
	});
	const trebleEQ = new BiquadFilterNode(context, {
		type: "highshelf",
		frequency: 3000,
		gain: treble,
	});

	useEffect(() => {
		window.addEventListener("resize", resize);
		setupContext();
		resize();
		drawVisualizer();

		return window.removeEventListener("resize", resize);
	});

	useEffect(() => {
		gainNode.gain.setTargetAtTime(
			parseFloat(volume),
			context.currentTime,
			0.01
		);
	}, [volume]);

	useEffect(() => {
		bassEQ.gain.setTargetAtTime(parseInt(bass), context.currentTime, 0.01);
	}, [bass]);

	useEffect(() => {
		midEQ.gain.setTargetAtTime(parseInt(bass), context.currentTime, 0.01);
	}, [bass]);

	useEffect(() => {
		trebleEQ.gain.setTargetAtTime(parseInt(treble), context.currentTime, 0.01);
	}, [treble]);

	const setupContext = async () => {
		const guitar = await getGuitar();
		if (context.state === "suspended") {
			await context.resume();
		}
		const source = context.createMediaStreamSource(guitar);
		source
			.connect(bassEQ)
			.connect(midEQ)
			.connect(trebleEQ)
			.connect(gainNode)
			.connect(analyserNode)
			.connect(context.destination);
	};

	const getGuitar = () => {
		return navigator.mediaDevices.getUserMedia({
			audio: {
				echoCancellation: false,
				autoGainControl: false,
				noiseSuppression: false,
				latency: 0,
			},
		});
	};

	const drawVisualizer = () => {
		requestAnimationFrame(drawVisualizer);

		const bufferLength = analyserNode.frequencyBinCount;
		const dataArray = new Uint8Array(bufferLength);
		analyserNode.getByteFrequencyData(dataArray);
		const width = visualizer.current?.width;
		const height = visualizer.current?.height;
		const barWidth = width / bufferLength;

		const canvasContext = visualizer.current.getContext("2d");
		canvasContext.clearRect(0, 0, width, height);

		dataArray.forEach((item, index) => {
			const y = ((item / 255) * height) / 2;
			const x = barWidth * index;

			canvasContext.fillStyle = `hsl(${(y / height) * 400}, 100%, 50%)`;
			canvasContext.fillRect(x, height - y, barWidth, y);
		});
	};

	const resize = () => {
		visualizer.current.width =
			visualizer.current.clientWidth * window.devicePixelRatio;
		visualizer.current.height =
			visualizer.current.clientHeight * window.devicePixelRatio;
	};

	return (
		<AmpStyled>
			<canvas id='visualizer' ref={visualizer}></canvas>
			<div class='grid'>
				<label for='volume'>Volume</label>
				<input
					type='range'
					min='0'
					max='1'
					value={volume}
					step='.01'
					id='volume'
					onChange={(e) => handleChangeVolume(e)}
				/>
				<label for='bass'>Bass</label>
				<input
					type='range'
					min='-10'
					max='10'
					value={bass}
					id='bass'
					onChange={(e) => handleChangeBass(e)}
				/>
				<label for='mid'>Mid</label>
				<input
					type='range'
					min='-10'
					max='10'
					value={mid}
					id='mid'
					onChange={(e) => handleChangeMid(e)}
				/>
				<label for='treble'>Treble</label>
				<input
					type='range'
					min='-10'
					max='10'
					value={treble}
					id='treble'
					onChange={(e) => handleChangeTreble(e)}
				/>
			</div>
		</AmpStyled>
	);
}
const AmpStyled = styled.div`
	body {
		background-color: #dbdbdb;
	}

	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		pointer-events: none;
	}

	.grid {
		display: grid;
		grid-template-columns: auto min-content;
		justify-content: center;
		justify-items: end;
		align-items: center;
		gap: 5px 10px;
	}

	input {
		margin: 0;
	}
`;
