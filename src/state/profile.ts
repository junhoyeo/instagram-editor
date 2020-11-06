import { atom, selector } from 'recoil';

import localStorageEffect from './effects/localStorageEffect';
import { DEFAULT_PROFILE_IMAGE_URL } from '../constants';

export interface IProfile {
  profileImageURL: string;
  username: string;
}

const initialState: IProfile = {
  profileImageURL: DEFAULT_PROFILE_IMAGE_URL,
  username: '',
};

const key = 'profileState';

export const profileState = atom({
  key,
  default: initialState,
  effects_UNSTABLE: [localStorageEffect(key)],
});

export const profileImageURLState = selector({
  key: 'profileImageURLState',
  get: ({ get }) =>
    get(profileState).profileImageURL,
});

export const usernameState = selector({
  key: 'usernameState',
  get: ({ get }) =>
    get(profileState).username,
});

export const isUsernameExistState = selector({
  key: 'isUsernameExistState',
  get: ({ get }) =>
    Boolean(get(usernameState)),
});
