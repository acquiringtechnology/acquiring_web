export const authenticate = {
  login: {
    api: 'login',
    method: 'post',
    baseURL: 'normal'
  },
  register: {
    api: 'register',
    method: 'post',
    baseURL: 'normal'
  },
  emailVerificasion: {
    api: 'register/emailVerificasion',
    method: 'post',
    baseURL: 'normal'
  }
};

export const syllabus = {
  post: {
    api: 'syllabus',
    method: 'post',
    baseURL: 'normal'
  },
  put: {
    api: 'syllabus',
    method: 'put',
    baseURL: 'normal'
  },
  delete: {
    api: 'syllabus',
    method: 'delete',
    baseURL: 'normal'
  },
  get: {
    api: 'syllabus',
    method: 'get',
    baseURL: 'normal'
  }
};

export const course = {
  post: {
    api: 'course',
    method: 'post',
    baseURL: 'normal'
  },
  put: {
    api: 'course',
    method: 'put',
    baseURL: 'normal'
  },
  delete: {
    api: 'courseBySyllabus',
    method: 'delete',
    baseURL: 'normal'
  },
  get: {
    api: 'courseBySyllabus',
    method: 'get',
    baseURL: 'normal'
  }
};

export const courseEnquiry = {
  create: {
    api: 'courseEnquiry',
    method: 'post',
    baseURL: 'normal'
  },
  otpVerify: {
    api: 'courseEnquiryOtpVerify',
    method: 'post',
    baseURL: 'normal'
  },
  otpResend: {
    api: 'courseEnquiryOtpResend',
    method: 'post',
    baseURL: 'normal'
  },
 
};

export const subscribe = {
  create: {
    api: 'subscribe',
    method: 'post',
    baseURL: 'normal'
  },

 
};


