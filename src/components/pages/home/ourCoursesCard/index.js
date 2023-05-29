// .module.scss


import styles from './OurCoursesCard.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { NormalButton } from '../../../common'

const OurCoursesCard = (props) => {


    let {
        isSwiper = true
    } = props;


    return (
        <div className={`${!isSwiper ? 'container' : "container-fluid "} container-fluid mt-5 mb-5`}>
            <div className={styles.OurCoursesCardContiner}>
                {<div className='row'>
                    <div className='col-md-12 text-center mb-4'>
                        <h4 className={styles.ourServicesTitle}>Our Courses</h4>
                        <p className={styles.ourServicesSubTitle}>We are focused on understanding client’s business first, and dedicated to solve their business problems.</p>

                    </div>
                </div>}
                {isSwiper ? <Swiper
                    spaceBetween={30}
                    slidesPerView={4.5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((data, i) =>
                        <SwiperSlide key={i}>

                            <div className="card shadow border-0 mb-3">

                                <div className={`card-body ${styles.servicesCardBody}`}>
                                    <img className='mb-3' src='https://certontech.com/assets/images/element/online.svg' />
                                    <h4 className={styles.OurCoursesCardTitle}>UI/UX & DESIGN THINKING</h4>
                                    <p className={styles.OurCoursesCardSubText}>Our unparalleled group of professionals provide adept UI/UX services that {`aren't`} about designs alone. We make design a scientific process. We combine deeper methods of heuristic evaluation to build predictability in design decisions made for digital experiences.</p>
                                </div>
                            </div>
                            {/* </div> */}

                        </SwiperSlide>

                    )}
                </Swiper> :
                    <div className='row'>
                        {[1, 2, 3, 4, 5].map((data, i) =>
                            <div className="col-md-4 mb-3" key={i}>

                                <div className={`card shadow border-0 ${styles.servicesCard}`} key={i}>
                                    <img class={`card-img-top ${styles.servicesCardImage}`} src="/img/coading.avif" alt="Card image cap" />
                                    <div className={`card-body ${styles.servicesCardBody}`}>
                                        {/* <img className='mb-3' src='https://certontech.com/assets/images/element/online.svg' /> */}
                                        <h4 className={styles.OurCoursesCardTitle}>UI/UX & DESIGN THINKING</h4>
                                        <p className={styles.OurCoursesCardSubText}>Our unparalleled group of professionals </p>
                                        <button type="button" className={`btn btn-primary btn-lg btn-block w-100 ${styles.servicesCardButton}`}>View Detail</button>
                                    </div>
                                </div>
                            </div>


                        )}

                    </div>
                }

                {<div className='row'>
                    <div className='col-md-12 text-center mb-4'>
                        <NormalButton className={`btn-primary ${styles.viewMoreBtn}`} title={<span>View All Courses <i className="fa-solid fa-arrow-up-right-from-square"></i></span>} />

                    </div>
                </div>}

            </div>
        </div>
        // </div>
    )


};

export default OurCoursesCard;