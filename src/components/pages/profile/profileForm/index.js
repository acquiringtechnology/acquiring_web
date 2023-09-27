import { useEffect, useState } from "react";
import styles from "./profileForm.module.scss";
import { NormalInput, NormalButton } from "@/components/common";
import { EXIST_LOCAL_STORAGE, USER_TYPE } from "@/services/constants";

export const ProfileFormCard = ({ userDetails }) => {
  const [profileForm, setProfileForm] = useState({
    name: {
      fName: "",
      lName: "",
    },
    email: "",
    password: "",
    phone: "",
    dob: "",
    secPhone: "",
    userType: USER_TYPE.CANDIDATE,
  });

  useEffect(() => {
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
                name="email"
                type="dob"
                value={profileForm?.dob}
              />
            </div>

            <div className="col-md-6 col-sm-12">
              <NormalInput
                title="Email"
                onChange={handleInputChange}
                name="email"
                disabled
                value={profileForm?.email}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <NormalInput
                title="Phone"
                onChange={handleInputChange}
                name="phone"
                value={profileForm?.phone}
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
              <NormalButton title="Update" className=" btn-primary px-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
