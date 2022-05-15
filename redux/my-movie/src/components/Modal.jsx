import React from 'react';
import styled from 'styled-components';

const Modal = ({
  handleCloseModal,
  addFavoriteMovie,
  removeFavoriteMovie,
  selectMovieData,
  checkedAddItem,
}) => {
  const movieId = selectMovieData.imdbID;

  const handleAddMovie = () => {
    addFavoriteMovie(selectMovieData);
    handleCloseModal(false);
  };
  return (
    <>
      <ModalBox>
        <ModalDimmed onClick={(e) => handleCloseModal(false)}></ModalDimmed>
        <ModalInnerBox>
          <ButtonBox>
            {checkedAddItem ? (
              <Button type="button" bgColor={'c72a39'} onClick={() => removeFavoriteMovie(movieId)}>
                <span>즐겨찾기 제거</span>
              </Button>
            ) : (
              <Button type="button" bgColor={'c72a39'} onClick={handleAddMovie}>
                <span>즐겨찾기</span>
              </Button>
            )}

            <Button type="button" onClick={(e) => handleCloseModal(false)}>
              <span>취소</span>
            </Button>
          </ButtonBox>
        </ModalInnerBox>
      </ModalBox>
    </>
  );
};

export default Modal;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 999;
`;

const ModalInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 40rem;
  height: 15rem;
  background-color: #fff;
  border-radius: 1rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const ModalDimmed = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  flex: 0 1 50%;
  height: 100%;
  font-weight: 800;
  font-size: 2rem;
  background-color: ${(props) => (props.bgColor ? `#${props.bgColor}` : '#ccc')};
  color: ${(props) => (props.bgColor ? `#fff` : '#000')};
  text-align: center;
`;
