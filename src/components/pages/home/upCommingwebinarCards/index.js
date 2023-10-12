// .module.scss

import styles from "./upCommingWebinar.module.scss";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const UpcommingWebinarsCards = ({ isViewAll = false }) => {
  const router = useRouter();
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((data, i) => (
              <SwiperSlide key={i}>
                <div className="card border-0 shadow mb-5">
                  <img
                    src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/051/332/original/MB_%2813%29.webp?1695970116"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      How to become a MERN Stack Developer
                    </h5>

                    <div className="text-muted mb-2 w-100">
                      <span>
                        {" "}
                        <i className="fa-regular fa-clock"></i>
                        <p className="d-inline mx-2">58 Mins</p>
                      </span>
                      <a href="#" className="float-end">
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
                  onClick={() => router.push('/webinars')}
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

  JSON.stringify
};

export default UpcommingWebinarsCards;
