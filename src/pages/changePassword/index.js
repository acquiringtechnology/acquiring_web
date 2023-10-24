import Link from "next/link";
import Head from "next/head";
import { AuthLayout } from "@/layout/authLayout";
import { NormalInput, NormalSelect, NormalButton } from "@/components/common";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { bindActionCreators } from "redux";
import * as authenticateAction from "@/redux/action/authenticate";
import { getStorage } from "@/services/helperFunctions";
import { EXIST_LOCAL_STORAGE, USER_TYPE } from "@/services/constants";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const ForgotPassword = ({ changePassword }) => {
  const router = useRouter();
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState(0);
  const [isFormLoder, setIsFormLoder] = useState(false);
  const [forgatFormObj, setForgatFormObjj] = useState({
    currentPassword: "",
    oldPassword: "",
  });

  const handleInputChange = (event) => {
    const {
      target: { value, checked, type, name },
    } = event;
    setForgatFormObjj({
      ...forgatFormObj,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      const formValid = validator.current.allValid();
      if (formValid) {
        setIsFormLoder(true);
        const currentUserData =
        getStorage(EXIST_LOCAL_STORAGE.CURRENT_USER)? JSON.parse(getStorage(EXIST_LOCAL_STORAGE.CURRENT_USER)):{};
        const body = {
          email: currentUserData.email ? currentUserData?.email : "",
          ...forgatFormObj,
        };
        const changePasswordReq = await changePassword(body);
        const { status } = changePasswordReq;
        if (status) {
          router.push("/");
        }
        console.log("changePassword--------->", status);
        setIsFormLoder(false);
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {
      setIsFormLoder(false);
      // consol e.log(e);
    }

    //
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
            <h3>Change Password</h3>
            {/* <p>The new wave of AI Learning that adapts to the future</p> */}
          </div>
        </div>

        <div className="d-flex flex-column mt-4">
          <div className="row">
            <div className="col-md-12">
              <NormalInput
                title="Old Password"
                onChange={handleInputChange}
                name="oldPassword"
                errorMessage={validator.current.message(
                  "old Password",
                  forgatFormObj.oldPassword,
                  "required"
                )}
              />
            </div>
            <div className="col-md-12">
              <NormalInput
                title="Conform Password"
                onChange={handleInputChange}
                name="currentPassword"
                errorMessage={validator.current.message(
                  "Conform Password",
                  forgatFormObj.currentPassword,
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
                onClick={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

const mapStatesToProps = ({
  authenticate: { isChangePasswordLoader = false },
}) => {
  return { isChangePasswordLoader };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ...authenticateAction,
    },
    dispatch
  );
};
export default connect(mapStatesToProps, mapDispatchToProps)(ForgotPassword);
