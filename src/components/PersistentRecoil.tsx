import React from 'react';
import {
  RecoilRoot,
  MutableSnapshot,
} from 'recoil';
import {
  useTransactionObservation_UNSTABLE,
} from 'recoil/dist/recoil.development';

import { articleState } from '../state/article';

const ATOMS_IN_STATE = [articleState];

const initializeState = ({ set }: MutableSnapshot) => {
  ATOMS_IN_STATE.forEach((atom) => {
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
