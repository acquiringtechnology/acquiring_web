// .module.scss


import styles from './whatOfferYou.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { NormalButton } from '../../../common'

const WhatOfferYou = (props) => {

    const offerList = [
        {
            title: "Online Streaming Courses",
            subTitle: "This is some text within a card body.",
            icon: "fa-solid fa-video"
        },
        {
            title: "LIVE Classes",
            subTitle: "This is some text within a card body.",
            icon: "fa-solid fa-tv"
        },
        {
            title: "For Corporates",
            subTitle: "This is some text within a card body.",
            icon: "fa-solid fa-search"
        }

    ]


    return (
        <section>
            <div className={`container mb-5`}>
                <div className={styles.OurCoursesCardContiner}>
                    <div className='row mb-4'>
                        <div className='col-md-12 text-center mb-4'>
                            <h4 className={styles.ourServicesTitle}>What Acquiring offers you?</h4>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <div className='row justify-content-center'>
                                {offerList?.map(({ title = '', subTitle = '', icon = '' }, i) =>
                                    <div className='col-md-6  text-center mb-4' key={i}>
                                        <div className={`card text-center ${styles.offerCard}`}>
                                            <div className={`card-body ${styles.offerCardBody}`}>
                                                <i className={`${icon} ${styles.offerCardIcon}`}></i>
                                                <h4 className={`${styles.offerCardTitle}`}>{title}</h4>
                                                {subTitle}
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12 text-md-end'>

                        <img alt='' className={`img-fluid ${styles.aboutImage}`} src='/img/offers-img.png' />
                        </div>




                    </div>


                </div>
            </div>

        </section>
    )


};

export default WhatOfferYou;