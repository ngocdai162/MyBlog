/** @format */
import React from "react";
import styled from "styled-components";
import { Gallery } from "../../components/Gallery";
import { imgData } from "./data";
import { Slideshow } from "./Slide";

export default function MyImage() {
	return (
		<MyImageStyled>
			  <h1>My Image</h1>
			   <Slideshow />
			<h2>Collection</h2>
			<Gallery data={imgData} />
		</MyImageStyled>
	);
}

const MyImageStyled = styled.div`
	h1,
	h2 {
		text-align: center;
	}
	h2 {
		margin-top: 50px;
	}
`;
