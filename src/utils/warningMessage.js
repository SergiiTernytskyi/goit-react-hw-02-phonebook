import { Notify } from 'notiflix';

const notifyOptions = {
  position: 'center-top',
  fontSize: '16px',
  clickToClose: true,
  width: '350px',
  timeout: 5000,
};

export function showWarningMessage(value) {
  Notify.failure(`${value} is already in contacts.`, notifyOptions);
}
