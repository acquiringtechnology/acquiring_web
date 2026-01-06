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
import {NodataFound} from '@/components/common'

const UpcommingWebinarsCards = ({
  isViewAll = false,
  getAllWebinear,
  webinarList = [],
  isWebinarListLoader=false,
  fromPage=''
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
      {<div className={`container`}>
    <div className={styles.upCommingWebinarsContiner}>
          <div className="row mb-4">
            <div className="col-md-12 text-center mb-4">
              <h4 className={styles.upCommingWebinarsTitle}>
                {/* Upcoming Webinar{handleShowUpCommingWebinarList(webinarList)?.length>0 &&'s'} */}
                Upcoming Webinar 1
              </h4>
            </div>
          </div>

          <div className="row justify-content-center">
             <div className="col-md-3" >
                <div className="card border-0 shadow mb-5">
                  <img
                    src={'https://media.istockphoto.com/id/1332475767/photo/black-doctor-at-laptop-having-video-conference-with-colleagues-indoor.jpg?s=612x612&w=0&k=20&c=rNJ7lv4LAH3GGdjOFwU1pt2t61UDkkVtMzb9ys-UrrY='}
                    className="card-img-top"
                    alt={'React Webinar'}
                  />
                 <div className="card-body">
  <h5 className="card-title">{'React Webinar'}</h5>

  <div className="mb-2 w-100">
    <span className="d-inline-flex align-items-center text-muted">
      <i className="fa-regular fa-clock"></i>
      <p className="d-inline mx-2 mb-0" style={{color:'#fff'}}>
       {"->"} Duration - 80 Mins
      </p>
    </span>

     <hr className="my-3" />

      <div className="d-grid">
          <a
          
            href="#"
            className="btn btn-primary"
            // onClick={() => handleRouteDetailPage(data)}
            onClick={(e) => {
              e.preventDefault();
              handleRouteDetailPage('1');
            }}
          >
            Register Now
          </a>
        </div>
  </div>

  {/* </p> */}
</div>

                </div>
              </div>
            {handleShowUpCommingWebinarList(webinarList)?.map((data, i) => (
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

                    {/* </p> */}
                  </div>
                </div>
              </div>
            ))}
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
      
      </div>}

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
    dispatch
  );
};
export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(UpcommingWebinarsCards);
