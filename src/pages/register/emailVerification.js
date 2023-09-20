import Head from "next/head";
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
import OtpInput from "react-otp-input";
import jwt_decode from "jwt-decode";

function EmailVerification(props) {
  const router = useRouter();
  const [isFormLoder, setIsFormLoder] = useState(false);
  const [emailVerifiedSucess, setEmailVerifiedSucess] = useState(false);
  const { token } = router.query;

  useEffect(() => {
    if (!emailVerifiedSucess) {
      handleEmailVerification(token);
    }
  }, [token]);

  const handleEmailVerification = async () => {
    try {
      console.log("jwt_decode---------------->", token);
      const decoded = jwt_decode(token);
      const { user_id } = decoded;
      setIsFormLoder(true);
      const { userRegisterEmailVerification } = props;
      const emailVerificationReq = await userRegisterEmailVerification(user_id);
      setIsFormLoder(false);
      const { status } = emailVerificationReq;
      console.log("status-------------->", status);
      if (status) {
        setEmailVerifiedSucess(true);
        // router.push({
        //   pathname: "/register",
        //   query: { emailVerification: "true" },
        // });
      }
    } catch (e) {
      setIsFormLoder(false);
      console.log(e);
    }
  };

  return (
    <>
    <Head>
      <title>Acquiring | Email-verification</title>
      <meta name="description" content="Acquiring | Email-verification" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AuthLayout>
      <div className="d-flex flex-row align-items-center">
        <img className="p-4 w-50" src={"/logo.svg"} alt="" />{" "}
      </div>
      <div className="d-flex">
        <div className="mt-4">
          <h3>{!emailVerifiedSucess ?"Please Waite...":"Verified!"}</h3>
          <p>{!emailVerifiedSucess ?"Your Email verification is processing...":"Thank you, your email has been verified. Your account is now active. Please use the link below to login to your account."}</p>
        </div>
      </div>

      <div className="d-flex flex-column mt-4">
        <div className="row">
          <div className="col-md-12">
            <NormalButton
              className="btn btn-primary px-4 w-100"
              type="submit"
              title={!emailVerifiedSucess ?"Processing...":"Login to your account"}
              isLoader={isFormLoder}

              onClick={()=> emailVerifiedSucess && router.push('/signIn')}
            />
          </div>
        </div>
      </div>
    </AuthLayout>
    </>
  );
}

const mapStatesToProps = ({ authenticate: { isloginLoader = false } }) => {
  return { isloginLoader };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ...authenticateAction,
    },
    dispatch
  );
};
export default connect(mapStatesToProps, mapDispatchToProps)(EmailVerification);
