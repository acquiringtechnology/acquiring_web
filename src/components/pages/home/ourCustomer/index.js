// .module.scss

import styles from "./ourCustomer.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
const OurCustomer = () => {
  const review = [
    {
      name: "K Bhupathireddy",
      detail:
        "I would like to express my gratitude for your workshop. You have a remarkable way of teaching and elucidating concepts. I feel motivated by you and your commitment to help others develop. You are admirable and I value your time and effort. Thank you very much, sir. You are excellent! #helpminde",
    },
    {
      name: "imman jeba",
      detail: `Acquiring technology is best teaching I ever seen,  Acquiring technology have best lecturer in technology side, they have good technical skill,

            I attend the class through online,
            One of the best session I ever seen,
            Fresher can easily learn through this online class 👍.
            
            My suggestion is you can start with Acquiring technology, you can definitely have good career path in your life♥️`,
    },
    {
      name: "Nandha Kumar",
      detail: `Acquiring technology la full stack padicha . Adhulaum React oda basic la erundu advance stage vera ellam methods and short cuts soli kuduthanga . Neriya task and mock interviews conduct panaga . Evlo kami fees la neriya knowledge gain pana . Thanks acquiring and team`,
    },
    {
      name: "Arunachalam",
      detail: `Thanks Acquiring Team good technology for learning i learned full stack course ( front-end  I learned angular and backend i learned python )they teached every basics with multiple examples Thanks Acquiring Team`,
    },
    {
      name: "Jaya Shree",
      detail: `Acquiring technology la full stack padicha . Adhulaum React oda basic la erundu advance stage vera ellam methods and short cuts soli kuduthanga . Neriya task and mock interviews conduct panaga . Evlo kami fees la neriya knowledge gain pana . Thanks acquiring and team`,
    },
    {
      name: "aspirent ak",
      detail: `Coaching is good..It is really helpful to reach my goal.Thankyou Acquiring technology`,
    },
  ];

  const handleGetFirstLeater = (name) => {
    try {
      var initials = name?.charAt(0);
      return initials;
    } catch (e) {}
  };
  return (
    <div className={styles.OurCoursesCardContiner}>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h4 className={styles.ourServicesTitle}>Our Students  Feedback</h4>
            {/* <p className={styles.ourServicesSubTitle}>
              ur client servicing constitutes devising and execution of a
              project however, we do not limit ourselves when it comes to
              offering a flexible solution.
            </p> */}
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {review.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="card mb-3">
                <div
                  className={`card-body ${styles.servicesCardBody}`}
                >
                  <div className="row">
                    <div className="col-12 mb-3">
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0">
                          <label className={styles.studentName}>
                            {handleGetFirstLeater(data.name)}
                          </label>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h4 className={`${styles.OurCoursesCardTitle} mb-0`}>
                            {data.name}
                          </h4>
                          <img src="/img/Stars.png" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className={styles.OurCoursesCardSubText}>
                    <i class="fas fa-quote-left"></i> {data.detail}{" "}
                    <i class="fas fa-quote-right"></i>
                  </p>
                </div>
              </div>
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    // </div>
  );
};

export default OurCustomer;
