import React from 'react';
import styled from 'styled-components';

function View({ children, title }) {
  return (
    <>
      <Section>
        <h3>{title}</h3>
        {children}
      </Section>
    </>
  );
}

export default View;

const Section = styled.section`
  flex: 0 1 auto;
  margin-left: 20rem;

  h3 {
    margin: 3rem 0 2rem;
    font-size: 4.5rem;
    font-weight: 800;
  }
`;
