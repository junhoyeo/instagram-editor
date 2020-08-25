import React, { useState } from 'react';

import PersistentRecoil from './components/PersistentRecoil';
import ServiceWrapper from './components/ServiceWrapper';
import Editor from './components/Editor';
import Preview from './components/Preview';
import SettingModal from './components/SettingModal';

const App: React.FC = () => {
  const [isSettingModalOpen, setIsSettingModalOpen] = useState<boolean>(false);

  const onClickOpenSettingModal = () => setIsSettingModalOpen(true);

  const onClickCloseSettingModal = () => setIsSettingModalOpen(false);

  return (
    <PersistentRecoil>
      <ServiceWrapper>
        <Editor
          onClickOpenSettingModal={onClickOpenSettingModal}
        />
        <Preview />
        <SettingModal
          isOpen={isSettingModalOpen}
          onRequestClose={onClickCloseSettingModal}
        />
      </ServiceWrapper>
    </PersistentRecoil>
  );
};

export default App;
