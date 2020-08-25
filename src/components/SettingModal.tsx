import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import { profileState, IProfile } from '../state/profile';
import getProfileImageURL from '../api/getProfileImageURL';

interface ISettingModal extends ReactModal.Props {}

const SettingModal: React.FC<ISettingModal> = ({ onRequestClose, ...modalProps }) => {
  const [profile, setProfile] = useRecoilState<IProfile>(profileState);
  const [username, setUsername] = useState<string>(profile.username);
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value.trim());

  const onSubmitUsername = async (event: React.MouseEvent | React.KeyboardEvent) => {
    const profileImageURL = await getProfileImageURL(username);
    console.log(profileImageURL);

    if (profileImageURL) {
      setIsFailed(false);
      setProfile({
        username,
        profileImageURL,
      });
    } else {
      setIsFailed(true);
    }

    if (onRequestClose) {
      onRequestClose(event);
    }
  };

  const onKeyUpUsernameInput = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      await onSubmitUsername(event);
    }
  };

  const { profileImageURL } = profile;

  return (
    <ReactModal
      {...modalProps}
      onRequestClose={onRequestClose}
      style={modalStyle}
    >
      <ProfileImage
        src={profileImageURL}
      />
      <UsernameInput
        placeholder="사용자 이름 입력"
        onChange={onChangeUsername}
        onKeyUp={onKeyUpUsernameInput}
      />
      {isFailed && (
        <ErrorMessage>
          사용자 이름을 찾을 수 없습니다.
        </ErrorMessage>
      )}
      <SubmitButton
        onClick={onSubmitUsername}
        isError={isFailed}
      >
        저장
      </SubmitButton>
    </ReactModal>
  );
};

export default SettingModal;

const ProfileImage = styled.img`
  width: 128px;
  height: 128px;
  object-fit: cover;
  border-radius: 50%;
  border: 0 solid #000;
  margin: 0 auto;
`;

const UsernameInput = styled.input`
  font-size: 16px;
  background-color: #e9ecef;
  padding: 10px 12px;
  border-radius: 4px;
  margin-top: 12px;
`;

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #f03e3e;
`;

interface ISubmitButton {
  isError?: boolean;
}

const SubmitButton = styled.button<ISubmitButton>`
  font-size: 16px;
  background-color: #343a40;
  color: #f8f9fa;
  font-weight: bold;
  padding: 10px 12px;
  border-radius: 4px;
  margin-top: 8px;
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #212529;
  }
`;

const modalStyle: object = {
  content: {
    overflow: 'unset',
    position: 'unset',
    width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    display: 'flex',
    justifyContent: 'center',
  },
};
