import Link from "next/link";
import { AuthLayout } from "@/layout/authLayout";
import { NormalInput, NormalSelect, NormalButton } from "@/components/common";
import { RegisterForm, EmailVerification } from "@/components/pages";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { bindActionCreators } from "redux";
import * as authenticateAction from "@/redux/action/authenticate";
import { setStorage } from "@/services/helperFunctions";
import { EXIST_LOCAL_STORAGE, USER_TYPE } from "@/services/constants";
import { useEffect, useRef, useState } from "react";


function Register(props) {
  const router = useRouter();
  const { emailVerification } = router.query;

  console.log("emailVerification---------->", emailVerification);

  return (
    <AuthLayout>
      <div className="d-flex flex-row align-items-center">
        <img className="p-4 w-50" src={"/logo.svg"} alt="" />{" "}
      </div>
      {emailVerification === "true" ? (
        <EmailVerification />
      ) : (
        <RegisterForm {...props} />
      )}
    </AuthLayout>
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
export default connect(mapStatesToProps, mapDispatchToProps)(Register);
