/** @format */

import React from "react";
import styled from "styled-components";
import { AboutMeRender } from "./Data";
import { size } from "../../utils/constants/style";
import MyImage from "../../assets/img/about_me.jpg";
import { AboutMeItemType } from "./Type";
import MusicPlayer from "./musicPlayer/MusicPlayer";
import useMediaQuery from "../../hooks/useMediaQuery";
import img1 from "../../assets/img/img_1.png";
import img2 from "../../assets/img/img_2.png";
import codeImg from "../../assets/img/code.avif"

export default function Home() {
	const isMobileDevice = useMediaQuery("(max-width: 600px)");
	return (
		<MyHomeStyled>
			<div className='home'>
				<div className='home__main'>
					<div className='home__main__introduce' >
					    <img src={MyImage} />
					    <div className='home__main__introduce__content'>
					      {!isMobileDevice && <h1>Coca</h1>}
					      <p>Hello. I'm a Developer</p>
				        </div>
				    </div>
					<MusicPlayer />
					<span className="home__main__detail">I create web sites, interfaces and user experiences that are meticulously researched and thoughtfully designed</span>
					<div className="home__main__img">
		              <img src={img1}/>
					  <img src={codeImg}/>
					</div>
					
					{/* {AboutMeRender.map((item: AboutMeItemType, index: number) => (
						<div>
							<AboutMeItem
								title={item.title}
								content={item.content}
								className={item.className}
								imgSrc={item.imgSrc ? item.imgSrc : ""}
							/>
						</div>
					))} */}
				</div>
				
			</div>

		</MyHomeStyled>
	);
}

const AboutMeItem = ({
	title,
	content,
	className,
	imgSrc,
}: AboutMeItemType) => {
	return (
		<AboutMeItemStyled className={`about__item ${className}`}>
			<h1>{title}</h1>
			<p>{content}</p>
			{imgSrc && <img src={imgSrc} />}
		</AboutMeItemStyled>
	);
};
const MyHomeStyled = styled.div`
	.home__introduce {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.home {
		padding-top: ${size.largeSpace};
		width: 100%;
		h1 {
			margin-top: 0px;
		}
		
		&__main {
			width: 100%;
			display: flex;
			flex-direction:column;
			align-items: center;
			&__introduce {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			position: relative;
			margin-bottom: 4px;
			  img {
				width: 100%;
			  }
			  &__content {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
                 h1,p {
				  color: #fff;
				  text-aligns: center;
			     }
				 h1 {
					font-size: 50px;
					font-weight: 700;
					letter-spacing: 10px;
				 }
				 p {
					font-size: 30px;
					letter-spacing: 10px;
					font-weight: 600;
				 }
			  }
			
			
		}
		&__detail {
            color: #000;
			width: 40%;
			font-size: 24px;
			text-align: center;
			margin-top: 30px;
			margin-bottom: 30px;
		}
			h1 {
				text-align: center;
			}
		&__img {
			position: relative;
			width: 80%;
			height: 720px;
			img {
				position: absolute;
				max-width: 42%;
			}
			& img:first-child {
				top: 0px;
				left: 0px;
				position: relative;
				&::before {
					position: absolute;
					display: block;
					content: '';
					height: 80px;
					border-right: 3px solid #000;
					left: 50%;
					top: 30px;
			        }
				
			}
			& img:last-child {
				top: 100px;
				right: 0px;
			}
			&::before {
					position: absolute;
					display: block;
					content: '';
					height: 380px;
					border-right: 3px solid #000;
					left: 44%;
					top: 30px;
			}
			&::after {
					position: absolute;
					display: block;
					content: '';
					height: 380px;
					border-right: 3px solid #000;
					right: 44%;
					bottom: 0px;
			}
		}
		}
		.total {
			font-size: 30px !important;
			padding-top: 0px;
			margin-top: 0px;
			h1 {
				margin-top: 0px;
			}
		} 
	}
	canvas {
		width:100%;
	}
	@media only screen and (max-width: 768px) {
	}

	@media only screen and (max-width: 600px) {
		.home {
			flex-direction: column-reverse;

			&__main {
				width: 100% !important;
				h1 {
					margin-top: 20px;
					margin-bottom: 5px;
				}
				&__introduce{
					&__content {
						p {
						 width: 60%;
					     font-size: 18px;
					     letter-spacing: 3px;
					     font-weight: 400;
						 text-align: center;
				       }
					}
				}
				&__detail {
					width: 100%;
					margin-top: 0px;
				}
				&__img {
					height:320px;
					width : 100%;
					margin-bottom: 50px;
					img {
						max-width: 45%;
					}
					&::before {
					position: absolute;
					display: block;
					content: '';
					height: 180px;
					border-right: 3px solid #000;
					left: 47%;
					top: 30px;
			        }
			        &::after {
					position: absolute;
					display: block;
					content: '';
					height: 180px;
					border-right: 3px solid #000;
					right: 47%;
			   		bottom: -20px;
			       }
				}
			}

			.home__main__introduce {
				width: 100%;
				position: unset;
				canvas {
					width: 100%;
				}
			}
		}
	}
	@keyframes fadeIn {
				from {
					opacity: 0;
					transform: translate3d(0, 0, -20%);
				}
				to {
					opacity: 1;
					transform: translate3d(0, 0, 0);
				}
			}
`;

const AboutMeItemStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 30px;
	@media only screen and (max-width: 600px) {
		margin-top: 0px;
		padding: 15px;
		img {
			width: 100%;
		}
	}
	h1 {
		color: #000;
		margin-bottom: 15px;
	}
`;
