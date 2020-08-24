import { atom, selector } from 'recoil';

const CHARACTER_LIMIT_FOR_FIRST_LINE = 120;

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

    const articleLines = article.split('\n');
    const [firstLine] = articleLines;

    if (firstLine.length > CHARACTER_LIMIT_FOR_FIRST_LINE) {
      return `${firstLine.slice(0, CHARACTER_LIMIT_FOR_FIRST_LINE).trim()}...`;
    }

    if (articleLines.length > 1) {
      return `${firstLine.trim()}...`;
    }

    return firstLine;
  },
});

export const articleTextState = selector({
  key: 'articleTextState',
  get: ({ get }) => {
    const article = get(articleState);
    return article
      .split('\n')
      .filter((isLineNotEmpty) => isLineNotEmpty)
      .join('\n');
  },
});
