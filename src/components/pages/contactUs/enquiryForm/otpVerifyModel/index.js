import { useRef, useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { NormalInput, NormalSelect, NormalButton } from "@/components/common";
import SimpleReactValidator from "simple-react-validator";

export const OtpVerifyModel=({toggle,isOpen,courseEnquiryOtpVerify,otpVerifySucess,courseEnquiryData={}})=>{
    const validator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState(0);
    const [isFormLoder, setIsFormLoder] = useState(false);
    const [isOtpVeSucessrified, setIsOtpVeSucessrified] = useState(false);
    const [otpFromObj, setOtpFromObj] = useState({
        otpCode: "",
      });
    

      const handleOtpInputChange=(event)=>{
        const {
            target: { value, checked, type, name },
          } = event;
      
          setOtpFromObj({
            ...otpFromObj,
            [name]: type === "checkbox" ? checked : value,
          });
      }

      const handleFormSubmit = async () => {
        try {
          const formValid = validator.current.allValid();
          if (formValid) {
            setIsFormLoder(true);
            console.log("status-------------->", courseEnquiryData);
            const courseEnquiryOtpVerifyReq = await courseEnquiryOtpVerify(otpFromObj,courseEnquiryData?.id);
            setIsFormLoder(false);
            const { status } = courseEnquiryOtpVerifyReq;
            // console.log("status-------------->", status);
            if (status) {
                setIsOtpVeSucessrified(true)
            }
          } else {
            validator.current.showMessages();
            forceUpdate(1);
          }
        } catch (e) {
          // setIsFormLoder(false);
          // console
        }
      };
    return(
        

    <Modal
    isOpen={isOpen}
    className={`modal-dialog-centered`}
    backdrop={"static"}
    toggle={toggle}
  >
    <div class="modal-header bg-primary text-white">
      <h5 class="modal-title ">Verify OTP</h5>
      
    </div>
    <ModalBody>
      <div className="row">
      {isOtpVeSucessrified  && <div className="col-md-12">

    <div class="alert alert-success" role="alert">
      Your OTP has been  verified  successfully and our team will contact you shortly
</div>
      </div>}
     
         

      {!isOtpVeSucessrified  && <div className="col-md-12">
            <NormalInput
              placeholder="Enter the OTP to verify and proceed"
              title={`OTP sent to ${courseEnquiryData.phone}`}
              onChange={handleOtpInputChange}
              name="otpCode"
              errorMessage={validator.current.message(
                "OTP",
                otpFromObj.otpCode,
                "required|min:4|max:4|numeric"
              )}
              value={otpFromObj.otpCode}
            />
            <span className="float-end">Resend in</span>
          </div>}

          <div className="col-md-12 text-center">
       
          {!isOtpVeSucessrified  &&  <NormalButton
          className="btn btn-primary btn-sm w-100 mt-2"
          type="submit"
          style={{minHeight:"34px"}}
          title="Proceed"
          isLoader={isFormLoder}
          onClick={handleFormSubmit}
        />}

{isOtpVeSucessrified  &&  <NormalButton
          className="btn btn-primary px-4 mt-2"
          type="submit"
           title="Ok"
          isLoader={isFormLoder}
          onClick={otpVerifySucess}
        />}
      </div>

      </div>
    </ModalBody>
   
  </Modal>
    )
}