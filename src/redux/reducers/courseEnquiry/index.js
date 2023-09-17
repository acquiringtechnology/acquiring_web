import { COURSE_ENQUIRY_CREATE_ACTIONS,COURSE_ENQUIRY_OTP_VERIFY_ACTIONS } from "../../actionsType/courseEnquiry";

const intialState = {
  courseEnquiryData: {},
  isCourseEnquiryLoader: false,
  courseEnquiryOtpVerifyData: {},
  isCourseEnquiryOtpVerifyLoader: false,
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
  

    default:
      return state;
  }
};
