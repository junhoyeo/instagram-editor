import React from 'react';
import { usePalette } from 'react-palette';
import styled, { css } from 'styled-components';

import { ReactComponent as MoreIcon } from '../assets/more.svg';
import { ReactComponent as LikeIcon } from '../assets/like.svg';
import { ReactComponent as SaveIcon } from '../assets/save.svg';

const IMAGE_URL = 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80';

const Preview: React.FC = () => {
  const { data } = usePalette(IMAGE_URL);

  return (
    <Wrapper
      backgroundColor={data.lightMuted}
    >
      <PostContainer>
        <PostHeader>
          <CreatorProfileImage src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=NnGlYC0XQtAAX_1dvbz&oh=f2b034057d9f9cdb79563e08191b3c56&oe=5F66BB0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" />
          <CreatorName>jyeo_official</CreatorName>
          <FollowButton>팔로잉</FollowButton>
          <MoreButton />
        </PostHeader>
        <PostImage src={IMAGE_URL} />
        <PostContent>
          <PostReactionBar>
            <LikeButton />
            <SaveButton />
          </PostReactionBar>
          <LikeStatusContainer>
            <LikeStatusText>
              <strong>8명</strong>이 좋아합니다.
            </LikeStatusText>
          </LikeStatusContainer>
          <ArticleWrapper>
            <strong>jyeo_official</strong>
            &nbsp;{'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          </ArticleWrapper>
        </PostContent>
      </PostContainer>
    </Wrapper>
  );
};

export default Preview;

interface IWrapper {
  backgroundColor?: string;
}

const Wrapper = styled.div<IWrapper>`
  width: 50vw;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.8s linear;

  ${({ backgroundColor = '#f8f9fa' }) => backgroundColor && css`
    background-color: ${backgroundColor};
  `};
`;

const PostContainer = styled.div`
  width: 375px;
  max-height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.05);
`;

const PostHeader = styled.div`
  height: 60px;
  padding: 16px;
  padding-right: 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const CreatorProfileImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  border: 0 solid #000;
`;

const CreatorName = styled.span`
  color: #262626;
  font-weight: 600;
  margin-left: 12px;
`;

const FollowButton = styled.span`
  font-weight: 600;

  &::before {
    content: '•';
    margin-left: 4px;
    margin-right: 4px;
  }
`;

const MoreButton = styled(MoreIcon)`
  margin: 8px;
  margin-left: auto;
  height: 16;
  width: 16;
`;

const PostImage = styled.img`
  width: 375px;
  height: 375px;
`;

const PostContent = styled.div`
  padding: 16px;
  padding-top: 12px;
`;

const PostReactionBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
`;

const LikeButton = styled(LikeIcon)`
  height: 24;
  width: 24;
`;

const SaveButton = styled(SaveIcon)`
  height: 24;
  width: 24;
`;

const LikeStatusContainer = styled.div`
  margin-bottom: 8px;
  width: 100%;
`;

const LikeStatusText = styled.span`
  font-weight: 400;
  color: rgb(38, 38, 38);
  font-size: 14px;

  strong {
    font-weight: 600;
  }
`;

const ArticleWrapper = styled.div`
  overflow-wrap: break-word;
  vertical-align: baseline;
  margin-bottom: 4px;

  strong {
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
