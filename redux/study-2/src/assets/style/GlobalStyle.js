import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html,
	body {
		margin: 0;
		padding: 0;
		font: normal normal 10px/1.2 'SpoqaHanSansNeo', sans-serif;
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

/* input 기본 스타일 초기화 */
input {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
}

/* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
input::-ms-clear {display: none;}

/* input type number 에서 화살표 제거 */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
/* Select box 스타일 초기화 */ 
select {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

/* IE 에서 Select box 화살표 제거 */ 
select::-ms-expand {display: none;}

	button > span {
		position:relative;
	}
`;
export default GlobalStyle;
