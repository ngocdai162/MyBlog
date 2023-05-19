/** @format */
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import styled from "styled-components";
import { size } from "../utils/constants/style";

interface DataGallery {
	name: string;
	src: string;
}

export const Gallery = ({ data }: { data: DataGallery[] }) => {
	return (
		<GalleryStyle className='galery'>
			<LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
				{data.map((item: DataGallery, index: number) => {
					return (
						<a href={item.src}>
							<div
								className='img__block__view'
								style={{ width: "fit-content" }}>
								<img alt={item.name} src={item.src} />
							</div>
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
`;
