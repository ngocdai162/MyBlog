/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SongType, songsData } from "./mock/data";
import SongItemView from "./component/SongItemView";
import {
	StepBackwardOutlined,
	StepForwardOutlined,
	PauseCircleOutlined,
	PlayCircleOutlined,
} from "@ant-design/icons";
import { MyMusicStyled } from "./styled";

export default function MyMusic() {
	const [currentSong, setCurrentSong] = useState<SongType | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioElm = React.createRef<HTMLAudioElement>();

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
