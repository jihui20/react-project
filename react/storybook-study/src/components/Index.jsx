import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: #ffffff;
  background-color: #7362ff;
  border-radius: 5px;
  border: 0px;
  height: 56px;
  padding: 4px;
  margin: 4px 0px;
  cursor: pointer;
  width: 100%;
  outline: none;
  font-weight: 700;
  &:hover {
    background-color: #a99fee;
  }
`;

const Button = (props) => <button>{props.children}</button>;

export default Button;
