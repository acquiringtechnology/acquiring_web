export const EXIST_LOCAL_STORAGE = {
  AUTHTOKEN: 'AuthToken',
  USER_ID: 'userId',
  IS_KEEP_ME: 'isKeepMe',
  THEME_MODE: 'themeMode',
  BATCH_CANDIDATE_LIST: 'batchCandidateList',
  ATTENDANCE_CANDIDATE: 'attendanceCandidate',
  ACCOUNT_DETAIL: 'accountDetail',
  CURRENT_USER: 'curentUser',
  SYLLABUS_DETAIL: 'syllabusdetail',
  COURSE_DETAIL: 'coursedetail',
  WEBINAR_DETAIL: 'webinardetail'
};

export const WEEK_LIST = [
  { value: 0, label: 'Sun' },
  { value: 1, label: 'Mon' },
  { value: 2, label: 'Tue' },
  { value: 3, label: 'Wed' },
  { value: 4, label: 'Thu' },
  { value: 5, label: 'Fri' },
  { value: 6, label: 'Sat' }
];
export const NEXT_PUBLIC_GOOGLE_ANALYTICS= 'G-S02J90JMSB'
// export const BASE_URL=  process.env.NEXT_PUBLIC_APP_ENV== 'PROD'?'https://acquiringapi.azurewebsites.net/':'http://localhost:3033/'
export const BASE_URL=  process.env.NEXT_PUBLIC_APP_ENV== 'PROD'?'https://api.acquiring.in:3033/':'http://localhost:3033/'
