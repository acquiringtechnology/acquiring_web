import {WebinarsRegisterForm} from '@/components/pages/webinars'
import styles from "./aboutWebinar.module.scss";

export const AboutWebinar = ({ bannerImage = "" }) => {
  return (
    <div className={`container ${styles.aboutWebinarContiner}`}>
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-5">
            <div className="col-md-12">
              <h4>Low-Level Design of Payment apps</h4>
              <p className={styles.detailWeb}>
                <span className="me-2">
                  <strong>STARTS ON: </strong> October 12, 2023 7:30 PM (IST)
                </span>
                <span className="me-2">
                  <strong>ENDS ON: </strong> October 12, 2023 7:30 PM (IST)
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
              <p className={styles.detailWeb}>
                Payment apps have reshaped the way consumers approach
                transactions today. Gone are the days of carrying cash, change
                or worrying about soiled currencies. With one tap on your phone,
                you can settle transactions within a few seconds. But do you
                ever find yourself wondering how these apps work so seamlessly?
                What is the design concept behind these apps? Don’t worry this
                session has the answers you’re looking for.{" "}
              </p>
              <p className={styles.detailWeb}>
                Learn how to write code that is easy to read, maintain and
                extend for Low-Level design concepts. Get ready for interview
                rounds on topics like Technical Theory, Design and Machine
                Coding. Discover how you can build a Class Diagram, Schema
                Design and tips for writing better code all in this session.{" "}
              </p>
              <p className={styles.detailWeb}>
                Attend <strong>KB. Anvesh Babu</strong> on{" "}
                <strong> October 12th, Thursday at 7:30 PM </strong> and decode
                the Low-Level Design of Payment Apps.
              </p>
              <hr />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12">
              <h4>KB Anvesh Babu (<a href='#'>LinkedIn</a>)</h4>
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
            <WebinarsRegisterForm/>

        </div>
      </div>
    </div>
  );
};
