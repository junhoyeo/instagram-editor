import React from 'react';

import ServiceWrapper from './components/ServiceWrapper';
import Editor from './components/Editor';
import Preview from './components/Preview';

const App: React.FC = () => {
  return (
    <ServiceWrapper>
      <Editor />
      <Preview />
    </ServiceWrapper>
  );
};

export default App;
