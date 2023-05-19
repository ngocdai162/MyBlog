/** @format */
import React from "react";
import styled from "styled-components";
import { Gallery } from "../../components/Gallery";
import { imgData } from "./data";

export default function MyImage() {
	return (
		<MyImageStyled>
			<h1>My Image</h1>
			<Gallery data={imgData} />
		</MyImageStyled>
	);
}

const MyImageStyled = styled.div`
	h1 {
		text-align: center;
	}
`;
