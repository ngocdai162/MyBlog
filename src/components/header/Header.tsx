/** @format */

import React from "react";
import styled from "styled-components";
import { color } from "../../utils/constants/style";

export default function Header() {
	return (
		<HeaderStyled>
			<h1>COCA</h1>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.div`
	height: 200px;
	background-color: ${color.mainBackground};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h1 {
		font-size: 60px;
		margin: 0px;
	}
	img {
		height: 100px;
	}
`;
