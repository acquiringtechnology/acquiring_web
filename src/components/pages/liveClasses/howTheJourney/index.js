import Image from "next/image";
import styles from "./howTheJourney.module.scss";
export const HowtheJourney = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12 mb-4 ">
          <h4 className={styles['title-content']}>How will the Journey look like</h4>
        </div>
      </div>
      <div className={styles.timeline}>
        <div
          className={`${styles.timelineStep} ${styles[`step--consultation`]}`}
        >
          <div className={styles.stepTitle}>Advisory Call</div>
          <div className={styles.stepDescription}>
            Our team will schedule a call with you to address all your questions
            about the Full Stack Bootcamp.
          </div>
        </div>

        <div className={`${styles.timelineStep} ${styles[`step--slot`]}`}>
          <div className={styles.stepTitle}>Book Your slot</div>
          <div className={styles.stepDescription}>
            Book your slot now — we accept only 25 to 50 candidates per batch,
            and seats are limited.
          </div>
        </div>

        <div className={`${styles.timelineStep} ${styles[`step--kit`]}`}>
          <div className={styles.stepTitle}>
            Get Your Entry Kit Delivered to Your Doorstep.
          </div>
          <div className={styles.stepDescription}>
            Once your seat is confirmed, an Entry Kit will be sent to your
            address as a welcome gesture from Acquiring Technology.
          </div>
          {/* <div className={`${styles.stepIcon} shadow-sm`}>
            <Image
              src="https://www.errormakesclever.com/_next/static/media/entry-level-test.0469c027.svg"
              alt="Test Icon"
              width={30}
              height={30}
            />
          </div> */}
        </div>

        <div className={`${styles.timelineStep} ${styles[`step--learn`]}`}>
          <div className={styles.stepTitle}>Kick Off Your Learning</div>
          <div className={styles.stepDescription}>
            When the batch starts, you will receive access to our portal along
            with a Microsoft Teams link. Please install Microsoft Teams and log
            in using your registered email. Your mentors will be available
            there, and you can start learning immediately.
          </div>
        </div>
        <div className={`${styles.timelineStep} ${styles[`step--live-class`]}`}>
          <div className={styles.stepTitle}>Live Mentorship Sessions</div>
          <div className={styles.stepDescription}>
            Live sessions will be conducted by the respective mentors according
            to the scheduled batch timings, on weekdays or weekends as
            applicable.
          </div>
        </div>
        <div
          className={`${styles.timelineStep} ${
            styles[`step--weeklyRecognition`]
          }`}
        >
          <div className={styles.stepTitle}>Weekly Recognition</div>
          <div className={styles.stepDescription}>
            A valuable reward gift will be given weekly to the top student.
          </div>
        </div>
        <div className={`${styles.timelineStep} ${styles[`step--success`]}`}>
          <div className={styles.stepTitle}>HR Skill-Building Sessions</div>
          <div className={styles.stepDescription}>
            Our online HR sessions cover resume preparation, LinkedIn and Naukri
            profile enhancement, interview strategies, and additional career
            support.
          </div>
        </div>
        <div className={`${styles.timelineStep} ${styles[`step--internship`]}`}>
          <div className={styles.stepTitle}>Internship Qualification</div>
          <div className={styles.stepDescription}>
            Your performance over the last 90 days, combined with an interview,
            will determine your eligibility for an internship.
          </div>
        </div>
        <div
          className={`${styles.timelineStep} ${styles[`step--certificate`]}`}
        >
          <div className={styles.stepTitle}>
            Celebrate Your Success — Get Your Certificate!
          </div>
          <div className={styles.stepDescription}>
            A hard copy of your certificate will be shipped to your home upon
            program completion.
          </div>
        </div>
        <div className={`${styles.timelineStep} ${styles[`step--help`]}`}>
          <div className={styles.stepTitle}>Always Here to Help</div>
          <div className={styles.stepDescription}>
            After you join a company, we’ll remain available to support your
            ongoing growth and success.
          </div>
        </div>
      </div>
    </div>
  );
};
