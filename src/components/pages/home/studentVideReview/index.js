import styles from './studentVideReview.module.scss'

export const StudentVideoReview = () => {

    return (
        <div className={styles.studentVideoReviewContiner}>
            <div className="container mb-5">
                <div className='text-center mb-4 '>
                    <h4 className={`${styles.title}`}>Real Experiences. Real Impact.</h4>
                    <h3 className={`${styles.subTitle}`}>Our students persevered, learned, and transformed. Read their stories and get inspired to start yours!</h3>
                </div>
                <div className="row g-5 justify-content-center">
                    <div className="col-md-4">
                        {/* <div class="ratio ratio-4x3"> */}
                            <div class="card text-bg-dark border-0 rounded-5">
                                <video class="card-img">
                                    <source src='/video/feadback_1.mp4' />
                                </video>
                                <div class="card-img-overlay border-0">
                                    <div class="position-absolute bottom-0 ">
                                        <h5 class="card-title">Ranjani</h5>
                                        <p class="card-text mb-4">Front End Developer</p>
                                    </div>

                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                      

                </div>

            </div>
        </div>
    )
}