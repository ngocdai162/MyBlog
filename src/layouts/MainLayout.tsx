/** @format */

import React from "react";
import styled from "styled-components";
import NavBar from "../components/navBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import { size } from "../utils/constants/style";
import Header from "../components/header/Header";

export default function MainLayout() {
	return (
		<MainLayoutStyled>
			<Header />
			<NavBar />
			<div className='container'>
				<Outlet />
			</div>
			<Footer />
		</MainLayoutStyled>
	);
}

const MainLayoutStyled = styled.div`
	width: 100%;
	.container {
		padding: ${size.largeSpace} ${size.largeSpace} 80px ${size.largeSpace};
		width: 100%;
	}
`;
