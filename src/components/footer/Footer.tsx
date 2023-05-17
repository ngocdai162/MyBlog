/** @format */

import React from "react";
import styled from "styled-components";
import {
	YoutubeOutlined,
	FacebookOutlined,
	InstagramOutlined,
} from "@ant-design/icons";
import SoundCloudICon from "../../assets/icons/SoundCloudICon";
import { CONTACT_URL } from "../../utils/constants/path";
import { color } from "../../utils/constants/style";

export default function Footer() {
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
`;
