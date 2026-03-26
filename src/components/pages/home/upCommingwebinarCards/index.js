// .module.scss

import styles from "./upCommingWebinar.module.scss";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { connect } from "react-redux";
import moment from "moment";
import { bindActionCreators } from "redux";
import * as webinarAction from "@/redux/action/webinear";
import { setStorage } from "@/services/helperFunctions";
import { EXIST_LOCAL_STORAGE } from "@/services/constants";
import { useEffect } from "react";
import { NodataFound } from "@/components/common";

const UpcommingWebinarsCards = ({
  isViewAll = false,
  getAllWebinear,
  webinarList = [],
  isWebinarListLoader = false,
  fromPage = "",
}) => {
  const router = useRouter();

  useEffect(() => {
    // getAllWebinear();
  }, []);

  const handleGetDiffMid = (fromD, toDat) => {
    let date1 = moment(toDat);
    let date2 = moment(fromD);
    return date1.diff(date2, "m");
  };

  const handleRouteDetailPage = (data) => {
    // setStorage(EXIST_LOCAL_STORAGE.WEBINAR_DETAIL, JSON.stringify(data));
    // router.push(`/webinars/details/${data.id}`);
    router.push(`/webinars/details/1`);
  };

  const handleShowUpCommingWebinarList = (data) => {
    const res = data.filter(({ sDate }) => moment(sDate) >= moment());
    return res.length > 0 ? res.slice(0, 4) : [];
  };

  return (
    <section>
      {/* {  handleShowUpCommingWebinarList(webinarList).length>0 && !isWebinarListLoader &&<div className={`container mb-5`}> */}
      {
        <div className={`container`}>
          <div className={styles.upCommingWebinarsContiner}>
            <div className="row mb-4">
              <div className="col-md-12  mb-4">
                <p className={styles.subTitle}>— LIVE EXPERT SESSIONS</p>

                <h2 className={styles.mainTitle}>
                  Upskill with <br />
                  <span className={styles.highlight}>Acquiring Technology</span>
                </h2>

                <p className={styles.description}>
                  AI guidance, live expert sessions, and career-focused learning
                  — all combined to help you grow faster and land the roles you
                  want.
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className={styles.figmaCard}>
                  {/* Grid overlay */}
                  <div className={styles.gridOverlay}></div>

                  <div className={styles.headerSection}>
                    {/* Left */}
                    <div className={styles.headerLeft}>
                      <span className={styles.badge}>FREE MASTERCLASS</span>

                      <h3 className={styles.title}>
                        MASTER <span>MERN STACK</span> <br />
                        BUILD FULL-STACK <br />
                        APPS FROM SCRATCH
                      </h3>
                    </div>

                    {/* Right */}
                    <div class="d-flex flex-column-reverse">
                      <div className={styles.speakerCard}>
                        <strong>Anvesh Babu</strong>
                        <p>Full Stack Engineer</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={styles.divider}></div>

                  {/* Date */}
                  <div className={styles.dateRow}>
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>Thu, Mar 5 · 6:00 – 7:00 PM</span>
                  </div>

                  {/* Description */}
                  <p className={styles.description}>
                    Master the MERN stack by building real-world full-stack
                    applications using MongoDB, Express, React, and Node.js.
                    Learn API development, authentication, and deployment
                    strategies used by modern tech companies to build scalable
                    web products.
                  </p>

                  {/* Footer */}
                  <div className={styles.footer}>
                    <div className={styles.users}>
                      <span>S</span>
                      <span>A</span>
                      <span>F</span>
                      <p>52 registered</p>
                    </div>

                    <button
                      className={styles.cta}
                      onClick={() => handleRouteDetailPage("1")}
                    >
                      VIEW MORE
                    </button>
                  </div>
                </div>
              </div>
              {/* {handleShowUpCommingWebinarList(webinarList)?.map((data, i) => (
                <div className="col-md-3" key={i}>
                  <div className="card border-0 shadow mb-5">
                    <img
                      src={data.cardImg}
                      className="card-img-top"
                      alt={data.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>

                      <div className="text-muted mb-2 w-100">
                        <span>
                          {" "}
                          <i className="fa-regular fa-clock"></i>
                          <p className="d-inline mx-2">
                            {handleGetDiffMid(data.sDate, data.eDate)} Mins
                          </p>
                        </span>
                        <a
                          href="#"
                          className="float-end"
                          onClick={() => handleRouteDetailPage(data)}
                        >
                          Register Now
                        </a>
                      </div>

                    
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
            {!isViewAll &&
              handleShowUpCommingWebinarList(webinarList).length > 4 && (
                <div className="row mb-4">
                  <div className="col-md-12 text-center mb-4">
                    <button
                      onClick={() => router.push("/webinars")}
                      type="button"
                      className={`btn btn-primary btn-lg  ${styles.servicesCardButton}`}
                    >
                      View All webinars
                    </button>
                  </div>
                </div>
              )}
          </div>
        </div>
      }

      {/* { webinarList.length===0 && !isWebinarListLoader &&  isViewAll && <NodataFound title="Keep a lookout for our webinars, they're coming soon"  subTitle="You can go to back by clicking below button"/>} */}

      {/* <h4> </h4> */}
      {/* </div>
      </div> */}
    </section>
  );
};

const mapStatesToProps = ({
  webinar: { isWebinarListLoader = false, webinarList = [] },
}) => {
  return { isWebinarListLoader, webinarList };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ...webinarAction,
    },
    dispatch,
  );
};
export default connect(
  mapStatesToProps,
  mapDispatchToProps,
)(UpcommingWebinarsCards);
