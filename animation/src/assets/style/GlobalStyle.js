import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html,
	body {
		margin: 0;
		padding: 0;
		font-size: 10px;
		line-height: 1;
	}
	
	html,
	body,
	div,
	span,
	object,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	abbr,
	address,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	samp,
	small,
	strong,
	sub,
	sup,
	var,
	b,
	i,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section,
	summary,
	time,
	mark,
	audio,
	video,
	textarea,
	button,
	select,
	input,
	pre {
		margin: 0;
		padding: 0;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	hr {
		display: none;
	}

	select {
		outline: none;
	}

	p,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	form {
		list-style-image: none;
		list-style-position: outside;
		list-style-type: none;
		border: 0px;
	}

	img,
	fieldset {
		border: 0 none;
	}

	button {
		border: 0 none;
		background-color: transparent;
		cursor: pointer;
	}

	address,
	caption,
	cite,
	code,
	dfn,
	em,
	var {
		font-style: normal;
		font-weight: normal;
	}

	a {
		text-decoration: none;
		color: #000;
	}

	button,
	input,
	select,
	table,
	textarea {
		font-family: 'SpoqaHanSansNeo', sans-serif;
	}

	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: none;
	}

	input::-ms-clear {
		display: none;
	}

	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	select::-ms-expand {
		display: none;
	}

	button > span {
		position: relative;
	}
`;
export default GlobalStyle;
