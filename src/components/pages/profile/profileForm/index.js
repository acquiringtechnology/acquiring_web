import { useEffect, useState,useRef } from "react";
import styles from "./profileForm.module.scss";
import SimpleReactValidator from "simple-react-validator";
import { NormalInput, NormalButton } from "@/components/common";
import { EXIST_LOCAL_STORAGE, USER_TYPE } from "@/services/constants";

export const ProfileFormCard = ({ userDetails,sendUserData,isFormLoder=false }) => {
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState(0);

  const [profileForm, setProfileForm] = useState({
    name: {
      fName: "",
      lName: "",
    },
    email: "",
    phone: "",
    dob: "",
    secPhone: "",
    userType: USER_TYPE.CANDIDATE,
  });

  useEffect(() => {
    console.log(userDetails)
    setProfileForm({
      ...profileForm,
      ...userDetails,
    });
  }, [userDetails]);

  const handleInputChange = (event) => {
    const {
      target: { value, checked, type, name },
    } = event;

    if (["fName", "lName"].includes(name)) {
      setProfileForm({
        ...profileForm,
        name: {
          ...profileForm.name,
          [name]: value,
        },
      });
    } else {
      setProfileForm({
        ...profileForm,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };


  const handleProfileUpdate=()=>{

    try {
      const formValid = validator.current.allValid();
      console.log('formValid----------->',formValid)
      if (formValid) {
        sendUserData(profileForm)
      }else{
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (e) {
      // setIsFormLoder(false);
      console.log(e);
    }

  }

  return (
    <div className={styles.profileCardContiner}>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <NormalInput
                title="First Name"
                onChange={handleInputChange}
                name="fName"
                value={profileForm?.name.fName}
                errorMessage={validator.current.message(
                  "First Name",
                  profileForm.name.fName,
                  "required"
                )}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <NormalInput
                title="Last Name"
                onChange={handleInputChange}
                name="lName"
                value={profileForm?.name.lName}
              
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <NormalInput
                title="DOB"
                onChange={handleInputChange}
                  name="dob"
                type="date"
                value={profileForm?.dob}
                errorMessage={validator.current.message(
                  "DOB",
                  profileForm.dob,
                  "required"
                )}
              />
            </div>

            <div className="col-md-6 col-sm-12">
              <NormalInput
                title="Email"
                onChange={handleInputChange}
                name="email"
                disabled
                value={profileForm?.email}
                errorMessage={validator.current.message(
                  "Email",
                  profileForm.email,
                  "required|email"
                )}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <NormalInput
                title="Phone"
                onChange={handleInputChange}
                name="phone"
                value={profileForm?.phone}
                errorMessage={validator.current.message(
                  "phone",
                  profileForm.phone,
                  "required"
                )}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <NormalInput
                title="secPhone"
                onChange={handleInputChange}
                name="secPhone"
                value={profileForm?.secPhone}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <NormalButton title="Update" isLoader={isFormLoder} onClick={handleProfileUpdate} className=" btn-primary px-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
