import styles from "./header.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { NavLink, NormalButton } from "@/components/common";
import Image from "next/image";
import { useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
export const Header = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    window.addEventListener("scroll", handleverticalScroll);
  }, []);

  const handleverticalScroll = () => {
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
      navbar.classList.add("fixed-top", "shadow", "transition4");
    } else {
      navbar.classList.remove("fixed-top", "shadow", "transition4");
    }
  };

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg pe-4 bg-body-tertiary ${styles.customNavbar}`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image
            width={50}
            height={50}
            className={styles.brandImage}
            src={"/logo.svg"}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse bg-white"
          id="navbarSupportedContent"
        >
          <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${styles.navMenu}`}>
            <li className="nav-item">
              <NavLink className="nav-link" href="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="/courses">
                All Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="/liveClasses">
                LIVE Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="/services">
                Why Us?
              </NavLink>
            </li>

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
          <div class="d-flex mt-md-4 mt-sm-4">
            <NormalButton
              className="btn btn-primary px-4"
              type="submit"
              onClick={() => router.push("/contactUs")}
              title="Contact Us"
            />
          </div>
        </div>
      </div>
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
                <h4 className={`mb-1 ${styles.userName}`}>Anvesh</h4>
                <small>kb.anvesh1996@gmail.com</small>
              </div>
            </div>
          </DropdownItem>

          <DropdownItem divider />
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>Change Password</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </nav>
  );
};
