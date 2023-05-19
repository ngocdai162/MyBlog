/** @format */

import React from "react";
import styled from "styled-components";

export default function MyVideo() {
	return (
		<MyVideoStyled>
			<h1>My Video</h1>
		</MyVideoStyled>
	);
}

const MyVideoStyled = styled.div`
	h1 {
		text-align: center;
	}
`;
