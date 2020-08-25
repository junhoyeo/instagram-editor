import { atom, selector } from 'recoil';
import { DEFAULT_PROFILE_IMAGE_URL } from '../constants';

export interface IProfile {
  profileImageURL: string;
  username: string;
}

const initialState: IProfile = {
  profileImageURL: DEFAULT_PROFILE_IMAGE_URL,
  username: '',
};

export const profileState = atom({
  key: 'profileState',
  default: initialState,
  // @ts-ignore
  persistence_UNSTABLE: { type: true },
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
