import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Tab = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <TabList>
      <TabItem isActive={pathName.includes('list')}>
        <Link to="/movie/list">영화 리스트</Link>
      </TabItem>
      <TabItem isActive={pathName.includes('favorites')}>
        <Link to="/movie/favorites">내 즐겨찾기</Link>
      </TabItem>
    </TabList>
  );
};

export default Tab;

const TabList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  font-weight: 800;
  font-size: 2rem;
  text-align: center;
  z-index: 10;
`;

const TabItem = styled.li`
  flex: 0 1 50%;
  background-color: ${(props) => (props.isActive ? '#c72a39' : '#ccc')};

  a {
    display: block;
    padding: 2rem 0;
    color: ${(props) => (props.isActive ? '#fff' : '#000')};
  }
`;
