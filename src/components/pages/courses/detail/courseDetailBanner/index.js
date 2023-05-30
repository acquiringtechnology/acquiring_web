
import styles from './CourseDetailBanner.module.scss'
import { CourseCard } from '../../../../../components/pages'
export const CourseDetailBanner = () => {



    return (
        <div className={` mb-5  ${styles.courseDetailContiner}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-6 col-12'>
                        <h4 className={`mb-lg-2 mb-3 ${styles.couseTitle}`}>Frontend (ReactJS)</h4>
                        <p>Learn web development by building fast, responsive, and scalable web applications using React!</p>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12 d-md-block d-none">
                        <CourseCard isDetailBanner={true} />
                    </div>
                </div>

            </div>

        </div>
    )


}