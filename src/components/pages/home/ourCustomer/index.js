// .module.scss


import styles from './ourCustomer.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
const OurCustomer = () => {


    return (
        <div className={styles.OurCoursesCardContiner}>
        <div className="container mb-5">
           
                <div className='row'>
                    <div className='col-md-12 text-center mb-4'>
                        <h4 className={styles.ourServicesTitle}>Our Customer Feedback</h4>
                        <p className={styles.ourServicesSubTitle}>ur client servicing constitutes devising and execution of a project however, we do not limit ourselves when it comes to offering a flexible solution.</p>

                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((data, i) =>
                    <SwiperSlide key={i}>

                        <div className="card mb-3">
                            <div className={`card-body text-center ${styles.servicesCardBody}`}>
                                <div className='row'>
                                    <div className='col-12 text-center'>
                                        <img className={`mb-3 rounded-circle ${styles.OurCustomerImage}`} alt='dd' src='https://certontech.com/assets/images/male.png' />
                                    </div>
                                </div>

                                <h4 className={styles.OurCoursesCardTitle}>Anvesh Balaji</h4>
                                <p className={styles.OurCoursesCardSubText}><i class="fas fa-quote-left"></i> Our unparalleled group of professionals provide adept UI/UX services that {`aren't`} about designs alone. We make design a scientific process. We combine deeper methods of heuristic evaluation to build predictability in design decisions made for digital experiences. <i class="fas fa-quote-right"></i></p>
                            </div>
                        </div>
                        {/* </div> */}

                    </SwiperSlide>

                )}
            </Swiper>

        </div>
        </div >
        // </div>
    )


};

export default OurCustomer;