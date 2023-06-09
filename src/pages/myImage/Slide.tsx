/** @format */

import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
	PauseCircleOutlined,
	PlayCircleOutlined,
	LeftOutlined,
	RightOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { color } from "../../utils/constants/style";
import { imgData } from "./data";

export const Slideshow = () => {
	const [isPlay, setIsPlay] = useState(true);
	const tooglePlay = () => {
		setIsPlay(!isPlay);
	};

	const customArrow = {
		prevArrow: (
			<button className='arrow__btn previous'>
				<LeftOutlined />
			</button>
		),
		nextArrow: (
			<button className='arrow__btn next'>
				<RightOutlined />
			</button>
		),
	};
	return (
		<SlideShowStyled className='slide-container'>
			<Slide
				transitionDuration={500}
				autoplay={isPlay}
				duration={2000}
				cssClass='custom__slide'
				{...customArrow}>
				{imgData.map((slideImage, index) => (
					<div key={index}>
						<a>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									backgroundSize: "cover",
									height: "400px",
									backgroundImage: `url(${slideImage.src})`,
								}}></div>
						</a>
					</div>
				))}
			</Slide>
			<div className='play__btn'>
				<button onClick={tooglePlay}>
					{isPlay ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
				</button>
			</div>
		</SlideShowStyled>
	);
};

export const SlideShowStyled = styled.div`
	position: relative;
	.play__btn {
		position: absolute;
		top: 20px;
		left: 20px;
		button {
			background: none;
			border: none;
			cursor: pointer;
			svg {
				font-size: 40px;
				fill: #fff;
				&:hover {
					fill: ${color.brightColor};
				}
			}
		}
	}
	.react-slideshow-container {
		.arrow__btn {
			border: none;
			background: none;
			svg {
				font-size: 35px;
				fill: #fff;
			}
			&.previous {
				left: 20px;
			}
			&.next {
				right: 20px;
			}
		}
	}
	@media only screen and (max-width: 768px) {
	}

	@media only screen and (max-width: 600px) {
		.custom__slide {
			height: 200px;
			svg {
				font-size: 14px !important;
			}
			.react-slideshow-container .arrow__btn svg {
				font-size: 14px;
			}
		}
		.arrow__btn {
			display: none;
		}
	}
`;
