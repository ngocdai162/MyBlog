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
		name: "MUSIC",
		url: "/music",
	},
	{
		name: "VIDEO",
		url: "/video",
	},
];

export interface NavBarDataType {
	name: string;
	url: string;
}
