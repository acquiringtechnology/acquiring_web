import Link from "next/link";
import styles from "./footer.module.scss";
import { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as subscribeAction from "@/redux/action/subscribe";

// import profilePic from '../../../public/logo.svg';
const Footer = ({ subscribeCreate }) => {
  const validator = useRef(
    new SimpleReactValidator({
      className: "text-danger",
    })
  );
  const [, forceUpdate] = useState(0);
  const [isFormLoder, setIsFormLoder] = useState(false);
  const [subscribeObj, setSubscribeObj] = useState({
    email: "",
  });

  const handleSubmitSubscribe = async () => {
    try {
      const formValid = validator.current.allValid();
      if (formValid) {
        setIsFormLoder(true);
        const subscribeReq = await subscribeCreate(subscribeObj);
        setIsFormLoder(false);
        const { status } = subscribeReq;
        if (status) {
          setSubscribeObj({
            email: "",
          });
          // router.push({
          //   pathname: "/register",
          //   query: { emailVerification: "true" },
          // });
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (e) {
      setSubscribeObj({
        email: "",
      });
      setIsFormLoder(false);
      console.log(e);
    }
  };

  const handleInputChange = (event) => {
    const {
      target: { value, checked, type, name },
    } = event;

    setSubscribeObj({
      ...subscribeObj,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <footer className={`w-100 py-4 flex-shrink-0 ${styles.footer}`}>
      {/* <section
        className="d-flex justify-content-between p-4 bg-primary"
      >
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section> */}
      <div className="container py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6"></div>
        </div>
        <div className="row gy- gx-5">
          <div className="col-lg-4 col-md-6">
            <Link href="/" className="h1 text-muted">
              <img
                width={50}
                                height={50}
                className={`${styles.brandImage} mb-3`}
                src={"/logo.svg"}
              />
            </Link>
            <p className="small text-muted">
              Skills for your present (and your future). Get started with us.
            </p>
            <p className="small text-muted mb-0">
              &copy; Copyrights. All rights reserved.{" "}
              <a className="text-primary" href="#">
                Acquiring
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-muted mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/courses">All Courses</Link>
              </li>
              <li>
                <Link href="/liveClasses">LIVE Classes</Link>
              </li>
              <li>
                <Link href="/whyUs">Why Us?</Link>
              </li>
              <li>
                <Link href="/termsOfUse">Terms Of Use</Link>
              </li>
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
            <h5 className="text-muted mb-3">
              Stay in Touch for Awesome Updates & Offers!
            </h5>
            <p className="small text-muted">
              Subscribe to our newsletter for alerts on New Courses, Free
              Workshops, & Masterclasses
            </p>
            {/* <form action="#"> */}
            <div className="input-group mb-3">
              <input
                className="form-control"
                value={subscribeObj.email}
                type="text"
                name="email"
                placeholder="Enter your mail id"
                aria-label="Enter your mail id"
                aria-describedby="button-addon2"
                onChange={handleInputChange}
              />
              <button
                className="btn btn-primary"
                onClick={handleSubmitSubscribe}
                type="button"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            {validator.current.message(
              "Subscribe Email",
              subscribeObj.email,
              "required"
            )}
            {/* </form> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

const mapStatesToProps = ({
  subscribe: { isSubscribeCreateLoader = false },
}) => {
  return { isSubscribeCreateLoader };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      ...subscribeAction,
    },
    dispatch
  );
};
export default connect(mapStatesToProps, mapDispatchToProps)(Footer);
