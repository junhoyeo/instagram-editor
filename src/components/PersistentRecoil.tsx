import React from 'react';
import {
  RecoilRoot,
  MutableSnapshot,
} from 'recoil';
import {
  useTransactionObservation_UNSTABLE,
} from 'recoil/dist/recoil.development';

import { articleState } from '../state/article';
import { profileState } from '../state/profile';

const PERSISTENT_ATOMS = [articleState, profileState];

const initializeState = ({ set }: MutableSnapshot) => {
  PERSISTENT_ATOMS.forEach((atom) => {
    const persistedState = localStorage.getItem(atom.key);
    if (persistedState) {
      set(atom, JSON.parse(persistedState).value);
    }
  });
};

function PersistenceObserver() {
  useTransactionObservation_UNSTABLE(({ atomValues, modifiedAtoms }: any) => {
    for (const modifiedAtom of modifiedAtoms) {
      localStorage.setItem(
        modifiedAtom,
        JSON.stringify({value: atomValues.get(modifiedAtom)}),
      );
    }
  });
  return null;
}

const PersistentRecoil: React.FC = ({ children }) => {
  return (
    <RecoilRoot
      initializeState={initializeState}
    >
      <PersistenceObserver />
      {children}
    </RecoilRoot>
  );
};

export default PersistentRecoil;
