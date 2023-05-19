/** @format */

import React from "react";
import styled from "styled-components";
import { SongType } from "../mock/data";
import { size } from "../../../utils/constants/style";

export default function SongItemView({
	song,
	indexSong,
}: {
	song: SongType;
	indexSong: number;
}) {
	return (
		<SongItemViewStyled>
			<div className='song__content'>
				<p className='song__content__index'>{indexSong + 1}</p>
				<div className='song__content__img'>
					<img src={song.imgSrc} />
				</div>
				<p className='song__content__name'>{song.name}</p>
			</div>
		</SongItemViewStyled>
	);
}

const SongItemViewStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 60px;
	.song__content {
		display: flex;
		align-items: center;
		cursor: pointer;
		&__index {
			width: 60px;
			text-align: center;
			font-size: 18px;
		}
		&__name {
			margin-left: ${size.largeSpace};
			font-size: 18px;
		}
		&__img {
			width: 40px;
			height: 40px;
			overflow: hidden;

			img {
				width: 60px;
			}
		}
	}
	.total__time {
		margin-right: ${size.largeSpace};
	}
`;
