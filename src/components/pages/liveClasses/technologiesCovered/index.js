import styles from "./technologiesCovered.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { NormalButton } from "@/components/common";
export const TechnologiesCovered = ({liveClassDetail}) => {
 

  return (
    <section className={styles.technologiesCovered}>
      <div class="container mb-5">
        <h4 className="mb-4">Technologies covered</h4>

        <Swiper
          spaceBetween={30}
          slidesPerView={4.3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
            loop={!true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
          {liveClassDetail?.techCover?.map((data, i) => (
            <SwiperSlide key={i}>
              <div className={`card mb-3 ${styles.technologiesCoveredCard}`}>
                <div
                  className={`card-body  ${styles.technologiesCoveredCardBody}`}
                >
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <img
                        className={`${styles.technologiesCoveredImg}`}
                        alt="dd"
                        src={data.img}
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4 className={styles.OurCoursesCardTitle}>
                        {data.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
