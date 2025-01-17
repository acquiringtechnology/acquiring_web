import { useRef, useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { NormalInput, NormalSelect, NormalButton } from "@/components/common";
import SimpleReactValidator from "simple-react-validator";

export const OtpVerifyModel = ({
  toggle,
  isOpen,
  courseEnquiryOtpVerify,
  otpVerifySucess,
  courseEnquiryData = {},
  isSyllabusModal = false,
  liveClassDetail,
  resendOtpCourseEnquiry,
  courseEnquiryFormObj
}) => {
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState(0);
  const [isFormLoder, setIsFormLoder] = useState(false);
  const [isOtpResendLoder, setIsOtpResendLoder] = useState(false);
  const [isOtpVeSucessrified, setIsOtpVeSucessrified] = useState(false);
  const [otpFromObj, setOtpFromObj] = useState({
    otpCode: "",
  });

  const handleOtpInputChange = (event) => {
    const {
      target: { value, checked, type, name },
    } = event;

    setOtpFromObj({
      ...otpFromObj,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      const formValid = validator.current.allValid();
      if (formValid) {
        setIsFormLoder(true);
        console.log("status-------------->", courseEnquiryData);
        const courseEnquiryOtpVerifyReq = await courseEnquiryOtpVerify(
          otpFromObj,
          courseEnquiryData?.id
        );
        setIsFormLoder(false);
        const { status } = courseEnquiryOtpVerifyReq;
        // console.log("status-------------->", status);
        if (status) {
          if (isSyllabusModal) {
            handleDownloadSyllabus();
          }
          setIsOtpVeSucessrified(true);
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (e) {
      setIsFormLoder(false);
      // console
    }
  };

  const handleDownloadSyllabus = () => {
    if (process.browser) {
    console.log(liveClassDetail.syllabusUrl);
    let link = document.createElement("a");
    link.download = liveClassDetail.name;
    link.href = liveClassDetail.syllabusUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // delete link;
    }
  };

  const handleResendOtp = async () => {
    setIsOtpResendLoder(true);
    console.log("status-------------->", courseEnquiryFormObj);
    const courseEnquiryOtpResendReq = await resendOtpCourseEnquiry(courseEnquiryFormObj.phone,
      courseEnquiryData?.id
    );
    setIsOtpResendLoder(false);
  };

  const handleSucessOkClick=()=>{
    setIsOtpVeSucessrified(false);
    otpVerifySucess();
    setOtpFromObj({
      otpCode: "",
    })
  };

  const handleCloseOtp=()=>{
    setIsOtpVeSucessrified(false);
    toggle();
    setOtpFromObj({
      otpCode: "",
    });
    otpVerifySucess();
  }
  return (
    <Modal
      isOpen={isOpen}
      className={`modal-dialog-centered`}
      backdrop={"static"}
      toggle={handleCloseOtp}
    >
      <div className="modal-header bg-primary text-white">
        <h5 className="modal-title ">Verify OTP</h5>
        <button type="button" onClick={handleCloseOtp} className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <ModalBody>
        <div className="row">
          {isOtpVeSucessrified ? (
            <div className="col-md-12">
              <div class="alert alert-success" role="alert">
                Your OTP has been verified successfully{" "}
                {isSyllabusModal ? (
                  <span>
                    Your download should start automatically. If not please{" "}
                    {
                      <a
                        className="text-decoration curser cursor-pointer"
                        onClick={handleDownloadSyllabus}
                      >
                        click here.
                      </a>
                    }
                  </span>
                ) : (
                  `and our team will contact you shortly`
                )}
              </div>
            </div>
          ) : (
            ""
          )}

          {!isOtpVeSucessrified && (
            <div className="col-md-12">
              <NormalInput
                placeholder="Enter the OTP to verify and proceed"
                title={`OTP sent to ${courseEnquiryFormObj.phone}`}
                onChange={handleOtpInputChange}
                name="otpCode"
                errorMessage={validator.current.message(
                  "OTP",
                  otpFromObj.otpCode,
                  "required|min:4|max:4|numeric"
                )}
                value={otpFromObj.otpCode}
              />
              {isOtpResendLoder ? (
                <div
                  class="float-end  spinner-border text-primary spinner-border-sm"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                <span
                  className="float-end text-decoration-underline cursor-pointer"
                  onClick={handleResendOtp}
                  // style={}
                >
                  Resend OTP
                </span>
              )}
            </div>
          )}

          <div className="col-md-12 text-center">
            {!isOtpVeSucessrified && (
              <NormalButton
                className="btn btn-primary btn-sm w-100 mt-2"
                type="submit"
                style={{ minHeight: "34px" }}
                title="Proceed"
                isLoader={isFormLoder}
                onClick={handleFormSubmit}
              />
            )}

            {isOtpVeSucessrified && (
              <NormalButton
                className="btn btn-primary px-4 mt-2"
                type="submit"
                title="Ok"
                isLoader={isFormLoder}
                onClick={handleSucessOkClick}
              />
            )}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};
