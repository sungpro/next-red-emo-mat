import { css } from '@emotion/react';

export const whiteColor = '#FFFFFF';
export const blackColor = '#000000';

export const grayColors = [
	'#f4f4f4',
	'#ececec',
	'#e4e4e4',
	'#dcdcdc',
	'#d4d4d4',
	'#ccc',
	'#c3c3c3',
	'#bbb'
];

export const hexToRgb = (input) => {
	input = input + '';
	input = input.replace('#', '');
	let hexRegex = /[0-9A-Fa-f]/g;
	if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
		throw new Error(`input value of ${input} is not a valid hex color.`);
	}
	if (input.length === 3) {
		let f = input[0]; // first
		let s = input[1]; // second
		let l = input[2]; // last
		input = f + f + s + s + l + l;
	}
	input = input.toUpperCase(input);
	let f = input[0] + input[1];
	let s = input[2] + input[3];
	let l = input[4] + input[5];
	return `${parseInt(f, 16)}, ${parseInt(s, 16)}, ${parseInt(l, 16)}`;
};

export const body = (theme) => css`
	min-height: 90vh;
	padding-top: 20px;
	background-color: ${theme.bodyBackground};
	transition-duration: 3s;
	transition-property: background-color, color;
`

export const container = (theme) => css`
	@media (min-width: 576px) {
		maxwidth: 540px;
	}
	@media (min-width: 768px) {
		maxwidth: 720px;
	}
	@media (min-width: 992px) {
		maxwidth: 960px;
	}
	@media (min-width: 1200px) {
		maxwidth: 1140px;
	}
	padding: 0 15px;
	margin: 0 auto;
	width: 100%;
	z-index: 1;
`;

export const main = (theme) => css`
	color: ${theme.text};
	background-color: ${theme.background};
	position: relative;
	text-align: center;
	z-index: 3;
	transition-duration: 0.5s;
	transition-property: background-color, color;
`;

export const mainRaised = (theme) => css`
	@media (max-width: 576px) {
		margin-top: -30px;
	}
	@media (max-width: 830px) {
		margin: 0 10px;
	}
	color: ${theme.text};
	background-color: ${theme.background};
	position: relative;
	z-index: 3;
	text-align: center;
	padding: 50px 0;
	margin: 20px 40px 20px;
	border-radius: 10px;
	box-shadow:
		0 16px 24px 2px rgba(${hexToRgb(theme.background)}, 0.2),
		0 6px 30px 5px rgba(${hexToRgb(theme.background)}, 0.15),
		0 8px 10px -5px rgba(${hexToRgb(theme.background)}, 0.3);
	transition-duration: 0.5s;
	transition-property: background-color, color;
`;

export const title = (theme) => css`
	color: ${theme.text};
	text-decoration: none;
	text-transform: uppercase;
	font-size: 50px;
	font-weight: 900;
	margin-top: 10px;
	margin-bottom: 30px;
	min-height: 32px;
	font-family: Roboto Slab, Times New Roman, serif;
`;

export const header = (theme) => css`
	color: ${theme.text};
	background-color: ${theme.background};
	transition-duration: 0.5s;
	transition-property: background-color, color;
`

export const headerButtons = css`
	margin-left: 100px;
	button { 
		margin-right: 20px;
	}
`