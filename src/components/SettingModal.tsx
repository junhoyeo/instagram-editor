import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import { DEFAULT_PROFILE_IMAGE_URL } from '../constants';
import getProfileImageURL from '../api/getProfileImageURL';

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

interface ISettingModal extends ReactModal.Props {}

const SettingModal: React.FC<ISettingModal> = ({ ...modalProps }) => {
  const [username, setUsername] = useState('');
  const [profileImageURL, setProfileImageURL] = useState(DEFAULT_PROFILE_IMAGE_URL);

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  const onKeyUpUsernameInput = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      console.log(username);
      const searchedProfileImageURL = await getProfileImageURL(username);
      console.log(searchedProfileImageURL);

      if (searchedProfileImageURL) {
        setProfileImageURL(searchedProfileImageURL);
      }
    }
  };

  return (
    <ReactModal
      {...modalProps}
      style={modalStyle}
    >
      <ProfileImage
        src={profileImageURL}
      />
      <UsernameInput
        placeholder="닉네임 입력 후 엔터"
        onChange={onChangeUsername}
        onKeyUp={onKeyUpUsernameInput}
      />
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
