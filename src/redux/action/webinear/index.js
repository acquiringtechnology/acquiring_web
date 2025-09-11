import { apiCall } from "@/services/api";
import {
  WEBINARS_LIST_ACTIONS,
  WEBINARS_ENROLLED_ACTIONS,
  WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS,
  WEBINARS_ENROLLED_RESEND_OTP_ACTIONS,
  WEBINARS_DETAIL_ACTIONS
} from "@/redux/actionsType/webinear";
import { webinar } from "@/services/apiVariables";
import { Toast } from "@/services/toast";

export const getAllWebinear = (body) => (dispatch) => {
  dispatch({
    type: WEBINARS_LIST_ACTIONS.WEBINARS_LIST_ACTIONS_REQUEST,
    isWebinarListLoader: true,
  });
  return new Promise((resolve, reject) => {
    apiCall({ ...webinar.get, body })
      .then((data) => {
        dispatch({
          type: WEBINARS_LIST_ACTIONS.WEBINARS_LIST_ACTIONS_RESPONSE,
          payload: data.data,
        });
        resolve(data);
      })
      .catch((error) => {
        // console.log(error);
        let message = error?.message || "Something went wrong";
        Toast({ message, type: "error" });
        dispatch({
          type: WEBINARS_LIST_ACTIONS.WEBINARS_LIST_ACTIONS_ERROR,
          //   payload: data.data
        });
        reject(error);
      });
  });
};

export const createWebinearEnrolled = (body) => (dispatch) => {
  dispatch({
    type: WEBINARS_ENROLLED_ACTIONS.WEBINARS_ENROLLED_ACTIONS_REQUEST,
    isWebinarEnrolledLoader: true,
  });
  return new Promise((resolve, reject) => {
    apiCall({ ...webinar.enrolledCreate, body })
      .then((data) => {
        dispatch({
          type: WEBINARS_ENROLLED_ACTIONS.WEBINARS_ENROLLED_ACTIONS_RESPONSE,
          payload: data.data,
        });
        resolve(data);
      })
      .catch((error) => {
        let message = error?.message || "Something went wrong";
        Toast({ message, type: "error" });
        dispatch({
          type: WEBINARS_ENROLLED_ACTIONS.WEBINARS_ENROLLED_ACTIONS_ERROR,
          //   payload: data.data
        });
        reject(error);
      });
  });
};

export const webinearEnrolledOtpVerify = (body, id) => (dispatch) => {
  dispatch({
    type: WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS.WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS_REQUEST,
    isWebinarEnrolledOtpLoader: true,
  });
  const prefixUrl = `/${id}`;

  return new Promise((resolve, reject) => {
    apiCall({ ...webinar.enrolledOTPVerify, body ,prefixUrl})
      .then((data) => {
        dispatch({
          type: WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS.WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS_REQUEST,
          payload: data.data,
        });
        resolve(data);
      })
      .catch((error) => {
        let message = error?.message || "Something went wrong";
        Toast({ message, type: "error" });
        dispatch({
          type: WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS.WEBINARS_ENROLLED_OTP_VERIFY_ACTIONS_ERROR,
          //   payload: data.data
        });
        reject(error);
      });
  });
};


export const webinearEnrolledOtpResend = (body, id) => (dispatch) => {
  dispatch({
    type: WEBINARS_ENROLLED_RESEND_OTP_ACTIONS.WEBINARS_ENROLLED_RESEND_OTP_ACTIONS_REQUEST,
    isWebinarEnrolledOtpResendLoader: true,
  });
  const prefixUrl = `/${id}`;

  return new Promise((resolve, reject) => {
    apiCall({ ...webinar.enrolledOTPResend, body ,prefixUrl})
      .then((data) => {
        dispatch({
          type: WEBINARS_ENROLLED_RESEND_OTP_ACTIONS.WEBINARS_ENROLLED_RESEND_OTP_ACTIONS_RESPONSE,
          payload: data.data,
        });
        resolve(data);
      })
      .catch((error) => {
        let message = error?.message || "Something went wrong";
        Toast({ message, type: "error" });
        dispatch({
          type: WEBINARS_ENROLLED_RESEND_OTP_ACTIONS.WEBINARS_ENROLLED_RESEND_OTP_ACTIONS_ERROR,
          //   payload: data.data
        });
        reject(error);
      });
  });
};


export const webinearDetailById = (id) => (dispatch) => {
  dispatch({
    type: WEBINARS_DETAIL_ACTIONS.WEBINARS_DETAIL_ACTIONS_REQUEST,
    isWebinarDetailLoader: true,
  });
  const prefixUrl = `/${id}`;

  return new Promise((resolve, reject) => {
    apiCall({ ...webinar.webinarDetailById ,prefixUrl})
      .then((data) => {
        dispatch({
          type: WEBINARS_DETAIL_ACTIONS.WEBINARS_DETAIL_ACTIONS_RESPONSE,
          payload: data.data,
        });
        resolve(data);
      })
      .catch((error) => {
        let message = error?.message || "Something went wrong";
        Toast({ message, type: "error" });
        dispatch({
          type: WEBINARS_DETAIL_ACTIONS.WEBINARS_DETAIL_ACTIONS_ERROR,
          //   payload: data.data
        });
        reject(error);
      });
  });




  
};
