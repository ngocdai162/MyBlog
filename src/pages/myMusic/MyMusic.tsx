/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SongType, songsData } from "./mock/data";
import SongItemView from "./component/SongItemView";
import { color, size } from "../../utils/constants/style";
import {
	StepBackwardOutlined,
	StepForwardOutlined,
	PauseCircleOutlined,
	PlayCircleOutlined,
} from "@ant-design/icons";

export default function MyMusic() {
	const [currentSong, setCurrentSong] = useState<SongType | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioElm = React.createRef<HTMLAudioElement>();
	const scrollBlock = React.createRef<HTMLDivElement>();

	useEffect(() => {
		if (audioElm.current) {
			if (isPlaying) audioElm.current?.play();
			else audioElm.current?.pause();
		}
	}, [isPlaying]);

	const clickChangeSong = (songActive: SongType) => {
		setCurrentSong(songActive);
		setIsPlaying(true);
	};

	const findSong = (songId: number) => {
		var song = songsData.find((song) => song.songId === songId);
		if (!song) {
			setCurrentSong(songsData[0]);
		} else setCurrentSong(song);
		setIsPlaying(true);
	};
	const handleNext = () => {
		if (currentSong) {
			if (currentSong.isLast) return;
			findSong(currentSong.songId + 1);
		}
	};

	const handlePrevious = () => {
		if (currentSong) {
			if (currentSong.isFirst) return;
			findSong(currentSong.songId - 1);
		}
	};

	const tooglePlay = () => {
		setIsPlaying((isPlaying) => !isPlaying);
	};

	return (
		<MyMusicStyled>
			<h1>My Favorite Songs</h1>
			<div className='music'>
				<div className={`list ${currentSong && "exits"}`}>
					<div className='list__block'>
						<ul>
							{songsData.map((item: SongType, index: number) => (
								<li
									className={`${
										item.songId === currentSong?.songId && "song__active"
									}`}
									onClick={() => clickChangeSong(item)}>
									<SongItemView song={item} indexSong={index} />
								</li>
							))}
						</ul>
					</div>
				</div>
				{currentSong && (
					<div className='cd'>
						<div className={`cd__turn ${isPlaying && "rotate360"}`}>
							<img src={currentSong?.imgSrc} />
						</div>
						<p className='cd__name'>{currentSong?.name}</p>
						<div className='cd__controls'>
							<div className='cd__controls__btn'>
								<button
									onClick={handlePrevious}
									className={currentSong.isFirst ? "disable__btn" : ""}>
									<StepBackwardOutlined />
								</button>
								<button
									className='cd__controls__btn__play'
									onClick={tooglePlay}>
									{isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
								</button>
								<button
									onClick={handleNext}
									className={currentSong.isLast ? "disable__btn" : ""}>
									<StepForwardOutlined />
								</button>
							</div>

							<audio
								src={currentSong?.audioSrc}
								controls
								ref={audioElm}
								autoPlay
								onEnded={handleNext}
							/>
						</div>
					</div>
				)}
			</div>
		</MyMusicStyled>
	);
}

const MyMusicStyled = styled.div`
	width: 100%;
	padding: 0px 30px;
	h1 {
		text-align: center;
	}
	.music {
		width: 100%;
		display: flex;
		justify-content: space-between;

		.list {
			border-radius: 20px;
			padding: ${size.largeSpace} 80px ${size.largeSpace};
			border: 1px solid #000;
			width: 100%;
			height: 500px;
			&.exits {
				transition: width 0.5s ease-in-out;
				width: 60%;
				padding: ${size.largeSpace};
			}
			.list__block {
				height: 100%;
				width: 100%;
				overflow-y: scroll;
				padding: ${size.smallSpace};

				&::-webkit-scrollbar-track {
					-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
					background-color: #f5f5f5;
				}

				&::-webkit-scrollbar {
					width: 8px;
					background-color: #f5f5f5;
				}

				&::-webkit-scrollbar-thumb {
					background-color: #333;
					border: 1px solid #555555;
				}

				ul {
					list-style: none;
					padding: 0px;
					li {
						border-radius: 10px;
						cursor: pointer;
						&.song__active {
							background-color: ${color.brightColor};

							color: #fff;
						}
						&:hover {
							background-color: ${color.brightColor};
							color: #fff;
						}
					}
				}
			}
		}
		.cd {
			width: 40%;
			display: flex;
			flex-direction: column;
			align-items: center;
			animation: fadeIn 1.2s ease-in both;
			&__turn {
				width: 240px;
				height: 240px;
				border-radius: 50%;
				overflow: hidden;
				img {
					width: 100%;
					top: 0px;
					bottom: 0px;
					left: 0px;
				}
				&.rotate360 {
					animation: rotate360 infinite 20s linear;
				}
			}
			&__name {
				font-size: 18px;
				font-weight: 600;
				margin-top: 40px;
			}
			&__controls {
				margin-top: 30px;
				display: flex;
				flex-direction: column;
				align-items: center;
				&__btn {
					displaying: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 30px;
					button {
						border: none;
						background: none;
						padding: 0px;
						cursor: pointer;
						svg {
							font-size: 40px;
							fill: #222;
							&:hover {
								fill: #555;
							}
						}
					}
					.disable__btn {
						opacity: 0.3;
						cursor: default;
					}
					&__play {
						margin: 0px 30px;
					}
				}
			}
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
	@keyframes rotate360 {
		to {
			transform: rotate(0deg);
		}
		from {
			transform: rotate(360deg);
		}
	}
`;
