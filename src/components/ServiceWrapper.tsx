import React from 'react';
import styled from 'styled-components';

const ServiceWrapper: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default ServiceWrapper;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;
