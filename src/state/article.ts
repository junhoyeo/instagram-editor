import {
  atom,
  selector,
} from 'recoil';

export const articleState = atom({
  key: 'articleState',
  default: '',
});

export const articlePreviewState = selector({
  key: 'articlePreviewState',
  get: ({ get }) => {
    const article = get(articleState);
    return article
      .split('\n')
      .filter((isLineNotEmpty) => isLineNotEmpty)
      .join('\n');
  },
});
