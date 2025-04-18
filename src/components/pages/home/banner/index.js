/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./banner.module.scss";
import PropTypes from "prop-types";
import { TextTypingEffect } from "@/components/common";
import { useRouter } from "next/router";
const Banner = ({ title, description, bannerImage, isBannerBtn = true }) => {
  const router = useRouter();
  return (
    <section className={`${styles.bannerSection} ${styles["banner-bg"]}`}>
      <div className={`${styles["grid-overlay"]}`}></div>
      <div class="container h-100">
        <div className={`h-100 ${styles.bannerContiner}`}>
          <div className="row h-100 align-items-center">
            <div className="col-lg-7 mb-3 mt-lg-0 mb-lg-0 mt-5 h-100 d-flex align-items-center justify-content-center">
              <div className={styles.bannerTitleContiner}>
                <h4 className={styles.bannerTitle}>{title}</h4>
                <TextTypingEffect />
                <p className={`text-white ${styles.bannerSubtext}`}>
                  {description}
                </p>

                {/* {isBannerBtn && (
                  <>
                    <NormalButton
                      className={`btn-primary me-3 ${styles.joinCourseBtn}`}
                      title="Join LIVE Classes"
                      onClick={()=>router.push('/liveClasses')}
                    />
                    <NormalButton
                      className={`btn-outline-primary ${styles.joinCourseBtn}`}
                      title="View All Courses"
                      onClick={()=>router.push('/courses')}
                    />
                  </>
                )} */}
              </div>
            </div>
            <div className="col-lg-5  h-100 d-flex align-items-center justify-content-center">
              {/* <div className={`img-fluid  ${styles["mern-banner"]}`}> */}
              {/* <img
                  className={`img-fluid  ${styles["Student"]} ${styles["Illustration"]}`}
                  src={bannerImage}
                /> */}
              {/* <!-- Floating Tech Icons --> */}
              {/* <div className={`${styles["orbit-ring"]}`}>
                  <div className={`${styles["tech-icon"]} ${styles["html"]}`}>
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      alt="dd"
                    />
                  </div>
                  <div className={`${styles["tech-icon"]} ${styles["js"]}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  </div>
                  <div className={`${styles["tech-icon"]} ${styles["react"]}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  </div>
                  <div className={`${styles["tech-icon"]} ${styles["node"]}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  </div>
                  <div className={`${styles["tech-icon"]} ${styles["mongo"]}`}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                  </div>
                  <div
                    className={`${styles["tech-icon"]} ${styles["express"]}`}
                  >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                  </div>
                </div> */}
              {/* </div> */}
              {/* <img  className={`img-fluid ${styles.bannerImage}`} alt="bannerimage" src={bannerImage} /> */}

              <div className="language-world ms-lg-auto">
                <div class="world">
                  <img src={bannerImage} alt="" />
                </div>
                <div class="flages">
                  <div class="flag" tabindex="0">
                    <img
                      src="/img/html.png"
                      alt=""
                    />
                  </div>
                  <div class="flag" tabindex="0">
                    <img
                      src="/img/css.png"
                      alt=""
                    />
                  </div>
                  <div class="flag" tabindex="0">
                    <img
                     src="/img/js.png"
                      alt=""
                    />
                  </div>
                  <div class="flag" tabindex="0">
                    <img
                    src="/img/angular.png"
                      alt=""
                    />
                  </div>
                  <div class="flag" tabindex="0">
                    <img
                      src="/img/react.png"
                      alt=""
                    />
                  </div>
                  <div class="flag" tabindex="0">
                    <img
                     src="/img/redux.png"
                      alt=""
                    />
                  </div>
                  <div class="flag" tabindex="0">
                    <img
                     src="/img/nodejs_js.png"
                      alt=""
                    />
                  </div>
                  <div class="flag" tabindex="0">
                    <img
                       src="/img/express-js.png"
                      alt=""
                    />
                  </div>
                  <div class="flag" tabindex="0">
                    <img
                      src="/img/mongodb.svg"
                      alt=""
                    />
                  </div>
                  <div class="flag" tabindex="0">
                    <img
                    src="/img/git.png"
                      alt=""
                    />
                  </div>
                  <div class="flag" tabindex="0">
                    <img
                      src="/img/postman.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  bannerImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
