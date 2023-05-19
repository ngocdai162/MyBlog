/** @format */

import React from "react";
import styled from "styled-components";
import { Slideshow } from "./Slide";
import { AboutMeRender } from "./Data";
import { size } from "../../utils/constants/style";
import MyImage from "../../assets/img/about_me.jpg";
import { AboutMeItemType } from "./Type";
import MusicPlayer from "./musicPlayer/MusicPlayer";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Home() {
	const isMobileDevice = useMediaQuery("(max-width: 600px)");
	return (
		<MyHomeStyled>
			{!isMobileDevice && <Slideshow />}
			<div className='home'>
				<div className='home__main'>
					{AboutMeRender.map((item: AboutMeItemType, index: number) => (
						<div>
							<AboutMeItem
								title={item.title}
								content={item.content}
								className={item.className}
							/>
						</div>
					))}
				</div>
				<div className='side__panel'>
					<img src={MyImage} />
					<MusicPlayer />
				</div>
			</div>
		</MyHomeStyled>
	);
}

const AboutMeItem = ({ title, content, className }: AboutMeItemType) => {
	return (
		<AboutMeItemStyled className={`about__item ${className}`}>
			<h1>{title}</h1>
			<p>{content}</p>
		</AboutMeItemStyled>
	);
};
const MyHomeStyled = styled.div`
	.home {
		display: flex;
		justify-content: space-between;
		padding-top: ${size.largeSpace};
		width: 100%;

		h1 {
			margin-top: 0px;
		}

		.home__main {
			width: 65%;
			h1 {
				text-align: center;
			}
		}
		.side__panel {
			width: 30%;
			overflow: hidden;
			img {
				width: 100%;
			}
		}
	}
	@media only screen and (max-width: 768px) {
	}

	@media only screen and (max-width: 600px) {
		.home {
			flex-direction: column-reverse;

			&__main {
				width: 100% !important;
				h1 {
					margin-top: 20px;
					margin-bottom: 5px;
				}
				.total {
					font-size: 30px !important;
					padding-top: 0px;
					margin-top: 0px;
					h1 {
						margin-top: 0px;
					}
					/* margin-bottom:  */
				}
			}

			.side__panel {
				width: 100%;
				canvas {
					width: 100%;
				}
			}

			@keyframes fadeIn {
				from {
					opacity: 0;
					transform: translate3d(0, 0, -20%);
				}
				to {
					opacity: 1;
					transform: translate3d(0, 0, 0);
				}
			}
		}
	}
`;

const AboutMeItemStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 30px;
	@media only screen and (max-width: 600px) {
		margin-top: 0px;
	}
	h1 {
		color: #000;
		margin-bottom: 15px;
	}
`;
