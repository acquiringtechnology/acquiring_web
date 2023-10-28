import styles from "./leadership.module.scss";

export const Leadership = () => {
  return (
    <div className={styles.leadershipContainer}>
      <div className={`container  mt-5 mb-5 h-100`}>
        {/* <h4></h4> */}
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-12 text-center mb-4">
            <h4 className={styles.leadershipTitle}>Leadership</h4>
          </div>
        </div>
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
            <div className={`${styles.imageContainer} `}>
              <img
                src={"/img/acquiring_founder.png"}
                alt="Anvesh Babu"
                title="Anvesh Babu"
                loading="lazy"
                className="w-100"
              />
              <div class={styles.imageName}>
                <h3>Mr. Anvesh Babu</h3>
                <h4>Founder</h4>
              </div>
            </div>
            {/* <h4 className={styles.leadershipTitle}>Leadership</h4> */}
          </div>
          {/* <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
            <div className={styles.imageContainer}>
              <img
                src={"/img/mirsha.png"}
                alt="Mirsha"
                title="Mirsha"
                loading="lazy"
                className="w-100"
              />
              <div class={styles.imageName}>
                <h3>Mr. Mirsha</h3>
                <h4>Co-Founder</h4>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
