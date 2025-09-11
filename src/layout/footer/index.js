import Link from "next/link";
import styles from "./footer.module.scss";
import { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as subscribeAction from "@/redux/action/subscribe";

const Footer = ({ subscribeCreate }) => {
  const validator = useRef(
    new SimpleReactValidator({
      className: "text-danger small mt-1 d-block",
    })
  );
  const [, forceUpdate] = useState(0);
  const [isFormLoder, setIsFormLoder] = useState(false);
  const [subscribeObj, setSubscribeObj] = useState({ email: "" });

  const handleSubmitSubscribe = async () => {
    try {
      const formValid = validator.current.allValid();
      if (formValid) {
        setSubscribeObj({ email: "" });
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (e) {
      setSubscribeObj({ email: "" });
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
    <footer
      className={`w-100 sessectionsion-dark py-5 flex-shrink-0 ${styles.footer}`}
    >
      <div className="container">
        <div className="row gy-5 gx-4 align-items-start">
          
          {/* Logo & About */}
          <div className="col-lg-4 col-md-6 text-center text-md-start">
            <Link href="/" className="h1 d-inline-block">
              <img
                width={60}
                height={60}
                className={`${styles.brandImage} mb-3`}
                src={"/logo.svg"}
                alt="Acquiring Logo"
              />
            </Link>
            <p className="small text-light">
              Skills for your present (and your future). Get started with us.
            </p>
            <p className="small text-light mb-0">
              &copy; {new Date().getFullYear()} <strong>Acquiring</strong>. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <h5 className="mb-3 text-white">Quick Links</h5>
            <ul className="list-unstyled text-light small">
              <li>
                <Link href="/">Home</Link>
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

          {/* Newsletter */}
          <div className="col-lg-5 col-md-6 text-center text-md-start">
            <h5 className="mb-3 text-white">
              Stay in Touch for Awesome Updates & Offers!
            </h5>
            <p className="small text-light">
              Subscribe to our newsletter for alerts on New Courses, Free
              Workshops, & Masterclasses
            </p>
            <div className={`newsletter ${styles.newsletter}`}>
              <div className={`input-group ${styles["input-group"]}`}>
                <input
                  className={`form-control ${styles["form-control"]}`}
                  type="email"
                  placeholder="Enter your email address"
                  value={subscribeObj.email}
                  name="email"
                  onChange={handleInputChange}
                />
                <button
                  className={`btn ${styles["btn-red"]}`}
                  onClick={handleSubmitSubscribe}
                  type="button"
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
            {validator.current.message(
              "Subscribe Email",
              subscribeObj.email,
              "required|email"
            )}
          </div>
        </div>

        {/* Social Icons */}
        <div className="row mt-4">
          <div className="col text-center">
            <a href="https://facebook.com" className="text-white mx-2 fs-5">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-white mx-2 fs-5">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/acquiring.in/" className="text-white mx-2 fs-5">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="text-white mx-2 fs-5">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://youtube.com" className="text-white mx-2 fs-5">
              <i className="fab fa-youtube"></i>
            </a>
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
