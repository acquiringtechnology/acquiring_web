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
      name: "Sahina Barveen",
      detail: `I am learning full stack development at Acquiring Technology
Talk about teaching methods, hands-on projects, or real-world applications:
The instructors were highly knowledgeable and approachable, ensuring that every concept was clear. The real-world projects and assignments helped me gain confidence in building complete web applications from scratch." I feel elated`,
    },
    {
      name: "aspirent ak",
      detail: `Coaching is good..It is really helpful to reach my goal.Thankyou Acquiring technology`,
    },
    {
      name: "subu raaju",
      detail: `Hi...
I recently joined the Full Stack Web Developer course at Acquiring Technology, and I’m extremely pleased with my experience! The trainer is highly knowledgeable, making complex concepts easy to understand.
The availability of recorded sessions is a great advantage for self-practice.
One of the key highlights is the fee structure, which is very reasonable and offers great value for the quality of training provided.`,
    },
    {
      name: "Dinesh E",
      detail: `I studied Full Stack Development at Acquiring Technology and had a great experience. The training was well-structured, and the trainer explained concepts clearly with real-world examples. The hands-on sessions were especially helpful. Highly recommend!`,
    },
    {
      name: "Mahimai Antony",
      detail: `Im currently taking the full stack MERN course, and its been a great experience so far. The instructor (Anvesh Babu) explains concepts in a simple and clear way, making it easy to understand even for someone new to MERN. Overall, a well structured course with good support. Definitely recommend it for anyone looking to get into full-stack development.`,
    },
    {
      name: "Sahina Barveen",
      detail: `I am learning full stack development at Acquiring Technology
Talk about teaching methods, hands-on projects, or real-world applications:
The instructors were highly knowledgeable and approachable, ensuring that every concept was clear. The real-world projects and assignments helped me gain confidence in building complete web applications from scratch." I feel elated`,
    },
    {
      name: "Manikandan R",
      detail: `Hi This Manikandan. I am learning MERN Stack development course in Acquiring Technology. The training is very good and the tutor Anvesh explained each and every concept clearly in a simple way. With the help of this training, i learnt a lot about the real time experience.`,
    },
    {
      name: "Priya K",
      detail: `I joined Acquiring Technology, and it's been very useful. I've learned a lot of new things, and the concepts are easy to understand.
The way of teaching and clarifying doubts is excellent`,
    },
  ];

  const handleGetFirstLeater = (name) => {
    try {
      var initials = name?.charAt(0);
      return initials;
    } catch (e) { }
  };
  return (
    <div className={`${styles.OurCoursesCardContiner} sessectionsion-dark`}>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h4 className={styles.ourServicesTitle}>Our Students Feedback</h4>
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
          // onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            576: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
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
                <div className={`card-body ${styles.servicesCardBody}`}>
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
