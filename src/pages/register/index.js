import Link from "next/link";

import { AuthLayout } from "@/layout/authLayout";
import { NormalInput, NormalSelect, NormalButton } from "@/components/common";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authAction from '@/redux/action/authenticate';

export default function register() {
  return (
    <AuthLayout>
      <div className="d-flex flex-row align-items-center">
        <img className="p-4 w-50" src={"/logo.svg"} alt="" />{" "}
      </div>
      <div className="d-flex">
        <div className="mt-4">
          <h3>Sign up</h3>
          <p>Start Managing your Learners from one place</p>
        </div>
      </div>

      <div className="d-flex flex-column mt-4">
        <div className="row">
          <div className="col-md-12">
            <NormalInput title="First Name" />
            <span className="form-text text-priamry">
              *This name will appear in certificates.
            </span>
          </div>
          <div className="col-md-12">
            <NormalInput title="Last Name" />
          </div>
          <div className="col-md-12">
            <NormalInput title="Email address" />
          </div>

          <div className="col-md-12">
            <NormalInput title="Password" />
          </div>
          <div className="col-md-12">
            <NormalInput title="Mobile number" />
          </div>
          <div className="col-md-12">
            <NormalButton
              className="btn btn-primary px-4 w-100"
              type="submit"
              title="Submit"
            />
          </div>
          <div className="col-md-12">
          <hr/>
            <p>
              Already registered User? <Link href="signIn">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}


