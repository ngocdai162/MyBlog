/** @format */

import styled from "styled-components";
import { color, size } from "../../utils/constants/style";

export const MyMusicStyled = styled.div`
	width: 100%;
	padding: 0px 30px;
	h1 {
		text-align: center;
	}
	.music {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 40px;

		.list {
			border-radius: 20px;
			padding: ${size.largeSpace} 80px ${size.largeSpace};
			border: 1px solid #000;
			width: 100%;
			height: 500px;
			&.exits {
				transition: width 0.5s ease-in-out;
				width: 60%;
				padding: ${size.largeSpace};
			}
			.list__block {
				height: 100%;
				width: 100%;
				overflow-y: scroll;
				padding: ${size.smallSpace};

				&::-webkit-scrollbar-track {
					-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
					background-color: #f5f5f5;
				}

				&::-webkit-scrollbar {
					width: 8px;
					background-color: #f5f5f5;
				}

				&::-webkit-scrollbar-thumb {
					background-color: #333;
					border: 1px solid #555555;
				}

				ul {
					list-style: none;
					padding: 0px;
					li {
						border-radius: 10px;
						cursor: pointer;
						&.song__active {
							background-color: ${color.brightColor};

							color: #fff;
						}
						&:hover {
							background-color: ${color.brightColor};
							color: #fff;
						}
					}
				}
			}
		}
		.cd {
			width: 40%;
			display: flex;
			flex-direction: column;
			align-items: center;
			animation: fadeIn 1.2s ease-in both;
			&__turn {
				width: 240px;
				height: 240px;
				border-radius: 50%;
				overflow: hidden;
				img {
					width: 100%;
					top: 0px;
					bottom: 0px;
					left: 0px;
				}
				&.rotate360 {
					animation: rotate360 infinite 20s linear;
				}
			}
			&__name {
				font-size: 18px;
				font-weight: 600;
				margin-top: 40px;
			}
			&__controls {
				margin-top: 30px;
				display: flex;
				flex-direction: column;
				align-items: center;
				&__btn {
					displaying: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 30px;
					button {
						border: none;
						background: none;
						padding: 0px;
						cursor: pointer;
						svg {
							font-size: 40px;
							fill: #222;
							&:hover {
								fill: #555;
							}
						}
					}
					.disable__btn {
						opacity: 0.3;
						cursor: default;
					}
					&__play {
						margin: 0px 30px;
					}
				}
			}
		}
	}
	@media only screen and (max-width: 820px) {
		padding: 0px;
		.cd {
			width: 100% !important;
			&__turn {
				width: 160px !important;
				height: 160px !important;
			}
		}
		.music {
			flex-direction: column-reverse;
			.list {
				padding: 0px;
				padding-top: 40px;
				border: 0px;
				&.exits {
					width: 100%;
					padding: 0px;
					padding-top: 40px;
				}
				.list__block {
					padding: 10px;
				}
			}
		}
	}
	@media only screen and (max-width: 600px) {
		padding: 0px;
		.cd {
			width: 100% !important;
			&__turn {
				width: 160px !important;
				height: 160px !important;
			}
			&__name {
				margin-bottom: 0px;
			}
			&__controls {
				width: 100%;
				padding: 0px 30px;
			}
		}
		.music {
			flex-direction: column-reverse;
			.list {
				padding: 0px;
				padding-top: 40px;
				border: 0px;
				&.exits {
					width: 100%;
					padding: 0px;
					padding-top: 40px;
				}
				.list__block {
					padding: 10px;
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
	@keyframes rotate360 {
		to {
			transform: rotate(0deg);
		}
		from {
			transform: rotate(360deg);
		}
	}
`;
