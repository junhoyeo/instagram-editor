import React, { useState } from 'react';
import { usePalette } from 'react-palette';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';

import {
  articlePreviewState,
  articleTextState,
} from '../../state/article';
import { profileImageURLState, usernameState } from '../../state/profile';
import ImagePreview from './ImagePreview';

import { DEFAULT_POST_IMAGE_URL } from '../../constants';

import { ReactComponent as MoreIcon } from '../../assets/more.svg';
import likeIcon from '../../assets/like.svg';
import cancelLikeIcon from '../../assets/cancel-like.svg';
import { ReactComponent as SaveIcon } from '../../assets/save.svg';

const Preview: React.FC = () => {
  const [imageURL, setImageURL] = useState<string>(DEFAULT_POST_IMAGE_URL);
  const { data } = usePalette(imageURL);

  const [isPostLiked, setIsPostLiked] = useState<boolean>(false);
  const [isViewMoreEnabled, setIsViewMoreEnabled] = useState<boolean>(false);
  const articlePreviewText = useRecoilValue(articlePreviewState);
  const articleText = useRecoilValue(articleTextState);

  const profileImageURL = useRecoilValue(profileImageURLState);
  const username = useRecoilValue(usernameState);

  const article = isViewMoreEnabled
    ? articleText
    : articlePreviewText;

  const onClickViewMoreButton = () =>
    setIsViewMoreEnabled(!isViewMoreEnabled);

  const onClickToggleIsPostLiked = () => setIsPostLiked(!isPostLiked);

  const isViewMoreButtonShown = articlePreviewText.endsWith('...');

  return (
    <ScrollContainer
      backgroundColor={data.lightMuted}
    >
      <Wrapper>
        <PostContainer>
          <PostHeader>
            <CreatorProfileImage
              src={profileImageURL}
            />
            <CreatorName>{username}</CreatorName>
            <FollowButton>팔로잉</FollowButton>
            <MoreButton />
          </PostHeader>
          <ImagePreview
            imageURL={imageURL}
            setImageURL={setImageURL}
          />
          <PostContent>
            <PostReactionBar>
              <LikeButton
                src={isPostLiked ? cancelLikeIcon : likeIcon}
                onClick={onClickToggleIsPostLiked}
              />
              <SaveButton />
            </PostReactionBar>
            <LikeStatusContainer>
              <LikeStatusText>
                <strong>8명</strong>이 좋아합니다.
              </LikeStatusText>
            </LikeStatusContainer>
            <ArticleWrapper>
              <strong>{username}</strong>
              &nbsp;{article}
              &nbsp;
              {isViewMoreButtonShown && (
                <ViewMoreButton
                  onClick={onClickViewMoreButton}
                >
                  {isViewMoreEnabled ? '숨기기' : '더 보기'}
                </ViewMoreButton>
              )}
            </ArticleWrapper>
          </PostContent>
        </PostContainer>
      </Wrapper>
    </ScrollContainer>
  );
};

export default Preview;

interface IScrollContainer {
  backgroundColor?: string;
}

const ScrollContainer = styled.div<IScrollContainer>`
  width: 50vw;
  min-height: 100%;
  max-height: 100vh;
  overflow-x: auto;
  padding: 40px 0;
  transition: background-color 0.8s linear;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 65vh;
  }

  @media screen and (max-height: 1000px) {
    padding: 50px 0;

    @media screen and (max-width: 450px) {
      padding: 30px 0;
    }
  }

  ${({ backgroundColor = '#f8f9fa' }) => backgroundColor && css`
    background-color: ${backgroundColor};
  `};
`;

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostContainer = styled.div`
  width: 375px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.05);
  font-size: 14px;

  @media screen and (max-width: 450px) {
    width: 280px;
  }

  @media screen and (max-width: 330px) {
    width: 222px;
    font-size: 12px;
  }
`;

const PostHeader = styled.div`
  height: 60px;
  padding: 16px;
  padding-right: 12px;
  display: flex;
  align-items: center;
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
  cursor: pointer;

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
  cursor: pointer;
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

const LikeButton = styled.img`
  height: 24;
  width: 24;
  cursor: pointer;
`;

const SaveButton = styled(SaveIcon)`
  height: 24;
  width: 24;
  cursor: pointer;
`;

const LikeStatusContainer = styled.div`
  margin-bottom: 8px;
  width: 100%;
`;

const LikeStatusText = styled.span`
  font-weight: 400;
  color: rgb(38, 38, 38);

  strong {
    font-weight: 600;
  }
`;

const ArticleWrapper = styled.div`
  overflow-wrap: break-word;
  vertical-align: baseline;
  margin-bottom: 4px;
  white-space: pre-wrap;

  strong {
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ViewMoreButton = styled.button`
  color: #8e8e8e;
  cursor: pointer;
  padding: 0;
`;
