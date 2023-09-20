
import Link from 'next/link'
import styles from './footer.module.scss'

// import profilePic from '../../../public/logo.svg';
export const Footer = () => {


    return (

        <footer className={`w-100 py-4 flex-shrink-0 ${styles.footer}`}>
        <div className="container py-4">
        <div className="row gy-4 gx-5">
        <div className="col-lg-4 col-md-6">
            
            </div>
            </div>
            <div className="row gy- gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-muted"><img width={50} height={50} className={styles.brandImage} src={'/logo.svg'}/></h5>
                    <p className="small text-muted">Skills for your present (and your future). Get started with us.</p>
                    <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">Acquiring</a></p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-muted mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/courses">All Courses</Link></li>
                        <li><Link href="/liveClasses">LIVE Classes</Link></li>
                        <li><Link href="/whyUs">Why Us?</Link></li>
                    </ul>
                </div>
                {/* <div className="col-lg-2 col-md-6">
                    <h5 className="text-muted mb-3">Mail us</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="#">acquiringtechnology@gmail.com</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div> */}
                <div className="col-lg-5 col-md-6">
                    <h5 className="text-muted mb-3">Stay in Touch for Awesome Updates & Offers!</h5>
                    <p className="small text-muted">Subscribe to our newsletter for alerts on New Courses, Free Workshops, & Masterclasses</p>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Enter your mail id" aria-describedby="button-addon2"/>
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
    )

}