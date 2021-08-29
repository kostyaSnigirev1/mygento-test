import { makeAutoObservable, set, get } from 'mobx';
const modal = {
  privacyPolicyModal: false,
  succesModal: false,
};

export default class ModalStore {
  modal: Dialogs = modal;
  privacyCloseType = 'close';
  clearForm = false;
  userName = '';

  constructor() {
    makeAutoObservable(this);
  }

  setClearForm() {
    this.clearForm = !this.clearForm;
  }

  setUserName(name: string) {
    this.userName = name;
  }

  handleModal(name: keyof Dialogs, type?: string) {
    const active = !get(this.modal, name);
    if (type) {
      this.privacyCloseType = type;
    }

    return set(this.modal, name, active);
  }
}

export type Dialogs = {
  [key in keyof typeof modal]: boolean;
};

export type CloseTypes = 'close' | 'agree';
