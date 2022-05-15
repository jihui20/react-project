import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../modules/myMovie';
import styled, { css } from 'styled-components';
import ModalPortal from '../ModalPortal';
import Modal from './Modal';
import IcoHeart from '../assets/images/ico_heart.png';
import IcoHeartActive from '../assets/images/ico_heart_active.png';

const ListItem = ({ movieList, index }) => {
  return (
    <dl>
      <dt>
        <strong>{index + 1}</strong>
        {movieList.Poster === 'N/A' ? (
          <div>
            <p>이미지 준비중</p>
          </div>
        ) : (
          <picture>
            <img src={movieList.Poster} alt={movieList.Title} />
          </picture>
        )}
      </dt>
      <dd>
        {movieList.Title ? (
          <p>
            <strong>{movieList.Title}</strong>
            <span>{movieList.Type}</span>
            <span>{movieList.Year}</span>
          </p>
        ) : (
          <p>정보 업데이트 중</p>
        )}
      </dd>
    </dl>
  );
};

const MovieList = ({ scrollEvnet, movieData, getScrollStatus }) => {
  const listSectionRef = useRef();
  const data = movieData;

  const dispatch = useDispatch();
  const handleAddMovie = (list) => dispatch(addMovie(list));
  const handleRemoveMovie = (list) => dispatch(removeMovie(list));

  const { movie } = useSelector((state) => ({
    movie: state.myMovie.movie,
  }));
  const mySelectMovie = movie.map((list) => {
    return list.imdbID;
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectMovieData, setSelectMovieData] = useState([]);
  const [checkedAddItem, setCheckedAddItem] = useState(false);

  const handleModal = (status, movieInfo, checked) => {
    setCheckedAddItem(checked);
    setSelectMovieData(movieInfo);
    setModalOpen(status);
  };

  const addFavoriteMovie = (info) => {
    handleAddMovie(info);
  };

  const removeFavoriteMovie = (id) => {
    const defaultMovie = movie;

    handleRemoveMovie(defaultMovie.filter((item) => item.imdbID !== id));
    handleModal(false);
  };

  const scrollCheck = () => {
    let windowHeight = window.innerHeight;
    let listSectionRect = listSectionRef.current.getBoundingClientRect().bottom;

    if (0 < windowHeight - listSectionRect && windowHeight - listSectionRect < 100) {
      getScrollStatus(true);
    } else {
      getScrollStatus(false);
    }
  };

  useEffect(() => {
    if (scrollEvnet) {
      window.addEventListener('scroll', scrollCheck);

      return () => {
        window.removeEventListener('scroll', scrollCheck);
      };
    }
  }, []);

  return (
    <>
      <MovieListBox ref={listSectionRef}>
        {data &&
          data.map((movieList, index) => {
            return (
              <MovieListItem
                key={movieList.imdbID}
                isActive={mySelectMovie?.includes(movieList.imdbID)}
              >
                <a
                  href="#;"
                  onClick={(e) =>
                    handleModal(true, movieList, mySelectMovie?.includes(movieList.imdbID))
                  }
                >
                  <ListItem movieList={movieList} index={index} />
                </a>
              </MovieListItem>
            );
          })}
      </MovieListBox>
      {modalOpen ? (
        <ModalPortal>
          <Modal
            handleCloseModal={handleModal}
            addFavoriteMovie={addFavoriteMovie}
            removeFavoriteMovie={removeFavoriteMovie}
            selectMovieData={selectMovieData}
            checkedAddItem={checkedAddItem}
          />
        </ModalPortal>
      ) : null}
    </>
  );
};

export default MovieList;

const MovieListBox = styled.ul`
  padding: 0 0 5rem;
`;

const MovieListItem = styled.li`
  position: relative;
  text-align: left;
  box-shadow: 0.4rem 0.4rem 1rem 0 rgb(0, 0, 0, 0.2);

  & + li {
    margin-top: 5rem;
  }

  a {
    display: block;

    &::after {
      content: '';
      position: absolute;
      top: 3rem;
      right: 3rem;
      width: 4rem;
      height: 4rem;
      margin: auto;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 100%;

      ${(props) =>
        !props.isActive
          ? css`
              background-image: url(${IcoHeart});
            `
          : css`
              background-image: url(${IcoHeartActive});
            `}
    }
  }

  dl {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 3rem 7rem 3rem 3rem;

    dt {
      flex: 0 0 auto;
      margin-right: 3rem;

      strong {
        display: inline-block;
        width: 10rem;
        font-size: 2.5rem;
        text-align: center;
        vertical-align: middle;
      }

      > picture {
        display: inline-block;
        position: relative;
        min-width: 30rem;
        min-height: 40rem;
        background-color: #dedede;
        text-align: center;
        vertical-align: middle;
        overflow: hidden;

        img {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;
          width: 100%;
          max-width: 100%;
        }
      }

      > div {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        min-width: 30rem;
        min-height: 40rem;
        background-color: #dedede;
        text-align: center;
        vertical-align: middle;
        overflow: hidden;

        > p {
          font-weight: 800;
          font-size: 2rem;
        }
      }
    }

    dd {
      flex: 1 1 45%;
      font-size: 1.8rem;

      strong {
        display: block;
        margin-bottom: 1.5rem;
      }

      span + span {
        &::before {
          content: '·';
          display: inline-block;
          margin: 0 1rem;
        }
      }
    }
  }
`;
