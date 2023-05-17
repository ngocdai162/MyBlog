/** @format */

import React from "react";
import styled from "styled-components";
import { Slideshow } from "./Slide";
import { AboutMeRender } from "./Data";
import { size } from "../../utils/constants/style";
import MyImage from "../../assets/img/about_me.jpg";
import { AboutMeItemType } from "./Type";
import MusicPlayer from "./musicPlayer/MusicPlayer";

export default function Home() {
	return (
		<MyHomeStyled>
			<Slideshow />
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

const AboutMeItem = ({ title, content }: AboutMeItemType) => {
	return (
		<AboutMeItemStyled>
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
`;

const AboutMeItemStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 30px;
	h1 {
		color: #000;
		margin-bottom: 15px;
	}
`;
