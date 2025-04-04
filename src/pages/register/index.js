import Link from "next/link";
import { AuthLayout } from "@/layout/authLayout";

import Head from "next/head";
import { NormalInput, NormalSelect, NormalButton } from "@/components/common";
import { RegisterForm, EmailVerification } from "@/components/pages";
import { useRouter } from "next/router";
import { connect } from "react-redux";

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
    <>
      <Head>
        <title>Acquiring | Sign-up</title>
        <meta name="title" content="Acquiring | Sign-up" />
        <meta
          name="description"
          content="By registering on our user-friendly registration page, you will be able to discover a world of knowledge about Acquiring. Become a learner today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.acquiring.in/register" />
        <meta name="robots" content="index, follow" />
      </Head>
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
export default connect(mapStatesToProps, mapDispatchToProps)(Register);
