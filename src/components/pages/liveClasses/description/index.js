
import styles from './description.module.scss';
import { NormalButton } from '@/components/common'
export const Description = ({
    title="",
description="",
subDescription=''
}) => {


    return (
        <section className={`${styles.aboutCompanyContiner} mb-5`}>
            <div className="container">



                <div className="row h-100 align-items-center gx-5">
                    <div className='col-md-6'>
                        <img alt='' className={`img-fluid ${styles.aboutImage}`} src='/img/liveClass-description.svg' />

                    </div>
                    <div className="col-md-6">

                        <h4 className={`${styles.aboutTitle}`}>{title}</h4>

                        <p className={`${styles.aboutDescription}`}>Our Live Class is packed with Capstone Project Based on Full Stack Development Program that offers 100% Job Assistance Support on completing the course. In addition to mentoring from industry experts from top MNC companies, the program has been designed by Founders (former Disney developers). While it will assist you in getting hired by top {"MNC's."} Enhance your career in technology.</p>

                       
                        {/* <NormalButton title='More about us' /> */}
                    </div>


                </div>
            </div>

        </section>
    )


};
