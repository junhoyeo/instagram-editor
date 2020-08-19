import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { articleState } from '../state/article';

const Editor: React.FC = () => {
  const [article, setArticle] = useRecoilState(articleState);

  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setArticle(event.target.value);

  return (
    <Wrapper>
      <Textarea
        value={article}
        onChange={onChangeText}
        placeholder="당신의 이야기는 무엇인가요?"
      />
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

  @media screen and (max-width: 1000px) {
    font-size: 1.35rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
    height: 85%;
    width: 85%;
  }

  @media screen and (max-width: 360px) {
    font-size: 16px;
  }
`;
