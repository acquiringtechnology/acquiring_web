import { COURSE_ENQUIRY_CREATE_ACTIONS,COURSE_ENQUIRY_OTP_VERIFY_ACTIONS,COURSE_ENQUIRY_OTP_RESEND_ACTIONS } from "../../actionsType/courseEnquiry";

const intialState = {
  courseEnquiryData: {},
  isCourseEnquiryLoader: false,
  courseEnquiryOtpVerifyData: {},
  isCourseEnquiryOtpVerifyLoader: false,
  isCourseEnquiryOtpResendLoader: false,
};

export const courseEnquiryReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case COURSE_ENQUIRY_CREATE_ACTIONS.COURSE_ENQUIRY_CREATE_ACTIONS_REQUEST:
      return { ...state, isCourseEnquiryLoader: true };
    case COURSE_ENQUIRY_CREATE_ACTIONS.COURSE_ENQUIRY_CREATE_ACTIONS_RESPONSE:
      return {
        ...state,
        courseEnquiryData: payload,
        isCourseEnquiryLoader: false,
      };
    case COURSE_ENQUIRY_CREATE_ACTIONS.COURSE_ENQUIRY_CREATE_ACTIONS_ERROR:
      return {
        ...state,
        courseEnquiryData: payload,
        isCourseEnquiryLoader: false,
      };

      case COURSE_ENQUIRY_OTP_VERIFY_ACTIONS.COURSE_ENQUIRY_OTP_VERIFY_ACTIONS_REQUEST:
        return { ...state, isCourseEnquiryOtpVerifyLoader: true };
      case COURSE_ENQUIRY_OTP_VERIFY_ACTIONS.COURSE_ENQUIRY_OTP_VERIFY_ACTIONS_RESPONSE:
        return {
          ...state,
          courseEnquiryOtpVerifyData: payload,
          isCourseEnquiryOtpVerifyLoader: false,
        };
      case COURSE_ENQUIRY_OTP_VERIFY_ACTIONS.COURSE_ENQUIRY_OTP_VERIFY_ACTIONS_ERROR:
        return {
          ...state,
          courseEnquiryOtpVerifyData: payload,
          isCourseEnquiryOtpVerifyLoader: false,
        };

        


        case COURSE_ENQUIRY_OTP_RESEND_ACTIONS.COURSE_ENQUIRY_OTP_RESEND_ACTIONS_REQUEST:
          return { ...state, isCourseEnquiryOtpResendLoader: true };
        case COURSE_ENQUIRY_OTP_RESEND_ACTIONS.COURSE_ENQUIRY_OTP_RESEND_ACTIONS_RESPONSE:
          return {
            ...state,
            courseEnquiryOtpResendData: payload,
            isCourseEnquiryOtpResendLoader: false,
          };
        case COURSE_ENQUIRY_OTP_RESEND_ACTIONS.COURSE_ENQUIRY_OTP_RESEND_ACTIONS_ERROR:
          return {
            ...state,
            courseEnquiryOtpResendData: payload,
            isCourseEnquiryOtpResendLoader: false,
          };
  

    default:
      return state;
  }
};
