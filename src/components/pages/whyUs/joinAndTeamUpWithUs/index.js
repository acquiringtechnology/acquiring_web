import styles from "./joinAndTeamUpWithUs.module.scss";

export const JoinAndTeamUpWithUs = () => {
  return (
    <div className={styles.joinAndTeamUpWithUsContainer}>
      <div className={`container  mt-5 mb-5 h-100`}>
        <div className="row">
          <div className="col-md-12">
            <h4 className={styles.joinAndTeamUpWithUsTitle}>Join & Team Up with Us</h4>
            <p>Want to be a part of dedicated team that aims to upskill everyone across the globe?</p>
          </div>

          <div className="col-md-6">
            <h4 >Join us to make an impact! </h4>
            <p>Welcoming to hire professionals for Technical Development, Graphic Design, Digital Marketing, Sales, & Industry experts across various domains.</p>
          </div>
          <div className="col-md-12">
            <h4 >Send your updated CV & resume to hr@acquiring.in </h4>
            {/* <p>Welcoming to hire professionals for Technical Development, Graphic Design, Digital Marketing, Sales, & Industry experts across various domains.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
