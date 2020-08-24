import React, { useState } from 'react';
import { usePalette } from 'react-palette';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';

import {
  articlePreviewState,
  articleTextState,
} from '../../state/article';
import ImagePreview from './ImagePreview';

import { ReactComponent as MoreIcon } from '../../assets/more.svg';
import likeIcon from '../../assets/like.svg';
import cancelLikeIcon from '../../assets/cancel-like.svg';
import { ReactComponent as SaveIcon } from '../../assets/save.svg';

const DEFAULT_IMAGE_URL = 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80';

const Preview: React.FC = () => {
  const [imageURL, setImageURL] = useState<string>(DEFAULT_IMAGE_URL);
  const { data } = usePalette(imageURL);

  const [isPostLiked, setIsPostLiked] = useState<boolean>(false);
  const [isViewMoreEnabled, setIsViewMoreEnabled] = useState<boolean>(false);
  const articlePreviewText = useRecoilValue(articlePreviewState);
  const articleText = useRecoilValue(articleTextState);

  const article = isViewMoreEnabled
    ? articleText
    : articlePreviewText;

  const onClickViewMoreButton = () =>
    setIsViewMoreEnabled(!isViewMoreEnabled);

  const onClickToggleIsPostLiked = () => setIsPostLiked(!isPostLiked);

  return (
    <ScrollContainer
      backgroundColor={data.lightMuted}
    >
      <Wrapper>
        <PostContainer>
          <PostHeader>
            <CreatorProfileImage src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=NnGlYC0XQtAAX_1dvbz&oh=f2b034057d9f9cdb79563e08191b3c56&oe=5F66BB0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" />
            <CreatorName>jyeo_official</CreatorName>
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
              <strong>jyeo_official</strong>
              &nbsp;{article}
              &nbsp;
              <ViewMoreButton
                onClick={onClickViewMoreButton}
              >
                {isViewMoreEnabled ? '숨기기' : '더 보기'}
              </ViewMoreButton>
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
