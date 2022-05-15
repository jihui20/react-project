import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as config from '../common/config';
import Search from '../components/Search';
import MovieList from '../components/MovieList';
import CommonStyle from '../assets/style/CommonStyle';

const Movie = () => {
  const [scrollBottom, setScrollBottom] = useState(false);
  const [fixedSearchBox, setFixedSearchBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [movieList, setMovieList] = useState({
    status: null,
    list: [],
  });

  const handlePageNum = (index) => {
    setPageNum(index + 1);
  };

  const addSearhValue = (value) => {
    setSearchValue(value);
  };

  const addSearchData = (data) => {
    setMovieList({
      ...movieList,
      status: data.Response === 'False' ? false : true,
      list: data.Search,
    });
  };

  const addMoreData = (data) => {
    const dataSearch = [...new Set(data.Search.map(JSON.stringify))].map(JSON.parse);

    setMovieList({
      ...movieList,
      status: data.Response === 'False' ? false : true,
      list: [...movieList.list, ...dataSearch],
    });
  };

  const clearMovieList = () => {
    setMovieList({ ...movieList, reset: true });
  };

  const getMoreMovieList = () => {
    axios
      .get(`${config.MOVIE_LIST_API}/?apikey=${config.API_KEY}&s=${searchValue}&page=${pageNum}`)
      .then((response) => {
        const responseData = response.data;

        setIsLoading(true);

        if (responseData.Response === 'False') {
          return false;
        }

        addMoreData(responseData);
        setIsLoading(false);
        setPageNum(pageNum + 1);
      })
      .catch(() => {
        alert(config.MESSAGE['common-error']);
      });
  };

  const getScrollStatus = (status) => {
    setScrollBottom(status);
  };

  const scrollCheck = () => {
    let scrollY = window.scrollY || document.documentElement.scrollTop;

    setFixedSearchBox(scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollCheck);

    return () => {
      window.removeEventListener('scroll', scrollCheck);
    };
  }, []);

  useEffect(() => {
    if (scrollBottom && !isLoading) {
      getMoreMovieList();
    }
  }, [scrollBottom]);

  return (
    <CommonStyle.InnerBox>
      <MovieListLayout>
        <Search
          fixedSearchBox={fixedSearchBox}
          pageNum={pageNum}
          listReset={movieList.reset}
          handlePageNum={handlePageNum}
          addSearhValue={addSearhValue}
          addSearchData={addSearchData}
          clearMovieList={clearMovieList}
        />
        <ContentBox>
          {movieList && !movieList.status ? (
            <p>검색 결과가 없습니다.</p>
          ) : (
            <MovieList scrollEvnet movieData={movieList.list} getScrollStatus={getScrollStatus} />
          )}
        </ContentBox>
      </MovieListLayout>
    </CommonStyle.InnerBox>
  );
};

export default Movie;

const MovieListLayout = styled.section`
  padding-bottom: 7rem;
`;

const ContentBox = styled.div`
  text-align: center;

  > p {
    margin-top: 5rem;
    font-size: 2.5rem;
  }
`;
