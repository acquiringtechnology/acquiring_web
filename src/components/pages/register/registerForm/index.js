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

export const RegisterForm = (props) => {
  const router = useRouter();
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState(0);
  const [isFormLoder, setIsFormLoder] = useState(false);
  const [registerFormObj, setRegisterFormObj] = useState({
    name: {
      fName: "Anvesh",
      lName: "Blaji",
    },
    email: "anveshbabu@cholamsispl.com",
    password: "anvesh@123",
    phone: "9943631660",
    userType: USER_TYPE.CANDIDATE,
  });
  // {"name":{"fName":"Anvesh","lName":"Blaji"},"email":"anveshbabu@cholamsispl.com","password":"anvesh@123","phone":"9943631660","userType":3}

  const handleRegister = async () => {
    try {
      const formValid = validator.current.allValid();
      if (formValid) {
        setIsFormLoder(true);
        const { userRegister } = props;
        const registerReq = await userRegister(registerFormObj);
        setIsFormLoder(false);
        const { status } = registerReq;
        console.log("status-------------->", status);
        if (status) {
          router.push({
            pathname: '/register',
            query: { emailVerification: 'true' },
        });
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (e) {
      setIsFormLoder(false);
      console.log(e);
    }
  };

  const handleInputChange = (event) => {
    const {
      target: { value, checked, type, name },
    } = event;

    if (["fName", "lName"].includes(name)) {
      setRegisterFormObj({
        ...registerFormObj,
        name: {
          ...registerFormObj.name,
          [name]: value,
        },
      });
    } else {
      setRegisterFormObj({
        ...registerFormObj,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  return (
    <>
      <div className="d-flex">
        <div className="mt-4">
          <h3>Sign up</h3>
          <p>Start Managing your Learners from one place</p>
        </div>
      </div>

      <div className="d-flex flex-column mt-4">
        <div className="row">
          <div className="col-md-12">
            <NormalInput
              title="First Name"
              onChange={handleInputChange}
              name="fName"
              value={registerFormObj.name.fName}
              errorMessage={validator.current.message(
                'First Name',
                registerFormObj.name.fName,
                'required'
              )}
            />
            <span className="form-text text-priamry">
              *This name will appear in certificates.
            </span>
          </div>
          <div className="col-md-12">
            <NormalInput
              title="Last Name"
              onChange={handleInputChange}
              name="lName"
              value={registerFormObj.name.lName}
            />
          </div>
          <div className="col-md-12">
            <NormalInput
              title="Email address"
              onChange={handleInputChange}
              name="email"
              value={registerFormObj.email}
              errorMessage={validator.current.message(
                'Email',
                registerFormObj.email,
                'required|email'
              )} 
            />
          </div>

          <div className="col-md-12">
            <NormalInput
              title="Password"
              onChange={handleInputChange}
              name="password"
              value={registerFormObj.password}
              errorMessage={validator.current.message(
                'Password',
                registerFormObj.password,
                'required'
              )} 
            />
          </div>
          <div className="col-md-12">
            <NormalInput
              title="Mobile number"
              onChange={handleInputChange}
              name="phone"
              value={registerFormObj.phone}
              errorMessage={validator.current.message(
                'phone',
                registerFormObj.phone,
                'required'
              )} 
            />
          </div>
          <div className="col-md-12">
            <NormalButton
              className="btn btn-primary px-4 w-100"
              type="submit"
              title="Submit"
              isLoader={isFormLoder}
              onClick={handleRegister}
            />
          </div>
          <div className="col-md-12">
            <hr />
            <p>
              Already registered User? <Link href="signIn">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
