import Link from "next/link";
import { AuthLayout } from "@/layout/authLayout";
import { NormalInput, NormalSelect, NormalButton } from "@/components/common";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { bindActionCreators } from "redux";
import * as authenticateAction from "@/redux/action/authenticate";
import { setStorage } from "@/services/helperFunctions";
import { EXIST_LOCAL_STORAGE, USER_TYPE } from "@/services/constants";
import { useEffect, useRef, useState } from "react";
import OtpInput from 'react-otp-input';

export  function EmailVerification(props) {
  const [otp, setOtp] = useState('');
  return (
    <>
        <div className="d-flex">
        <div className="mt-4">
          <h3>Verify your email address & Phone</h3>
          <p>
            To start using PeopleFinders, confirm your email address with the
            email we sent to:
          </p>
        </div>
      </div>

      <div className="d-flex flex-column mt-4">
        <div className="row">
          {/* <div className="col-md-12">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="mx-2">{' '}</span>}
              inputStyle={{width:'5rem'}}
              renderInput={(props) => <NormalInput {...props} />}
            />
          </div> */}
          <div className="col-md-12">
            <NormalButton
              className="btn btn-primary px-4 w-100"
              type="submit"
              title="Reasend"
              // isLoader={isFormLoder}
              // onClick={handleRegister}
            />
          </div>
        </div>
      </div>
      </>   
  );
}

