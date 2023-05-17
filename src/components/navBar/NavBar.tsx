/** @format */

import React from "react";
import styled from "styled-components";
import { NavBarData, NavBarDataType } from "./NavBarData";
import { NavLink } from "react-router-dom";
import { color } from "../../utils/constants/style";

export default function NavBar() {
	return (
		<NavBarStyled>
			{NavBarData.map((item: NavBarDataType, index: number) => (
				<NavLink
					to={item.url}
					className={({ isActive }) => {
						return `nav-link ${isActive && "nav-active"}`;
					}}>
					{item.name}
				</NavLink>
			))}
		</NavBarStyled>
	);
}

const NavBarStyled = styled.div`
	display: flex;
	justify-content: center;
	a {
		text-decoration: none;
		color: ${color.brightColor};
	}
	.nav-link {
		margin: 10px;
		border: none;
		background: none;
		cursor: pointer;
		&:hover {
			color: #000;
		}
	}

	.nav-active {
		color: #000;
	}
`;
