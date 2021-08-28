import { makeAutoObservable, set, get } from 'mobx';
const modal = {
  privacyPolicyModal: false,
  succesModal: true,
};

export default class ModalStore {
  modal: Dialogs = modal;

  constructor() {
    makeAutoObservable(this);
  }

  handleDialog(name: keyof Dialogs) {
    return set(this.modal, name, !get(this.modal, name));
  }
}
export type Dialogs = {
  [key in keyof typeof modal]: boolean;
};
