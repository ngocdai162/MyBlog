/** @format */
import React from "react";
import styled from "styled-components";
import {
	YoutubeOutlined,
	FacebookOutlined,
	InstagramOutlined,
	UpOutlined,
} from "@ant-design/icons";
import SoundCloudICon from "../../assets/icons/SoundCloudICon";
import { CONTACT_URL } from "../../utils/constants/path";
import { color } from "../../utils/constants/style";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import imgFooter from "../../assets/img/backgroundFooter.jpg";

export default function Footer() {
	const { isVisible, scrollToTop } = useScrollToTop(400);
	return (
		<FooterStyled>
			<p>Follow me</p>
			<div className='contact__block'>
				{ContactData.map((item, index: number) => (
					<ContactItem
						hrefContact={item.hrefContact}
						iconContact={item.iconContact}
					/>
				))}
			</div>
			<p>2023 @ Design by Coca</p>

			{isVisible && (
				<button onClick={scrollToTop} className='scroll__to__top'>
					<UpOutlined />
				</button>
			)}
		</FooterStyled>
	);
}

const ContactItem = ({
	hrefContact,
	iconContact,
}: {
	hrefContact: string;
	iconContact: any;
}) => {
	return <a href={hrefContact}>{iconContact}</a>;
};

const ContactData = [
	{ hrefContact: CONTACT_URL.YOUTUBE, iconContact: <YoutubeOutlined /> },
	{ hrefContact: CONTACT_URL.FACEBOOK, iconContact: <FacebookOutlined /> },
	{ hrefContact: CONTACT_URL.INSTAGRAM, iconContact: <InstagramOutlined /> },
	{ hrefContact: CONTACT_URL.SOUND_CLOUD, iconContact: <SoundCloudICon /> },
];

const FooterStyled = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	height: 220px;
	border-top: 3px solid ${color.brightColor};

	p {
		text-align: center;
	}
	.contact__block {
		display: flex;
		justify-content: center;
		padding-top: 20px;
		margin-bottom: 40px;
		svg {
			font-size: 24px;
			margin: 0px 20px;
			cursor: pointer;
			color: #000;
			&:hover {
				color: ${color.grayText};
				fill: ${color.grayText};
			}
		}
	}
	.scroll__to__top {
		position: fixed;
		bottom: 50px;
		right: 50px;
		border: none;
		background: #fff;
		border-radius: 50%;
		border: 3px solid ${color.brightColor};
		width: 50px;
		height: 50px;
		z-index: 1001;

		svg {
			font-size: 20px;
		}
	}
	@media only screen and (max-width: 600px) {
		.scroll__to__top {
			right: 20px;
		}
		border-top: none;
	}
`;
