import React from 'react';
import { RecoilRoot } from 'recoil';

import ServiceWrapper from './components/ServiceWrapper';
import Editor from './components/Editor';
import Preview from './components/Preview';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ServiceWrapper>
        <Editor />
        <Preview />
      </ServiceWrapper>
    </RecoilRoot>
  );
};

export default App;
