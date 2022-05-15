import React from 'react';
import styled, { css } from 'styled-components';

const InnerStyle = styled.h3`
  width: 100%;
  padding: 3rem;
  box-sizing: border-box;
`;

function InnerBox({ children, ...rest }) {
  return <InnerStyle {...rest}>{children}</InnerStyle>;
}

const H3Style = styled.h3`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #000;
  text-transform: capitalize;
`;

function H3({ children, ...rest }) {
  return <H3Style {...rest}>{children}</H3Style>;
}

const CommonStyle = {
  InnerBox,
  H3,
};

export default CommonStyle;
