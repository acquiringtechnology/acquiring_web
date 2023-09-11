import {
  GENDER,
  USER_TYPE,
  CLASS_TYPE,
  SETTLEMENT_TYPE,
  COURSE_STATUS
} from '../flags';

export const GENDER_TYPE = [
  {
    label: 'Male ',
    value: GENDER.MALE
  },
  {
    label: 'Female',
    value: GENDER.FEMALE
  }
];

export const CLASS_TYPE_LIST = [
  {
    label: 'Online',
    value: CLASS_TYPE.ONLINE
  },
  {
    label: 'Offline',
    value: CLASS_TYPE.OFFLINE
  }
];
export const SETTLEMENT_LIST = [
  {
    label: 'Yes',
    value: SETTLEMENT_TYPE.YES
  },
  {
    label: 'No',
    value: SETTLEMENT_TYPE.NO
  }
];

export const USER_LIST = [
  {
    label: 'Candidate',
    value: USER_TYPE.CANDIDATE
  },
  {
    label: 'Trainer',
    value: USER_TYPE.TRAINER
  },
  {
    label: 'Admin',
    value: USER_TYPE.ADMIN
  },
  {
    label: 'Supper Admin',
    value: USER_TYPE.SUPPER_ADMIN
  }
];

export const COURSE_STATUS_LIST = [
  {
    label: 'Yet to start',
    value: COURSE_STATUS.YET_TO_START
  },
  {
    label: 'Processing',
    value: COURSE_STATUS.PROCESSING
  },
  {
    label: 'Hold',
    value: COURSE_STATUS.HOLD
  },
  {
    label: 'Discontinue',
    value: COURSE_STATUS.DISCONTINUE
  }
];
export const COURSE_LIST=[
  { value: 101, label: 'Frontend (ReactJS)' },
  { value: 102, label: 'Frontend (Angular)' },
]