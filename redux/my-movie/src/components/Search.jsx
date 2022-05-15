import React, { useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import * as config from '../common/config';
import IcoSearch from '../assets/images/ico_search.png';

const Search = ({ fixedSearchBox, handlePageNum, addSearhValue, addSearchData }) => {
  const [serchValue, setSearchValue] = useState('');

  const handleSearchValue = (e) => {
    let { value } = e.target;

    if (value) {
      setSearchValue(value);
      addSearhValue(value);
    } else {
      setSearchValue('');
    }
  };

  const moveScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleCheckEnter = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  function search() {
    moveScrollToTop();

    axios
      .get(`${config.MOVIE_LIST_API}/?apikey=${config.API_KEY}&s=${serchValue}&page=1`)
      .then((response) => {
        const responseData = response.data;

        addSearchData(responseData);
        handlePageNum(1);
      })
      .catch(() => {
        alert(config.MESSAGE['common-error']);
      });
  }

  return (
    <SearchBox fixed={fixedSearchBox}>
      <input
        type="text"
        value={serchValue}
        onChange={handleSearchValue}
        onKeyPress={handleCheckEnter}
      />
      <button type="button" onClick={search}>
        검색
      </button>
    </SearchBox>
  );
};

export default Search;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  ${(props) =>
    props.fixed
      ? css`
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          margin: auto;
        `
      : css`
          position: relative;
        `}
  background-color:#fff;
  border-bottom: 1px solid #000;
  text-align: center;
  z-index: 10;

  input[type='text'] {
    flex: 1 1 auto;
    padding: 1.5rem;
    font-size: 2.5rem;
    border: none;
  }

  button {
    flex: 0 0 auto;
    padding: 1.6rem 3rem;
    font-size: 2.2rem;
    color: #000;

    &::after {
      content: '';
      display: inline-block;
      width: 3rem;
      height: 3rem;
      margin: -0.2rem 0 0 0.5rem;
      background-repeat: no-repeat;
      background-image: url(${IcoSearch});
      background-position: 50% 50%;
      background-size: 100%;
      vertical-align: top;
    }
  }
`;
