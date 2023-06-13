import styles from './contactUsHeader.module.scss'

export const ContactUsHeader = () => {



    return (
        <section className={`${styles.contactUsHeaderContiner} my-5`}>
            <div className="container">

                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <i className={`fa-solid fa-phone text-primary fa-lg ${styles.iconCont}`}></i>
                                    </div>
                                    <div className="flex-grow-1 ms-4">
                                        <h4 className='text-primary mb-0'>Phone</h4>
                                        <label>+91 9943631660</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <i className={`fa-solid fa-envelope text-primary fa-lg ${styles.iconCont}`}></i>
                                    </div>
                                    <div className="flex-grow-1 ms-4">
                                        <h4 className='text-primary mb-0'>Mail address</h4>
                                        <label>acquiringtechnology@gmail.com</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )



}