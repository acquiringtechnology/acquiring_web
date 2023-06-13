


import styles from './liveClass.module.scss';
import { NormalButton } from '@/components/common'
export const LiveClassesCard = (props) => {

    return (
        <section>
            <div class="container mb-5">
                <div className={styles.bannerContiner}>


                    <div className="row h-100 ">
                        <div className="col-md-6 h-100 d-flex align-items-center justify-content-center">

                            <div className={styles.bannerTitleContiner}>
                                <h4 className={`mb-5 ${styles.bannerTitle}`}>{props?.title}</h4>
                                <ul>
                                    <li>100% Job Placement Support.</li>
                                    <li> Mentors from Top Global Product companies.</li>
                                    <li>A Portfolio of Real-world Projects.</li>
                                    <li>Globally Recognized Certification.</li>
                                </ul>
                                <p>Live Classes available in <strong>English, தமிழ், ಕನ್ನಡ</strong> </p>
                                {/* <NormalButton className={`btn-primary me-3 ${styles.joinCourseBtn}`} title='Join LIVE Classes' />
                                <NormalButton className={`btn-outline-primary ${styles.joinCourseBtn}`} title='View All Courses' /> */}
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img className={`img-fluid ${styles.bannerImage}`} src={props?.bannerImage} />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}