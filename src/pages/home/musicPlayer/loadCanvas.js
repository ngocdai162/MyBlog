/** @format */

import React from "react";
import styled from "styled-components";
import song from "./backgroundAudio.mp3";

export const loadCanvas = () => {
	var audio = document.getElementById("background-audio");
	if (audio) {
		audio.load();
		audio.play();
		var context = new AudioContext();
		var src = context.createMediaElementSource(audio);
		var analyser = context.createAnalyser();

		var canvas = document.getElementById("canvas-audio");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		var ctx = canvas.getContext("2d");

		src.connect(analyser);
		analyser.connect(context.destination);

		analyser.fftSize = 256;

		var bufferLength = analyser.frequencyBinCount;

		var dataArray = new Uint8Array(bufferLength);

		var WIDTH = canvas.width;
		var HEIGHT = canvas.height;

		var barWidth = (WIDTH / bufferLength) * 2.5;
		var barHeight;
		var x = 0;

		function renderFrame() {
			requestAnimationFrame(renderFrame);

			x = 0;

			analyser.getByteFrequencyData(dataArray);

			ctx.fillStyle = "#fff";
			ctx.fillRect(0, 0, WIDTH, HEIGHT);

			for (var i = 0; i < bufferLength; i++) {
				barHeight = dataArray[i];

				var r = barHeight + 25 * (i / bufferLength);
				var g = 250 * (i / bufferLength);
				var b = 50;

				ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
				ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

				x += barWidth + 1;
			}
		}
		audio.play();
		renderFrame();
	}
};