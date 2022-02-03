/* @jsx createElement */

// JSX의 Transpiler가 어떻게 동작 되는지 궁금하면? babel 페이지 -> Try it out
// React.createElement가 default인데 지금은 React 객체가 없어서 에러
// babel 안에 포함되어 있는 React의 JSX Transpiler가 옵션을 입력 받음
// -> 소스코그 안 주석에 '@jsx'라고 하는 구문을 포함 시켜놓으면 그걸 입력으로 받아서 변환 결과를 변경시킬 수 있음

import { createElement, render } from './react';

function Title(props) {
  return <h1>{props.children}</h1>;
}

function Item(props) {
  return <li style={`color:${props.color}`}>{props.children}</li>;
}

const vdom = (
  <p>
    <Title>React 정말 잘 만들기</Title>
    <ul>
      <Item color="pink">첫 번째 아이템</Item>
      <Item color="gray">드 번째 아이템</Item>
      <Item color="purple">세 번째 아이템</Item>
    </ul>
  </p>
);

render(vdom, document.querySelector('#root'));
