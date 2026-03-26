import { WebinarsRegisterForm } from "@/components/pages/webinars";
import styles from "./aboutWebinar.module.scss";
export const AboutWebinar = ({
  webinarDetails = {},
  createWebinearEnrolled,
  webinearEnrolledOtpResend,
  webinearEnrolledOtpVerify,
}) => {
  return (
    <div className={`container ${styles.aboutWebinarContiner}`}>
      <div className="row">
        <div className="col-md-8">
          <div className={styles.leftSection}>
            {/* ABOUT */}
            <div className={styles.section}>
              <div className={styles.sectionTitle}>ABOUT THIS MASTERCLASS</div>

              <h4 className={styles.mainHeading}>
                MASTER THE MERN STACK: BUILD SCALABLE FULL-STACK APPLICATIONS
              </h4>

              <p className={styles.detailText}>
                Learn how to build modern, scalable web applications using the
                MERN stack — MongoDB, Express, React, and Node.js. This session
                will give you a practical understanding of how real-world
                full-stack systems are designed, developed, and deployed in
                today’s tech industry.
              </p>
            </div>

            {/* WHAT YOU’LL LEARN */}
            <div className={styles.section}>
              <div className={styles.sectionTitle}>WHAT YOU’LL LEARN</div>

              <div className={styles.listItem}>
                <span className={styles.check}>✔</span>
                <p>
                  How to structure and build full-stack applications using MERN
                </p>
              </div>

              <div className={styles.listItem}>
                <span className={styles.check}>✔</span>
                <p>Designing REST APIs with Node.js and Express</p>
              </div>

              <div className={styles.listItem}>
                <span className={styles.check}>✔</span>
                <p>State management and component architecture in React</p>
              </div>

              <div className={styles.listItem}>
                <span className={styles.check}>✔</span>
                <p>
                  Working with MongoDB for efficient data storage and queries
                </p>
              </div>

              <div className={styles.listItem}>
                <span className={styles.check}>✔</span>
                <p>
                  Authentication, deployment, and best practices in real-world
                  projects
                </p>
              </div>
            </div>

            {/* SPEAKER */}
            <div className={styles.section}>
              <div className={styles.sectionTitle}>ABOUT THE SPEAKER</div>

              <div className={styles.speakerCard}>
                <div className={styles.speakerHeader}>
                  <div className={styles.avatar}>A</div>
                  <div>
                    <strong>Anvesh Babu</strong>
                    <p>Senior MERN Stack Developer</p>
                  </div>
                </div>

                <p className={styles.speakerDesc}>
                  Harish is a full-stack engineer with extensive experience in
                  building scalable web applications using the MERN stack. He
                  has worked on production-grade systems, helping startups and
                  enterprises design robust architectures, optimize performance,
                  and deliver high-quality user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <WebinarsRegisterForm
            webinarId={webinarDetails?.id}
            webinearEnrolledOtpResend={webinearEnrolledOtpResend}
            createWebinearEnrolled={createWebinearEnrolled}
            webinearEnrolledOtpVerify={webinearEnrolledOtpVerify}
          />
        </div>
      </div>
    </div>
  );
};
