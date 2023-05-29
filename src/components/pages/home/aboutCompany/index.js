
import styles from './aboutCompany.module.scss';
import { NormalButton } from '@/components/common'
const AboutCompany = () => {


    return (
        <section className={`${styles.aboutCompanyContiner} mb-5`}>
            <div className="container">



                <div className="row h-100 ">
                    <div className='col-md-6'>
                        <img alt='' className={`img-fluid ${styles.aboutImage}`} src='/img/why-acquiring.png' />

                    </div>
                    <div className="col-md-6">

                        <h4 className={`${styles.aboutTitle}`}>Why Acquiring ?</h4>

                        <p className={`${styles.aboutDescription}`}>We operate with high standards of refinement and urbanity to serve our clients. Our client servicing constitutes devising and execution of a project however, we do not limit ourselves when it comes to offering a flexible solution. We also try to understand the problems faced by our clients and only after we have provided the absolute best possible solution to the problem do we consider it a successful venture.</p>

                        <ul className="nav flex-column mb-2">
                            <li className={`nav-item ${styles.aboutDescriptionList}`}>
                                We are committed to providing world-class products and Services.
                            </li>
                            <li className={`nav-item ${styles.aboutDescriptionList}`}>
                                The sole mission is to provide pragmatic and cost-effective Business Consulting
                            </li>
                            <li className={`nav-item ${styles.aboutDescriptionList}`}>
                                From IT strategy and transformation to enterprise-wide software applications.
                            </li>
                            <li className={`nav-item ${styles.aboutDescriptionList}`}>
                                we optimize technology and business processes.
                            </li>
                        </ul>

                        <NormalButton title='More about us' />
                    </div>


                </div>
            </div>

        </section>
    )


};

export default AboutCompany;