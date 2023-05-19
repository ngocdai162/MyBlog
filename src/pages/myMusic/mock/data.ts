/** @format */
import audio_1 from "./audio/Anh Da Quen Voi Co Don - Soobin Hoang So.mp3";
import audio_2 from "./audio/Anh them duoc ngu - Khoi_ New_oulZ.mp3";
import audio_3 from "./audio/Benh Cua Anh - Khoi.mp3";
import audio_4 from "./audio/Biet Dau - Uyen Linh.mp3";
import audio_5 from "./audio/Binh Minh - Tao_ Khoi.mp3";
import audio_6 from "./audio/Bong Hinh Co Don - Hakoota Dung Ha.mp3";
import audio_7 from "./audio/anh_trang_tinh_ai_duong_edward_khuc_hoa_tinh_2021_tap_2_5434011437944986271.mp3";
import audio_8 from "./audio/Du Chi La Mong Mo - Rocker Nguyen.mp3";
import audio_9 from "./audio/Dua Nhau Di Tron - Den_ Cao.mp3";
import audio_10 from "./audio/Em La Mua - Vu.mp3";
import audio_11 from "./audio/Gac Lai Au Lo - Da LAB_ Miu Le.mp3";
import audio_12 from "./audio/Ghe Tham - Den_ Kimmese_ Linh Cao_ JGKID.mp3";
import audio_13 from "./audio/Giua Dai Lo Dong Tay - Uyen Linh.mp3";

import img_1 from "./img/AnhDaQuenVoiCoDon.jpg";
import img_2 from "./img/AnhThemDuocNgu.jpg";
import img_3 from "./img/BenhCuaAnh.jpg";
import img_4 from "./img/BietDau.jpg";
import img_5 from "./img/BinhMinh.jpg";
import img_6 from "./img/BongHinhCoDon.jpg";
import img_7 from "./img/AnhTrangTinhAi.jpg";
import img_8 from "./img/DuChiLaMongMo.jpg";
import img_9 from "./img/DuaNhauDiTron.jpg";
import img_10 from "./img/EmLaMua.jpg";
import img_11 from "./img/GacLaiAuLo.webp";
import img_12 from "./img/GheTham.jpg";
import img_13 from "./img/GiuaDaiLoDongTay.jpg";

export const songsData: SongType[] = [
	{
		name: "Anh Đã Quen Với Cô đơn - Soobin Hoàng Sơn",
		songId: 1,
		audioSrc: audio_1,
		imgSrc: img_1,
		isFirst: true,
		isLast: false,
	},
	{
		name: "Anh thèm được ngủ - Khói",
		songId: 2,
		audioSrc: audio_2,
		imgSrc: img_2,
		isFirst: false,
		isLast: false,
	},
	{
		name: "Bệnh của anh - Khói",
		songId: 3,
		audioSrc: audio_3,
		imgSrc: img_3,
		isFirst: false,
		isLast: false,
	},
	{
		name: "Biết đâu - Uyên Linh",
		songId: 4,
		audioSrc: audio_4,
		imgSrc: img_4,
		isFirst: false,
		isLast: false,
	},
	{
		name: "Bình minh - Táo",
		songId: 5,
		audioSrc: audio_5,
		imgSrc: img_5,
		isFirst: false,
		isLast: false,
	},
	{
		name: "Bóng hình cô đơn - Hakoota Dũng hà",
		songId: 6,
		audioSrc: audio_6,
		imgSrc: img_6,
		isFirst: false,
		isLast: false,
	},
	{
		name: "Ánh trăng tình ái -  Dương Edward",
		songId: 7,
		audioSrc: audio_7,
		imgSrc: img_7,
		isFirst: false,
		isLast: false,
	},
	{
		name: "Dù chỉ là mộng mơ  - Rocker Nguyễn",
		songId: 8,
		audioSrc: audio_8,
		imgSrc: img_8,
		isFirst: false,
		isLast: false,
	},
	{
		name: "Đưa nhau đi trốn - Đen ft Linh Cáo",
		songId: 9,
		audioSrc: audio_9,
		imgSrc: img_9,
		isFirst: false,
		isLast: false,
	},
	{
		name: "Em là mưa - Vũ",
		songId: 10,
		audioSrc: audio_10,
		imgSrc: img_10,
		isFirst: false,
		isLast: false,
	},
	{
		name: "Gác lại âu lo - Dalab ft MiuLe",
		songId: 11,
		audioSrc: audio_11,
		imgSrc: img_11,
		isFirst: false,
		isLast: false,
	},
	{
		name: "Ghé thăm - Đen, JGKiD, Kimmese, Linh Cáo",
		songId: 12,
		audioSrc: audio_12,
		imgSrc: img_12,
		isFirst: false,
		isLast: false,
	},
	{
		name: "Giữa đại lộ đông tây -  Uyên Linh",
		songId: 13,
		audioSrc: audio_13,
		imgSrc: img_13,
		isFirst: false,
		isLast: false,
	},
];

export interface SongType {
	name: string;
	songId: number;
	audioSrc: string;
	imgSrc: string;
	isFirst: boolean;
	isLast: boolean;
}
