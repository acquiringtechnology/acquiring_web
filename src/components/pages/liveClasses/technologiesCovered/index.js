import styles from "./technologiesCovered.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { NormalButton } from "@/components/common";
export const TechnologiesCovered = (props) => {
  let topic = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
      name: "HTML",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      name: "CSS",
    },
    {
      img: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      name: "bootstrap",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      name: "JavaScript",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      name: "React JS",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
      name: "Angular",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
      name: "Node Js",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
      name: "Node Js",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
      name: "Node Js",
    },
    {
      img: "https://cdn.iconscout.com/icon/free/png-512/free-npm-226037.png?f=avif&w=256",
      name: "NPM",
    },
  ];

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
          {topic.map((data, i) => (
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
