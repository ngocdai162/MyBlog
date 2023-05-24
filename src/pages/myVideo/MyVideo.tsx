/** @format */

import React from "react";
import styled from "styled-components";
import { GalleryVideo } from "./GaleryVideo";
import { videoData } from "./data";

export default function MyVideo() {
	return (
		<MyVideoStyled>
			<h1>My Video</h1>
			<div className='videos__container'>
				{videoData.map((item, index) => (
					<div className='video__block'>
						<video src={item.src} controls />
						<p className='video__block__name'>{item.name}</p>
					</div>
				))}
			</div>
		</MyVideoStyled>
	);
}

const MyVideoStyled = styled.div`
	h1 {
		text-align: center;
	}
	.videos__container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		div {
			width: 40%;
			padding: 30px;

			video {
				width: 100%;
				cursor: pointer;
			}
			p {
				font-size: 16px;
				font-weigth: 600;
				margin-bottom: 0px;
			}
		}
	}
	@media only screen and (max-width: 600px) {
		.videos__container {
			flex-direction: column;
			align-items: center;
			.video__block {
				width: 100%;
				padding: 0px;
				margin-bottom: 40px;
				p {
					width: 315px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					margin-top: 10px;
				}
			}
		}
	}
`;
