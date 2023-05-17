/** @format */

import React from "react";
import "./app.scss";
import "react-slideshow-image/dist/styles.css";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import MyVideo from "./pages/myVideo/MyVideo";
import MyMusic from "./pages/myMusic/MyMusic";
import MyImage from "./pages/myImage/MyImage";
import Home from "./pages/home/Home";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='video' element={<MyVideo />} />
					<Route path='music' element={<MyMusic />} />
					<Route path='image' element={<MyImage />} />
				</Route>
				<Route path='*' element={<p>404</p>} />
			</Routes>
		</div>
	);
}

export default App;
