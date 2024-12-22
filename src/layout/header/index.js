import styles from "./header.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { NavLink, NormalButton } from "@/components/common";
import { useEffect } from "react";
import _ from "lodash";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { getStorage, setStorage } from "@/services/helperFunctions";
import { EXIST_LOCAL_STORAGE, MENU } from "@/services/constants";
import Link from "next/link";
export const Header = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleMobileDrop = () => setMobileDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    try {
      window.addEventListener("scroll", handleverticalScroll);
      const curentUserData =
      getStorage(EXIST_LOCAL_STORAGE.CURRENT_USER)? JSON.parse(getStorage(EXIST_LOCAL_STORAGE.CURRENT_USER)):{};
      setUserDetails(curentUserData);
    } catch (e) {}
  }, []);

  const handleMenuShow = () => {
    if (process.browser) {
    let menu = document.getElementById("mobileSidenav");
    menu.classList.toggle("show");
    }
  };

  const handleverticalScroll = () => {
    try {
      //! Put the class name that you want to use
      // Class name that will be added to the navbar element in the "scrolled" state
      const SCROLLED_STATE_CLASS = "fixed-top shadow";

      //! Use your own ID or selector
      // The id of navigation bar HTML element
      const NAVBAR_ID = "navbar";

      // Get the navigation bar element
      const navbar = document.getElementById(NAVBAR_ID);

      // Get scroll value
      const scroll = document.documentElement.scrollTop;

      // If scroll value is more than 0 - means the page is scrolled, add or remove class based on that
      if (scroll > 85) {
        navbar.classList?.add("fixed-top", "shadow", "transition4");
      } else {
        navbar.classList?.remove("fixed-top", "shadow", "transition4");
      }
    } catch (e) {}
  };

  const handleSiginOut = () => {
    const curentUserData = setStorage(EXIST_LOCAL_STORAGE.CURRENT_USER, "");
    setUserDetails(curentUserData);
    router.push("/");
  };

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg pe-4 bg-body-tertiary ${styles.customNavbar}`}
    >
      <div className="container">
        <div className="d-flex mr-auto">
          <button
            className="navbar-toggler p-0 border-0 me-3"
            type="button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarSupportedContent"
            // aria-controls="navbarSupportedContent"
            // aria-expanded="false"
            // aria-label="Toggle navigation"
            onClick={handleMenuShow}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" href="/">
            <img
              width={50}
              height={50}
              className={styles.brandImage}
              src={"/logo.svg"}
            />
          </Link>

          {/* {_.isEmpty(userDetails) && (
          <div className="d-flex d-block d-lg-none mt-2">
            <NormalButton
              title="Login"
              className="btn text-primary signup-btn"
              onClick={() => router.push("/signIn")}
            />
            <NormalButton
              title="Sign up"
              className="btn btn-outline-primary signup-btn signup-btn"
              onClick={() => router.push("/register")}
            />
          </div>
        )} */}

        </div>

        <div
          className="collapse navbar-collapse bg-white"
          id="navbarSupportedContent"
        >
          <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${styles.navMenu}`}>
            {MENU.map(({ title, link ,exact }, i) => (
              <li className="nav-item" key={i}>
                <NavLink exact={exact} className="nav-link" href={link}>
                  {title}
                </NavLink>
              </li>
            ))}

            {/* <li className="nav-item">
              <NavLink className="nav-link" href="/courses">
                All Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="/liveClasses">
                Live Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="/whyUs">
                Why Us?
              </NavLink>
            </li> */}

            <li className="nav-item d-block d-lg-none">
              <span className="nav-link">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      className={styles.userProfile}
                      src="/img/user-icon.svg"
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h4 className={`mb-1 ${styles.userName}`}>Anvesh</h4>
                    <small>kb.anvesh1996@gmail.com</small>
                  </div>
                </div>
              </span>
            </li>
          </ul>
          <div class="d-flex">
            {/* <a  title="Contact Us"className={`btn ${styles.contactUs}`}  onClick={() => router.push("/contactUs")}><i class="fa-solid fa-phone"></i></a>
            <a  title="Contact Us"className={`btn ${styles.contactUs}`}  onClick={() => router.push("/contactUs")}><i class="fas fa-sign-in"></i></a> */}
            <NormalButton
              className="btn btn-primary px-4"
              type="submit"
              onClick={() => router.push("/contactUs")}
              title="Contact Us"
            />
          </div>
          
        </div>
     
        {/* {!_.isEmpty(userDetails) && (
          <Dropdown
            isOpen={mobileDropdownOpen}
            toggle={toggleMobileDrop}
            className="d-block d-lg-none"
          >
            <DropdownToggle color="transparent" care>
              <img className={styles.userProfile} src="/img/user-icon.svg" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      className={styles.userProfile}
                      src="/img/user-icon.svg"
                      alt="..."
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h4 className={`mb-1 ${styles.userName}`}>
                      {userDetails?.name?.fName} {userDetails?.name?.lName}
                    </h4>
                    <small>{userDetails?.email}</small>
                  </div>
                </div>
              </DropdownItem>

              <DropdownItem divider />
              <DropdownItem onClick={handleSiginOut}>Sign out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )} */}
      </div>

      {/* {_.isEmpty(userDetails) && (
        <div className="d-flex d-none d-lg-block">
          <NormalButton
            title="Login"
            className="btn text-primary"
            onClick={() => router.push("/signIn")}
          />
          <NormalButton
            title="Sign up"
            className="btn btn-outline-primary px-4"
            onClick={() => router.push("/register")}
          />
        </div>
      )} */}

      {/* {!_.isEmpty(userDetails) && (
        <Dropdown
          isOpen={dropdownOpen}
          toggle={toggle}
          className="d-none d-lg-block"
        >
          <DropdownToggle color="transparent" care={false}>
            <img className={styles.userProfile} src="/img/user-icon.svg" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img
                    className={styles.userProfile}
                    src="/img/user-icon.svg"
                    alt="..."
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h4 className={`mb-1 ${styles.userName}`}>
                    {userDetails?.name?.fName} {userDetails?.name?.lName}
                  </h4>
                  <small>{userDetails?.email}</small>
                </div>
              </div>
            </DropdownItem>

            <DropdownItem divider />
           <DropdownItem onClick={()=>router.push('/profile')}>My Profile</DropdownItem>
           <DropdownItem onClick={()=>router.push('/changePassword')}>Change Password</DropdownItem>
            <DropdownItem onClick={handleSiginOut}>Sign out</DropdownItem>
           
          </DropdownMenu>
        </Dropdown>
      )} */}
    </nav>
  );
};
