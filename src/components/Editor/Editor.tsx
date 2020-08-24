import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { articleState } from '../../state/article';
import {
  ButtonGroupContainer,
  ReplaceBlankLineButton,
  CopyButton,
} from './buttons';

const Editor: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [article, setArticle] = useRecoilState(articleState);

  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setArticle(event.target.value.trim());

  const onClickReplaceBlankLine = () =>
    setArticle(article.replace(/\n\n/g, '\n⠀\n'));

  const onClickCopyArticle = () => {
    textareaRef.current?.select();
    document.execCommand('copy');
  };

  return (
    <Wrapper>
      <Container>
        <ButtonGroupContainer>
          <ReplaceBlankLineButton
            onClick={onClickReplaceBlankLine}
          />
          <CopyButton
            onClick={onClickCopyArticle}
          />
        </ButtonGroupContainer>
        <Textarea
          ref={textareaRef}
          value={article}
          onChange={onChangeText}
          placeholder="당신의 이야기는 무엇인가요?"
        />
      </Container>
    </Wrapper>
  );
};

export default Editor;

const Wrapper = styled.div`
  width: 50vw;
  min-height: 100%;
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 35vh;
  }
`;

const Container = styled.div`
  height: 80%;
  width: 80%;

  @media screen and (max-width: 500px) {
    height: 80%;
    width: 85%;
  }
`;

const Textarea = styled.textarea`
  font-size: 1.5rem;
  font-family: 'RIDIBatang', serif;
  line-height: 1.5;
  resize: none;
  width: 100%;
  height: inherit;

  @media screen and (max-width: 1000px) {
    font-size: 1.35rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }

  @media screen and (max-width: 360px) {
    font-size: 16px;
  }
`;