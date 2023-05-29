const { Fragment } = require("react")
import styles from './contactUsForm.module.scss'

export const ContactUsForm = () => {


    return (

        <div className={`container mb-5 ${styles.contactUsFormContainer}`}>
            <div className='row'>
                <div className='col-8'>
                    <h4 className={styles.title}>CONTACT US</h4><hr />
                    <p className={styles.subTitle}>It would be great to hear from you! Just drop us a line and ask for anything with which you think we could be helpful. We are looking forward to hearing from you!</p>

                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Enter Name" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" placeholder="Enter Email" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                <input type="text" className="form-control" placeholder="Enter Subject" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>

                </div>

                <div className='col-4'>
                    <h4 className={styles.title}>Find Us</h4><hr />
                    <p className={styles.subTitle}><i className="fa-solid fa-house"></i> 197, Lakshmi Towers,
                        First Main Road, Nehru Nagar,
                        Rajiv Gandhi Salai – OMR,
                        Kottivakkam, Chennai – 600 096.</p>
                        <p className={styles.subTitle}><i className="fa-solid fa-phone"></i> +91 44 xxx 0055</p>
                        <a className={styles.subTitle}><i className="fa-solid fa-envelope"></i>enquiry@rvsbgroup.com</a>

                </div>
            </div>
        </div>


    )


}