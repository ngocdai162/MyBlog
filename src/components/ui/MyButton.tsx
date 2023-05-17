/** @format */

import React from "react";
import styled from "styled-components";
import { color } from "../../utils/constants/style";
import { MyButtonPropsType } from "./Type";

export default function MyButton({
	text,
	clickEvent,
	type,
	customClassName,
}: MyButtonPropsType) {
	return (
		<MyButtonStyled
			onClick={clickEvent}
			btnType={type}
			className={customClassName}>
			{text}
		</MyButtonStyled>
	);
}

const MyButtonStyled = styled.button<{ btnType: string }>`
	margin-bottom: ${(props) => (props.btnType ? "0" : "5px")};

	${(props) =>
		props.btnType === "text" &&
		`
	     color: ${color.brightColor} ;
	     &:hover {
		   color:  #000;
	     }
	`}
`;
