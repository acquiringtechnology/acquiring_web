import { WebinarsRegisterForm } from "@/components/pages/webinars";
import styles from "./aboutWebinar.module.scss";
export const AboutWebinar = ({ webinarDetails = {}  ,createWebinearEnrolled ,webinearEnrolledOtpResend,webinearEnrolledOtpVerify}) => {
  return (
    <div className={`container ${styles.aboutWebinarContiner}`}>
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-5">
            <div className="col-md-12">
              <h4>{webinarDetails?.title || "-"}</h4>
              <p className={styles.detailWeb}>
                <span className="me-2">
                  <strong>STARTS ON: </strong> {webinarDetails?.sDate || "-"}
                </span>
                <span className="me-2">
                  <strong>ENDS ON: </strong> {webinarDetails?.eDate || "-"}
                </span>
                <span className="me-2">
                  <strong>VENUE: </strong> Online
                </span>
              </p>
              <hr />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12">
              <h4>About this Webinars</h4>
              <div dangerouslySetInnerHTML={{ __html: webinarDetails?.about}}/>
              {/* {convertStringToHTML(webinarDetails?.about || "-") } */}
              <hr />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12">
              <h4>
                KB Anvesh Babu (<a href="#">LinkedIn</a>)
              </h4>
              <ul>
                <li>Senior Product Manager & Lead Instructor, Acquiring</li>
                <li>Ex-Software Developer at Dishny</li>
                <li>Senior Product Manager & Lead Instructor, Acquiring</li>
              </ul>
              <hr />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <WebinarsRegisterForm webinarId={webinarDetails?.id} webinearEnrolledOtpResend={webinearEnrolledOtpResend} createWebinearEnrolled={createWebinearEnrolled} webinearEnrolledOtpVerify={webinearEnrolledOtpVerify}/>
        </div>
      </div>
    </div>
  );
};
