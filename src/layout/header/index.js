
import styles from './header.module.scss'
import { NavLink } from '@/components/common';
import Image from 'next/image';
import { useEffect } from 'react';
export const Header = () => {




    useEffect(()=>{
        window.addEventListener('scroll', handleverticalScroll)

    },[])


    const handleverticalScroll = () => {
        //! Put the class name that you want to use
        // Class name that will be added to the navbar element in the "scrolled" state
        const SCROLLED_STATE_CLASS = "fixed-top shadow"

        //! Use your own ID or selector
        // The id of navigation bar HTML element
        const NAVBAR_ID = "navbar"

        // Get the navigation bar element
        const navbar = document.getElementById(NAVBAR_ID)

        // Get scroll value
        const scroll = document.documentElement.scrollTop

        // If scroll value is more than 0 - means the page is scrolled, add or remove class based on that
        if (scroll > 85) {
            navbar.classList.add('fixed-top', 'shadow','transition4');
        } else {
            navbar.classList.remove('fixed-top', 'shadow','transition4')
        }
    }


    return (

        <nav id='navbar' className={`navbar navbar-expand-lg bg-body-tertiary ${styles.customNavbar}`}>
            <div className="container">
                <a className="navbar-brand" href="#"><Image width={50} height={50} className={styles.brandImage} src={'/logo.svg'} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${styles.navMenu}`}>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/aboutUs">All Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/services">Why Us?</NavLink>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    )

}