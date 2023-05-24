/** @format */
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import styled from "styled-components";
import { size } from "../../utils/constants/style";
import video from "./videoMock/video_1.mp4";

import lgVideo from "lightgallery/plugins/video";

// lightgallery styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-video.css";

// videojs styles
// import "video.js/dist/video-js.css";
// import "@videojs/themes/dist/fantasy/index.css";
interface DataGallery {
	name: string;
	src: string;
}

export const GalleryVideo = ({ data }: { data: DataGallery[] }) => {
	return (
		<GalleryStyle className='galery'>
			<LightGallery
				download={false}
				speed={500}
				plugins={[lgVideo]}
				videojs={true}
				videojsTheme='vjs-theme-fantasy'>
				{data.map((item: DataGallery, index: number) => {
					return (
						// <a href={item.src}>
						// 	<div
						// 		className='img__block__view'
						// 		style={{ width: "fit-content" }}>
						// 		<video src={item.src} />
						// 	</div>
						// </a>

						<a
							className='media-item'
							data-video='{"source": [{"src":"./videoMock/video_1.mp4", "type":"application/x-mpegURL"}], "attributes": {"preload": false, "controls": true}}'
							// data-video='{"source": [{"src":"https://stream.mux.com/4mGNQ00AOSap01EJAWgsT02J01F0000pcqmrHz.m3u8", "type":"application/x-mpegURL"}], "attributes": {"preload": false, "controls": true}}'
							data-poster='https://image.mux.com/4Rt5Z008g1rXb00diCFn3LjBngvo5pj7Mq/thumbnail.jpg'
							data-sub-html="<h4>Visual Soundscapes - Mountains | Planet Earth II | BBC America</h4><p>On the heels of Planet Earth II's record-breaking Emmy nominations, BBC America presents stunning visual soundscapes from the series' amazing habitats.</p>">
							<img
								alt='img3'
								src='https://image.mux.com/4Rt5Z008g1rXb00diCFn3LjBngvo5pj7Mq/thumbnail.jpg'
							/>
						</a>
					);
				})}
			</LightGallery>
		</GalleryStyle>
	);
};

const GalleryStyle = styled.div`
	width: 100%;
	.lg-react-element {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		a {
			width: 25%;
			display: block;
			padding: ${size.smallSpace};
			.img__block__view {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				overflow: hidden;
				height: 160px;

				img {
					max-width: 100%;
				}
				video {
					max-width: 100%;
				}
			}
		}
	}
	@media only screen and (max-width: 600px) {
		.lg-react-element {
			a {
				padding: 4px;
				width: 50%;
				.img__block__view {
					height: 100px;
				}
			}
		}
	}
`;
