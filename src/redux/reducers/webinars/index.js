import { WEBINARS_LIST_ACTIONS ,WEBINARS_ENROLLED_ACTIONS,WEBINARS_DETAIL_ACTIONS ,WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS ,WEBINARS_ENROLLED_RESEND_OTP_ACTIONS} from "../../actionsType/webinear";

const intialState = {
  webinarList: [],
  isWebinarListLoader: false,

  webinarEnrolledData:{},
  isWebinarEnrolledLoader:false,

  webinarEnrolledOtpData:{},
  isWebinarEnrolledOtpLoader:false,

  webinarEnrolledOtpResend:{},
  isWebinarEnrolledOtpResendLoader:false,

  webinarDetailData:{},
  isWebinarDetailLoader:false,
  // webinar

};

export const WebinarReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case WEBINARS_LIST_ACTIONS.WEBINARS_LIST_ACTIONS_REQUEST:
      return { ...state, isWebinarListLoader: true };
    case WEBINARS_LIST_ACTIONS.WEBINARS_LIST_ACTIONS_RESPONSE:
      return {
        ...state,
        webinarList: payload,
        isWebinarListLoader: false,
      };
    case WEBINARS_LIST_ACTIONS.WEBINARS_LIST_ACTIONS_ERROR:
      return {
        ...state,
        webinarList: payload,
        isWebinarListLoader: false,
      };

      case WEBINARS_ENROLLED_ACTIONS.WEBINARS_ENROLLED_ACTIONS_REQUEST:
        return { ...state, isWebinarEnrolledLoader: true };
      case WEBINARS_ENROLLED_ACTIONS.WEBINARS_ENROLLED_ACTIONS_RESPONSE:
        return {
          ...state,
          webinarEnrolledData: payload,
          isWebinarEnrolledLoader: false,
        };
      case WEBINARS_ENROLLED_ACTIONS.WEBINARS_ENROLLED_ACTIONS_ERROR:
        return {
          ...state,
          webinarEnrolledData: payload,
          isWebinarEnrolledLoader: false,
        };


        case WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS.WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS_REQUEST:
          return { ...state, isWebinarEnrolledOtpLoader: true };
        case WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS.WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS_RESPONSE:
          return {
            ...state,
            webinarEnrolledOtpData: payload,
            isWebinarEnrolledOtpLoader: false,
          };
        case WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS.WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS_ERROR:
          return {
            ...state,
            webinarEnrolledOtpData: payload,
            isWebinarEnrolledOtpLoader: false,
          };


          case WEBINARS_ENROLLED_RESEND_OTP_ACTIONS.WEBINARS_ENROLLED_RESEND_OTP_ACTIONS_REQUEST:
            return { ...state, isWebinarEnrolledOtpResendLoader: true };
          case WEBINARS_ENROLLED_RESEND_OTP_ACTIONS.WEBINARS_ENROLLED_RESEND_OTP_ACTIONS_RESPONSE:
            return {
              ...state,
              webinarEnrolledOtpResend: payload,
              isWebinarEnrolledOtpResendLoader: false,
            };
          case WEBINARS_ENROLLED_RESEND_OTP_ACTIONS.WEBINARS_ENROLLED_RESEND_OTP_ACTIONS_ERROR:
            return {
              ...state,
              webinarEnrolledOtpResend: payload,
              isWebinarEnrolledOtpResendLoader: false,
            };


            case WEBINARS_DETAIL_ACTIONS.WEBINARS_DETAIL_ACTIONS_REQUEST:
              return { ...state, isWebinarDetailLoader: true };
            case WEBINARS_DETAIL_ACTIONS.WEBINARS_DETAIL_ACTIONS_RESPONSE:
              return {
                ...state,
                webinarDetailData: payload,
                isWebinarDetailLoader: false,
              };
            case WEBINARS_DETAIL_ACTIONS.WEBINARS_DETAIL_ACTIONS_ERROR:
              return {
                ...state,
                webinarDetailData: payload,
                isWebinarDetailLoader: false,
              };
  

    default:
      return state;
  }
};
