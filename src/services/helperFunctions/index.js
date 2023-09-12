import { USER_TYPE } from '@/services/constants';

export const setStorage = (name = '', data = '') => {
  localStorage.setItem(name, data);
};

export const getStorage = (name = '') => {
  return localStorage.getItem(name);
};

export const removeStorage = (name = '') => {
  if (name) {
    localStorage.removeItem(name);
  } else {
    localStorage.clear();
  }
};

export const getUserType = (userType) => {
  switch (userType) {
    case USER_TYPE.SUPPER_ADMIN:
      return 'Supper Admin';
    case USER_TYPE.ADMIN:
      return 'Admin';
    case USER_TYPE.CANDIDATE:
      return 'Candidate';
    case USER_TYPE.TRAINER:
      return 'Trainer';
    default:
      return 'No User';
  }
};
