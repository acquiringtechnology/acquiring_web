// .module.scss

import styles from "./upCommingWebinar.module.scss";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { connect } from "react-redux";
import moment from 'moment';
import { bindActionCreators } from "redux";
import * as webinarAction from "@/redux/action/webinear";
import {setStorage} from "@/services/helperFunctions";
import {EXIST_LOCAL_STORAGE} from "@/services/constants";
import { useEffect } from "react";

const UpcommingWebinarsCards = ({ isViewAll = false, getAllWebinear ,webinarList=[] }) => {
  const router = useRouter();

  useEffect(() => {
    getAllWebinear();
  }, []);

const handleGetDiffMid=(fromD,toDat)=>{
  let date1 = moment( toDat);
  let date2 = moment(fromD);
  return date1.diff(date2, 'm') 
};


const handleRouteDetailPage=(data)=>{

  setStorage(EXIST_LOCAL_STORAGE.WEBINAR_DETAIL ,JSON.stringify(data))
  router.push(`/webinars/details/${data.id}`)
}


  return (
    <section>
      <div className={`container mb-5`}>
        <div className={styles.upCommingWebinarsContiner}>
          <div className="row mb-4">
            <div className="col-md-12 text-center mb-4">
              <h4 className={styles.upCommingWebinarsTitle}>
                Upcomming Webinars
              </h4>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-md-3"> */}
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            // loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            //modules={[Autoplay]}
          >
            {webinarList?.map((data, i) => (
              <SwiperSlide key={i}>
                <div className="card border-0 shadow mb-5">
                  <img
                    src={data.cardImg}
                    className="card-img-top"
                    alt={data.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {data.title}
                    </h5>

                    <div className="text-muted mb-2 w-100">
                      <span>
                        {" "}
                        <i className="fa-regular fa-clock"></i>
                        <p className="d-inline mx-2">{handleGetDiffMid(data.sDate ,data.eDate)} Mins</p>
                      </span>
                      <a href="#" className="float-end" onClick={()=>handleRouteDetailPage(data)}>
                        Register Now
                      </a>
                    </div>

                    {/* </p> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {!isViewAll && (
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
      {/* </div>
      </div> */}
    </section>
  );
};

const mapStatesToProps = ({
  Webinar: { isWebinarListLoader = false, webinarList = [] },
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
