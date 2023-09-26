import Link from "next/link";
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
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const Signin = (props) => {
  const router = useRouter();
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState(0);
  const [isFormLoder, setIsFormLoder] = useState(false);
  const [loginFormObj, setLoginFormObj] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const formValid = validator.current.allValid();
      if (formValid) {
        setIsFormLoder(true);
        const { userLogin } = props;
        const loginReq = await userLogin(loginFormObj);
        setIsFormLoder(false);
        const {
          data: { token, userDetail },
        } = loginReq;
        console.log("loginReq--------->", loginReq);
        // if (status) {
        if (token && userDetail) {
          if (
            userDetail.userType === USER_TYPE.CANDIDATE &&
            !userDetail?.isEmailVerified
          ) {
            Swal.fire({
              title: "You have an unverified email",
              text: "Logging in isn't possible because your email address hasn't been verified. Check your email inbox and click the link to verify",
              icon: "warning",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {

              }
            });

            return;
          }

          setStorage(EXIST_LOCAL_STORAGE.AUTHTOKEN, token);
          setStorage(
            EXIST_LOCAL_STORAGE.CURRENT_USER,
            JSON.stringify(userDetail)
          );
          router.push("/");
        }
        // } else {
        // }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {
      setIsFormLoder(false);
      // consol e.log(e);
    }
  };

  const handleInputChange = (event) => {
    const {
      target: { value, checked, type, name },
    } = event;
    setLoginFormObj({
      ...loginFormObj,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <Head>
        <title>Acquiring | Sign-in</title>
        <meta name="description" content="Acquiring | Sign-in" />
        <meta
          name="title"
          content="With the convenient Sign-in page, you can easily access your Acquiring account. Learn more with a simple login process."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.acquiring.in/signIn/" />
        <meta name="robots" content="index, follow" />
      </Head>
      <AuthLayout>
        <div className="d-flex flex-row align-items-center">
          <img className="p-4 w-50" src={"/logo.svg"} alt="" />{" "}
        </div>
        <div className="d-flex">
          <div className="mt-4">
            <h3>Login</h3>
            <p>The new wave of AI Learning that adapts to the future</p>
          </div>
        </div>

        <div className="d-flex flex-column mt-4">
          <div className="row">
            <div className="col-md-12">
              <NormalInput
                title="Email"
                onChange={handleInputChange}
                name="email"
                errorMessage={validator.current.message(
                  "Email",
                  loginFormObj.email,
                  "required|email"
                )}
              />
            </div>
            <div className="col-md-12">
              <NormalInput
                title="Password"
                onChange={handleInputChange}
                name="password"
                type="password"
                errorMessage={validator.current.message(
                  "Password",
                  loginFormObj.password,
                  "required"
                )}
              />
            </div>
            <div className="col-md-12">
              <NormalButton
                className="btn btn-primary px-4 w-100"
                type="submit"
                title="Submit"
                isLoader={isFormLoder}
                onClick={handleLogin}
              />
            </div>
            <div className="col-md-12">
              <hr />
              <p>
                Dont have any account <Link href="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

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
export default connect(mapStatesToProps, mapDispatchToProps)(Signin);
