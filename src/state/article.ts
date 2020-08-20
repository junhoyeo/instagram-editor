import {
  atom,
  selector,
} from 'recoil';

export const articleState = atom({
  key: 'articleState',
  default: '',
  // @ts-ignore
  persistence_UNSTABLE: { type: true },
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
