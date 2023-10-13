import { useRef, useState, useEffect } from "react";
import SimpleReactValidator from "simple-react-validator";
import { NormalInput, NormalButton } from "@/components/common";
import styles from "./webinarRegisterForm.module.scss";
import { WebinarOtpVerify } from "./verifyOtp";
export const WebinarsRegisterForm = ({
  createWebinearEnrolled,
  webinearEnrolledOtpVerify,
  webinarId,
  webinearEnrolledOtpResend
}) => {
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState(0);
  const [isOtpModelOpen, setIsOtpModelOpen] = useState(false);
  const [isFormLoder, setIsFormLoder] = useState(false);
  const [webinarEnrolledFormObj, setWebinarEnrolledFormObj] = useState({
    name: "",
    webinarId: webinarId,
    email: "",
    phone: "",
    joinCourseStatus: 0,
    isExistUser: 0,
  });

  const handleInputChange = (event) => {
    const {
      target: { value, checked, type, name },
    } = event;
    setWebinarEnrolledFormObj({
      ...webinarEnrolledFormObj,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      const formValid = validator.current.allValid();
      if (formValid) {
        setIsFormLoder(true);

        const webinarEnrolledReq = await createWebinearEnrolled(
          {...webinarEnrolledFormObj,webinarId}
        );
        setIsFormLoder(false);
        const {
          status,
          data: { WebinarsEnrollData },
        } = webinarEnrolledReq;

        if (status) {
          console.log("courseEnquiryData---------->", WebinarsEnrollData);
          setIsOtpModelOpen(true);
          setWebinarEnrolledFormObj(WebinarsEnrollData);
        }
        console.log("fom");
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (e) {
      setIsFormLoder(false);
      console.log("errr------", e);
    }
  };

  const handleCloseOtpModel = () => {
    setIsOtpModelOpen(!isOtpModelOpen);
  };

  const handlOtpVerifySucess = () => {
    handleCloseOtpModel();
    // setCourseEnquiryData({});
    setWebinarEnrolledFormObj({
      name: "",
      webinarId,
      email: "",
      phone: "",
      joinCourseStatus: 0,
      isExistUser: 0,
    });

  };
  return (
    <div className={styles.webinarsRegisterFormContiner}>
      <div className="card border-0 shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <h4 className={`mb-3 ${styles.title}`}>Register NOW!</h4>
            </div>

            <div className="col-md-12">
              <NormalInput
                title="Name"
                onChange={handleInputChange}
                name="name"
                value={webinarEnrolledFormObj.name}
                errorMessage={validator.current.message(
                  "Name",
                  webinarEnrolledFormObj.name,
                  "required"
                )}
              />
            </div>
            <div className="col-md-12">
              <NormalInput
                title="Email"
                onChange={handleInputChange}
                name="email"
                value={webinarEnrolledFormObj.email}
                errorMessage={validator.current.message(
                  "Email",
                  webinarEnrolledFormObj.email,
                  "required|email"
                )}
              />
            </div>
            <div className="col-md-12">
              <NormalInput
                title="Mobile number"
                name="phone"
                type="number"
                inputGroup={true}
                inputGroupRightText="+91"
                onChange={handleInputChange}
                value={webinarEnrolledFormObj.phone}
                errorMessage={validator.current.message(
                  "Phone",
                  webinarEnrolledFormObj.phone,
                  "required|phone"
                )}
              />
            </div>
            <div className="col-md-12">
              {/* <button type="button" className="btn btn-primary">Submit</button> */}
              <NormalButton
                className="btn btn-primary px-4"
                type="submit"
                title="Submit"
                isLoader={isFormLoder}
                onClick={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </div>
      <WebinarOtpVerify
        toggle={handleCloseOtpModel}
        isOpen={isOtpModelOpen}
        otpVerifySucess={handlOtpVerifySucess}
        webinearEnrolledOtpVerify={webinearEnrolledOtpVerify}
        webinarEnrolledFormObj={webinarEnrolledFormObj}
        webinearEnrolledOtpResend={webinearEnrolledOtpResend}
      />
    </div>
  );
};
