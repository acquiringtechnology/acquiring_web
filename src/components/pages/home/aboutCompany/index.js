
import styles from './aboutCompany.module.scss';
import { NormalButton } from '@/components/common'
const AboutCompany = () => {


    return (
        <section className={`${styles.aboutCompanyContiner} mb-5`}>
            <div className="container">



                <div className="row h-100 align-items-center gx-5">
                    <div className='col-md-6'>
                        <img alt='' className={`img-fluid ${styles.aboutImage}`} src='/img/why-acquiring.png' />

                    </div>
                    <div className="col-md-6">

                        <h4 className={`${styles.aboutTitle}`}>Why Acquiring ?</h4>

                        <p className={`${styles.aboutDescription}`}>Acquiring technology helps you build and advance your software engineering career. Our comprehensive program covers an unconventional course syllabus that includes hackathons, debates, pair programming, workshops, and lots of first-principles thinking! This is unique accelerated learning that gets you trained and ready for a career in the most happening industry.</p>

                        <ul className="nav flex-column mb-2">
                            {/* <li className={`nav-item ${styles.aboutDescriptionList}`}>
                            <i className="fa-regular fa-hand-point-right me-2"/>  Holistic training approach that covers technical, social skills, behavioural skills and other skills needed to excel in the industry
                            </li> */}
                            <li className={`nav-item ${styles.aboutDescriptionList}`}>
                            <i className="fa-solid fa-arrow-right-long me-2"/>   Work on practical & real-time use cases
                            </li>
                            <li className={`nav-item ${styles.aboutDescriptionList}`}>
                            <i className="fa-solid fa-arrow-right-long me-2 "/>  Learn from seasoned senior software engineers in the industry.
                            </li>
                            <li className={`nav-item ${styles.aboutDescriptionList}`}>
                            <i className="fa-solid fa-arrow-right-long me-2 "/>  Work with a dedicated career counsellor
                            </li>
                            <li className={`nav-item ${styles.aboutDescriptionList}`}>
                            <i className="fa-solid fa-arrow-right-long me-2"/> Placement Assistance
                            </li>
                        </ul>

                        {/* <NormalButton title='More about us' /> */}
                    </div>


                </div>
            </div>

        </section>
    )


};

export default AboutCompany;