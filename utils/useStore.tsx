import * as React from 'react';
import ModalStore from 'src/store/';

export const storesContext = React.createContext({
  modalStore: new ModalStore(),
});

export const useStores = () => React.useContext(storesContext);
