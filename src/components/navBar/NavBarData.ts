/** @format */

export const NavBarData: NavBarDataType[] = [
	{
		name: "HOME",
		url: "",
	},
	{
		name: "IMAGE",
		url: "/image",
	},
	{
		name: "VIDEO",
		url: "/video",
	},
	{
		name: "MUSIC",
		url: "/music",
	},
];

export interface NavBarDataType {
	name: string;
	url: string;
}
