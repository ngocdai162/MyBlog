/** @format */

import { AboutMeItemType, PostDataType } from "./Type";
import img1 from "../../assets/img/img_1.png";
import img2 from "../../assets/img/img_2.png";
import { imgData } from "../myImage/data";

export const postsData: PostDataType[] = [
	{
		img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		title: "5 reasons to wake up at 5am",
		content: "Detail content",
		time: "16/05/2023",
	},
	{
		img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		title: "5 reasons to wake up at 5am",
		content: "Detail content",
		time: "16/05/2023",
	},
	{
		img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		title: "5 reasons to wake up at 5am",
		content: "Detail content",
		time: "16/05/2023",
	},
	{
		img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		title: "5 reasons to wake up at 5am",
		content: "Detail content",
		time: "16/05/2023",
	},
];

export const AboutMeRender: AboutMeItemType[] = [
	{
		content: "",
		className: "total",
		imgSrc: img1,
	},
	{
		title: "Sở thích",
		content: "Bóng đá, âm nhạc, thể thao điện tử,...",
		className: "occupation",
		imgSrc: img2,
	},
];
