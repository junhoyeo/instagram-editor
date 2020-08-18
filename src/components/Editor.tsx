import React from 'react';
import styled from 'styled-components';

const Editor: React.FC = () => {
  return (
    <Wrapper>
      <Textarea
        placeholder="당신의 이야기는 무엇인가요?"
      >
      </Textarea>
    </Wrapper>
  );
};

export default Editor;

const Wrapper = styled.div`
  width: 50vw;
  min-height: 100%;
  background-color: #e9ecef;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 35vh;
  }
`;

const Textarea = styled.textarea`
  font-size: 1.5rem;
  font-family: 'RIDIBatang', serif;
  height: 80%;
  width: 80%;
  line-height: 1.5;
`;
