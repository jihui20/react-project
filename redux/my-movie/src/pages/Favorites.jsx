import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MovieList from '../components/MovieList';
import CommonStyle from '../assets/style/CommonStyle';

const Favorites = () => {
  const { movie } = useSelector((state) => ({
    movie: state.myMovie.movie,
  }));

  return (
    <CommonStyle.InnerBox>
      <MovieListLayout>
        <CommonStyle.H3>내 즐겨찾기</CommonStyle.H3>
        <MovieList movieData={movie} />
      </MovieListLayout>
    </CommonStyle.InnerBox>
  );
};

export default Favorites;

const MovieListLayout = styled.section`
  padding-bottom: 7rem;
`;
