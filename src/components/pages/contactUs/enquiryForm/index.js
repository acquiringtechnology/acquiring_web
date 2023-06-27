const { Fragment } = require("react");
import styles from "./enquiryForm.module.scss";
import { NormalInput, NormalSelect, NormalButton } from "@/components/common";
import { COURSE_LIST } from "@/services/constants";

export const EnquiryForm = ({ fromPage = false }) => {
  return (
    <div className={` mb-5 ${styles.enquiryFormontainer}`}>
      <div className="card border-0 shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <h4 className={`mb-3 ${styles.title}`}>Start Your Career Now</h4>
            </div>
            <div className="col-md-12">
              <NormalInput title="Name" />
            </div>
            <div className="col-md-12">
              <NormalInput title="Email Address" />
            </div>
            <div className="col-md-12">
              <NormalInput title="Mobile Number" />
            </div>
            {fromPage !== "liveClass" && (
              <div className="col-md-12 mb-2">
                <NormalSelect title="Course Preference" options={COURSE_LIST} />
              </div>
            )}
            <div className="col-md-12">
              {/* <button type="button" className="btn btn-primary">Submit</button> */}
              <NormalButton
                className="btn btn-primary px-4"
                type="submit"
                title="Submit"
              />
            </div>
          </div>
        </div>

        {/* <div className='col-4'>
                    <h4 className={styles.title}>Find Us</h4><hr />
                    <p className={styles.subTitle}><i className="fa-solid fa-house"></i> 197, Lakshmi Towers,
                        First Main Road, Nehru Nagar,
                        Rajiv Gandhi Salai – OMR,
                        Kottivakkam, Chennai – 600 096.</p>
                        <p className={styles.subTitle}><i className="fa-solid fa-phone"></i> +91 44 xxx 0055</p>
                        <a className={styles.subTitle}><i className="fa-solid fa-envelope"></i>enquiry@rvsbgroup.com</a>

                </div> */}
      </div>
    </div>
  );
};
