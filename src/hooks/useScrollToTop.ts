/** @format */
import { useState, useEffect } from "react";
export const useScrollToTop = (offsetScroll: number) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", toggleTotop);
		return () => window.removeEventListener("scroll", toggleTotop);
	}, []);

	const scrollToTop = () => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	const toggleTotop = () => {
		if (
			document.body.scrollTop > offsetScroll ||
			document.documentElement.scrollTop > offsetScroll
		) {
			setIsVisible(true);
		} else setIsVisible(false);
	};
	return {
		isVisible,
		scrollToTop,
	};
};
