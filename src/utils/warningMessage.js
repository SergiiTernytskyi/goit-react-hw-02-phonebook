import { Notify } from 'notiflix';

const notifyOptions = {
  position: 'center-top',
  fontSize: '18px',
  clickToClose: true,
  width: '200px',
  timeout: 5000,
};

export function showWarningMessage(value) {
  Notify.failure(`${value} is already in contacts.`, notifyOptions);
}
