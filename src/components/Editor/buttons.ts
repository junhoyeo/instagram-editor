import styled from 'styled-components';

import EditorButton from './EditorButton';

import alignLeftSolidIcon from '../../assets/align-left-solid.svg';
import copyRegularIcon from '../../assets/copy-regular.svg';

export const ButtonGroupContainer = styled.div`
  display: flex;
`;

export const ReplaceBlankLineButton = styled(EditorButton).attrs({
  name: '개행 변환',
  icon: alignLeftSolidIcon,
})`
  margin-right: 10px;
`;

export const CopyButton = styled(EditorButton).attrs({
  name: '복사하기',
  icon: copyRegularIcon,
})`
`;