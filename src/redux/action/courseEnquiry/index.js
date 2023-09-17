import { apiCall } from '@/services/api';
import {
 COURSE_ENQUIRY_CREATE_ACTIONS,
 COURSE_ENQUIRY_OTP_VERIFY_ACTIONS
} from '@/redux/actionsType/courseEnquiry';
import { courseEnquiry } from '@/services/apiVariables';
import { Toast } from "@/services/toast";

export const courseEnquiryCreate = (body) => (dispatch) => {

  console.log('courseEnquiryCreate--------',body)
  dispatch({
    type: COURSE_ENQUIRY_CREATE_ACTIONS.COURSE_ENQUIRY_CREATE_ACTIONS_REQUEST,
    isCourseCreateLoader: true
  });
  return new Promise((resolve, reject) => {
    apiCall({ ...courseEnquiry.create, body })
      .then((data) => {
        dispatch({
          type: COURSE_ENQUIRY_CREATE_ACTIONS.COURSE_ENQUIRY_CREATE_ACTIONS_RESPONSE,
          payload: data.data
        });
        resolve(data);
      })
      .catch((error) => {
        let message = error?.message || "Something went wrong";
        Toast({ message, type: "error" });
        dispatch({
          type: COURSE_ENQUIRY_CREATE_ACTIONS.COURSE_ENQUIRY_CREATE_ACTIONS_ERROR
          //   payload: data.data
        });
        reject(error);
      });
  });

};


export const courseEnquiryOtpVerify= (body,id) => (dispatch) => {
  dispatch({
    type: COURSE_ENQUIRY_OTP_VERIFY_ACTIONS.COURSE_ENQUIRY_OTP_VERIFY_ACTIONS_REQUEST,
    isCourseEnquiryOtpVerifyLoader: true
  });
  return new Promise((resolve, reject) => {

    const prefixUrl = `/${id}`;
    apiCall({ ...courseEnquiry.otpVerify, body ,prefixUrl})
      .then((data) => {
        dispatch({
          type: COURSE_ENQUIRY_OTP_VERIFY_ACTIONS.COURSE_ENQUIRY_OTP_VERIFY_ACTIONS_RESPONSE,
          payload: data.data
        });
        resolve(data);
      })
      .catch((error) => {
        let message = error?.message || "Something went wrong";
        Toast({ message, type: "error" });
        dispatch({
          type: COURSE_ENQUIRY_OTP_VERIFY_ACTIONS.COURSE_ENQUIRY_OTP_VERIFY_ACTIONS_ERROR 
          //   payload: data.data
        });
        reject(error);
      });
  });

}