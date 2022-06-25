import React from 'react';
import styled from 'styled-components';
import IncreaseCounter from '../hooks/IncreaseCounter';

function Odometer() {
  return (
    <Box>
      <p>
        <strong>
          <IncreaseCounter value={350} />만 명
        </strong>
      </p>
      <p>
        <strong>
          <IncreaseCounter value={21} />만 개
        </strong>
      </p>
    </Box>
  );
}

export default Odometer;

const Box = styled.div`
  flex: 0 1 auto;

  h3 {
    margin: 3rem 0 2rem;
    font-size: 4.5rem;
    font-weight: 800;
  }

  > p {
    font-size: 3.6rem;

    + p {
      margin-top: 2rem;
    }
  }
`;
