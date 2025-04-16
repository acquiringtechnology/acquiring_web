


import styles from './liveClass.module.scss';
import { NormalButton } from '@/components/common'
export const LiveClassBanner = (props) => {

    return (
        <section>
            <div class="container mb-5 h-100">
                <div className={styles.bannerContiner}>


                <div className="row h-100 align-items-center">
                        <div className="col-md-6 h-100 d-flex align-items-center justify-content-center">

                            <div className={styles.bannerTitleContiner}>
                                <h4 className={`mb-5 ${styles.bannerTitle}`}>{props?.title}</h4>
                                <ul>
                                    <li>100% Job Assistance Support.</li>
                                    <li> Mentors from Top Global Product companies.</li>
                                    <li>A Portfolio of Real-world Projects.</li>
                                    <li>Globally Recognized Certification.</li>
                                </ul>
                                <p>Work on real-world projects, learn from top tech leaders, and confidently launch your career in technology.</p>
                                <p>Live Classes available in <strong>தமிழ்</strong> </p>
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