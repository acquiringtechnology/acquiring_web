import styles from "./ourCustomer.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useRef } from "react";

// ✅ keep static data outside component (better perf)
const reviews = [
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

// ✅ utility function
const getFirstLetter = (name = "") => name.charAt(0).toUpperCase();

const OurCustomer = () => {

  const swiperRef = useRef(null);
  return (
    <div className={styles.OurCoursesCardContiner}>
      <div className="container py-1">
        {/* Title */}
        <div className="row">
          <div className="col-md-12 mb-5 text-start">
            <div className={styles.titleWrapper}>
              <span className={styles.line}></span>
              <p className={styles.topTitle}>WHAT OUR STUDENTS SAY</p>
            </div>
          </div>
        </div>

        <Swiper
  spaceBetween={20}
  loop
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  modules={[Autoplay]}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  onMouseEnter={() => swiperRef.current?.autoplay.stop()}
  onMouseLeave={() => swiperRef.current?.autoplay.start()}
  breakpoints={{
    0: { slidesPerView: 1 },
    576: { slidesPerView: 1.2 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  }}
>
          {reviews.map(({ name, detail }, i) => (
            <SwiperSlide key={i} className="h-auto d-flex">
              <div className={`w-100 ${styles.card}`}>
                <div className={styles.cardBody}>
                  {/* Header */}
                  <div className="d-flex align-items-center mb-3">
                    <div className={styles.avatar}>{getFirstLetter(name)}</div>

                    <div className="ms-3">
                      <h6 className={styles.name}>{name}</h6>
                      <p className={styles.role}>FULL STACK WEB DEV</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className={`${styles.stars} mb-3`}>★★★★★</div>

                  {/* Content */}
                  <p className={styles.text}>
                    <span className={styles.quote}>“</span>
                    {detail}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurCustomer;
