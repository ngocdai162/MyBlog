import React, { useContext , useEffect, useRef, useState} from "react";
import {Songs} from "../Context";
import Img1 from "../assets/img/1.jpg";
import Img2 from "../assets/img/2.jpg";
import Img3 from "../assets/img/3.jpg";
import Img4 from "../assets/img/4.jpg";
import Img5 from "../assets/img/5.jpg";
import Img6 from "../assets/img/6.jpg";
import Img7 from "../assets/img/7.jpg";
import Img8 from "../assets/img/8.jpg";
import Img9 from "../assets/img/9.jpg";
import Img10 from "../assets/img/10.jpg";
import Img11 from "../assets/img/11.jpg";
import Img12 from "../assets/img/12.jpg";
import Img13 from "../assets/img/13.jpg";
import Song1 from "../assets/audio/Anh Da Quen Voi Co Don - Soobin Hoang So.mp3"
import Song2 from "../assets/audio/Anh them duoc ngu - Khoi_ New_oulZ.mp3"
import Song3 from "../assets/audio/anh_trang_tinh_ai_duong_edward_khuc_hoa_tinh_2021_tap_2_5434011437944986271.mp3"
import Song4 from "../assets/audio/asia_35_truong_vu_gap_nhau_lam_chi_nguyen_tam_5157720618374383713.mp3"
import Song5 from "../assets/audio/bai_khong_ten_so_7_thuong_linh_-4128476052300221940.mp3"
import Song6 from "../assets/audio/ban_hoa_tau_cuoi_cung_nha_ft_my_1784857.mp3"
import Song7 from "../assets/audio/Benh Cua Anh - Khoi.mp3"
import Song8 from "../assets/audio/Biet Dau - Uyen Linh.mp3"
import Song9 from "../assets/audio/Binh Minh - Tao_ Khoi.mp3"
import Song10 from "../assets/audio/Bong Hinh Co Don - Hakoota Dung Ha.mp3"
import Song11 from "../assets/audio/buoc_qua_ton_thuong_co_de_dang_lofi_music_ha_nhi_x_tio_ep_lau_phai_nhac_ngoai_loi_viet_-891513858584040187.mp3"
import Song12 from "../assets/audio/buon_ho_hoang_yen_am_nhac_doi_song_4145505330348041159.mp3"
import Song13 from "../assets/audio/canh_hong_phai_nhu_khanh_18_07_2019_-8956782825585434873.mp3"
import { toBeEmptyDOMElement } from "@testing-library/jest-dom/dist/matchers"; 
export default function Detail () {
  const imgArr = [Img1, Img2 , Img3, Img4,Img5, Img6 , Img7, Img8,Img9, Img10 , Img11, Img12 ,Img13]
  const songArr = [Song1, Song2, Song3,Song4, Song5, Song6,Song7, Song8, Song9,Song10, Song11, Song12,Song13];
  const {song , handleSetSong} = useContext(Songs);
  const audioCD = useRef();
  const audioElm = useRef();
  const pauseIcon = useRef();
  const playIcon = useRef();
  const previousIcon = useRef();
  const nextIcon = useRef();
  const flagPause = useRef(0);
  const progress = useRef();


  const pauseAudio = () => {
    audioElm.current.pause();
    pauseIcon.current.style.display = "none";
    playIcon.current.style.display = "block";
  }
  const playAudio = () => {
    audioElm.current.play();
    playIcon.current.style.display = "none";
    pauseIcon.current.style.display = "block";
  }
  
  const handlePause = () => {
    if(flagPause.current === 0) {
      pauseAudio();
      flagPause.current = 1;
      handleRotate();
    } else {
      playAudio();
      flagPause.current = 0;
      handleRotate();
    }
  }
  window.onload = () => {
    handleSetSong(1);
  }
 
  const handlePrevious = () => {
    playIcon.current.style.display = "none";
    pauseIcon.current.style.display = "block";
    if(song.id === 1) {
      handleSetSong(songArr.length);

    } else {
      handleSetSong(song.id - 1);
    }
  }

  const handleNext = () => {
    playIcon.current.style.display = "none";
    pauseIcon.current.style.display = "block";
    if(song.id === songArr.length) {
      handleSetSong(1)
    } else {
      handleSetSong(song.id + 1)
    }
  }
  var idRandom  = useRef(1);
  const handleRandom = () => {
    idRandom = Math.round((Math.random()*13));
    handleSetSong(idRandom);
  }
 
  const handleRotate = () => {
    if(audioCD.current) {
      if(flagPause.current === 0) {
        audioCD.current.classList.add("rotate360");
      } else {
        audioCD.current.classList.remove("rotate360");
      }
    }
  }
  handleRotate();
  // chạy tiến trình bài hát
  var temp = useRef(0);
  const progressUpdate = () => {
    const progressPercent = Math.floor(audioElm.current.currentTime / audioElm.current.duration * 100) ;
    progress.current.value = progressPercent;
  }


  //xử lí tua bài hát
  const  progressSeek = (e) => {
    const seekTime = audioElm.current.duration / 100 * e.target.value ;
    audioElm.current.currentTime = seekTime;
  }
 
  return (
      <div className = "detail">
          <div className = "detail_img">
             <img src={imgArr[song.id-1]} ref = {audioCD}></img>
          </div>
          <h2>{song.name}</h2>
          <audio src={songArr[song.id-1]} ref ={audioElm} controls autoPlay ={true} onTimeUpdate = {progressUpdate} onEnded  = {handleNext}></audio>
          <div className = "detail_processSong">
             <i className="fa-solid fa-shuffle" onClick = {handleRandom}></i>
             <input  ref = {progress} onChange = {progressSeek} type = "range" min = "0" max="100" step = "1" value = "0" ></input>
          </div>
          <div className="control_audio">
             <i className="fa-solid fa-backward-fast" onClick = {handlePrevious} ref = {previousIcon}></i>
             <i className="fa-solid fa-circle-play" style ={{display:"none"}} onClick = {handlePause} ref = {playIcon}></i>
             <i className="fa-solid fa-circle-pause" onClick = {handlePause} ref = {pauseIcon}></i>
             <i className="fa-solid fa-forward-fast"  onClick = {handleNext} ref = {nextIcon}></i>
          </div>
      </div>
    )
}