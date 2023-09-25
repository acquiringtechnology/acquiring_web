import { useState, useEffect } from "react";
import { EXIST_LOCAL_STORAGE, MENU } from "@/services/constants";
import { NavLink, NormalButton } from "@/components/common";
import { useRouter } from "next/router";
import { getStorage, setStorage } from "@/services/helperFunctions";
import _ from "lodash";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import styles from "./sidebar.module.scss";

export const SideBar = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    try {
      window.addEventListener("resize", handleWindowSize);
      const curentUserData =
        JSON.parse(getStorage(EXIST_LOCAL_STORAGE.CURRENT_USER)) || {};

      console.log("curentUserData-----------", curentUserData);
      setUserDetails(curentUserData);
    } catch (e) {
      console.log("curentUserData err-----------", e);
    }
  }, []);

  const handleWindowSize = (e) => {
    console.log("handleWindowSize err-----------", document.body.clientWidth);
    if (document.body.clientWidth >= 992) {
      let menu = document.getElementById("mobileSidenav");
      menu.classList.remove("show");
    }
  };

  const handleMenuShow = () => {
    let menu = document.getElementById("mobileSidenav");
    menu.classList.toggle("show");
  };

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleSiginOut = () => {
    const curentUserData = setStorage(EXIST_LOCAL_STORAGE.CURRENT_USER, "");
    setUserDetails(curentUserData);
    router.push("/");
  };

  return (
    <div
      id="mobileSidenav"
      className={`sidenav web-site ${styles.customSidebar}`}
    >
      {/* <a href="javascript:void(0)" className="closebtn"    onClick={this.handleMenuShow}>&times;</a> */}
      <div className="close-content">
        <a href="#" onClick={handleMenuShow}>
          &times;
        </a>
      </div>
      <div className="list-group">
        {MENU.map(({ title, link }, i) => (
          <NavLink key={i} className="list-group-item" href={link}>
            {title}
          </NavLink>
        ))}
        <NavLink className="list-group-item" href={"/contactUs"}>
          Contact Us
        </NavLink>

        {/* <div
          className={`py-2 contact-us-end ${
            !_.isEmpty(userDetails) ? "text-start" : ""
          }`}
        >
          {_.isEmpty(userDetails) && (
            <>
              <NormalButton
                title="Login"
                className="btn text-primary px-4 me-1"
                onClick={() => router.push("/signIn")}
              />
                      <NormalButton
                title="Sign up"
                className="btn btn-outline-primary px-4 ms-1"
                onClick={() => router.push("/register")}
              />
            </>
          )} */}
        {/* {!_.isEmpty(userDetails) && (
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
                         >
              <DropdownToggle color="transparent" caret>
                <img className={styles.userProfile} src="/img/user-icon.svg" />{" "}
                {userDetails?.name?.fName} {userDetails?.name?.lName}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img
                        className={styles.userProfile}
                        src="/img/user-icon.svg"
                        alt="..."
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
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

        {/* </div> */}
      </div>
    </div>
  );
};
