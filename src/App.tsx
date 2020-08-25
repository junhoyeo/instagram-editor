import React from 'react';

import PersistentRecoil from './components/PersistentRecoil';
import ServiceWrapper from './components/ServiceWrapper';
import Editor from './components/Editor';
import Preview from './components/Preview';

const App: React.FC = () => {
  return (
    <PersistentRecoil>
      <ServiceWrapper>
        <Editor />
        <Preview />
      </ServiceWrapper>
    </PersistentRecoil>
  );
};

export default App;
