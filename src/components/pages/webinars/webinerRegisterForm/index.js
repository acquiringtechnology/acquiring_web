import { NormalInput , NormalButton } from "@/components/common";
import styles from "./webinarRegisterForm.module.scss";

export const WebinarsRegisterForm = () => {
  return (
    <div className={styles.webinarsRegisterFormContiner}>
      <div className="card border-0 shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <h4 className={`mb-3 ${styles.title}`}>Register NOW!</h4>
            </div>

            <div className="col-md-12">
              <NormalInput
                title="Name"
                // onChange={handleInputChange}
                name="name"
                // value={courseEnquiryFormObj.name}
                // errorMessage={validator.current.message(
                //   "Name",
                //   courseEnquiryFormObj.name,
                //   "required"
                // )}
              />
            </div>
            <div className="col-md-12">
              <NormalInput
                title="Email"
                // onChange={handleInputChange}
                name="email"
                // value={courseEnquiryFormObj.name}
                // errorMessage={validator.current.message(
                //   "Name",
                //   courseEnquiryFormObj.name,
                //   "required"
                // )}
              />
            </div>
            <div className="col-md-12">
              <NormalInput
                title="Mobile number"
                name="phone"
                type="number"
                inputGroup={true}
                inputGroupRightText="+91"
                // onChange={handleInputChange}

                // value={courseEnquiryFormObj.name}
                // errorMessage={validator.current.message(
                //   "Name",
                //   courseEnquiryFormObj.name,
                //   "required"
                // )}
              />
            </div>
            <div className="col-md-12">
              {/* <button type="button" className="btn btn-primary">Submit</button> */}
              <NormalButton
                className="btn btn-primary px-4"
                type="submit"
                title="Submit"
                // isLoader={isFormLoder}
                // onClick={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
