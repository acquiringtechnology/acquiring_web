// .module.scss


import styles from './OurCoursesCard.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { NormalButton } from '../../../common'
import { CourseCard } from '../../../pages'
import { useRouter } from "next/router";

const OurCoursesCard = (props) => {
    const router = useRouter();

    let {
        isSwiper = true,
        isViewAllBtn=true,
        courseList
    } = props;




    return (
        <div className={`${!isSwiper ? 'container' : "container-fluid "} container-fluid mt-5 mb-5`}>
            <div className={styles.OurCoursesCardContiner}>
                {<div className='row'>
                    <div className='col-md-12 text-center mb-4'>
                        <h4 className={styles.ourServicesTitle}>Our Online Courses</h4>
                        <p className={styles.ourServicesSubTitle}>We are focused on understanding client’s business first, and dedicated to solve their business problems.</p>

                    </div>
                </div>}
                {isSwiper ? <Swiper
                    spaceBetween={30}
                    slidesPerView={4.5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {courseList?.map((data, i) =>
                        <SwiperSlide key={i}>
                            <CourseCard />
                        </SwiperSlide>

                    )}
                </Swiper> :
                    <div className='row'>
                        {courseList?.map((data, i) =>
                            <div className="col-md-4 mb-3" key={i}>
                                <CourseCard courseData={data} />
                            </div>
                        )}
                    </div>
                }

                {isViewAllBtn && <div className='row'>
                    <div className='col-md-12 text-center mb-4'>
                        <NormalButton  onClick={() => router.push("/courses")} className={`btn-primary ${styles.viewMoreBtn}`} title={<span>View All Courses <i className="fa-solid fa-arrow-up-right-from-square"></i></span>} />
                    </div>
                </div>}

            </div>
        </div>
        // </div>
    )


};

export default OurCoursesCard;