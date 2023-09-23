import styles from "./banner.module.scss";
import PropTypes from "prop-types";
import { NormalButton } from "@/components/common";
import { useRouter } from "next/router";
const Banner = ({ title, description, bannerImage, isBannerBtn = true }) => {
  const router = useRouter();
  return (
    <section>
      <div class="container h-100  mb-5">
        <div className={styles.bannerContiner}>
          <div className="row h-100 align-items-center">
            <div className="col-md-6 mb-sm-3 h-100 d-flex align-items-center justify-content-center">
              <div className={styles.bannerTitleContiner}>
                <h4 className={styles.bannerTitle}>{title}</h4>
                <p>{description}</p>
                {isBannerBtn && (
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
                )}
              </div>
            </div>
            <div className="col-md-6 h-100 ">
              <img
                className={`img-fluid ${styles.bannerImage}`}
                src={bannerImage}
              />
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
