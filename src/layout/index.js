import { Fragment } from 'react'
import { Header } from './header'
import Footer from './footer'
import {SideBar} from './sideBar'
export const Layout = ({ children = '' }) => {

    return (
        <Fragment>
<SideBar/>
            <Header />
           
                {children}
 
            <Footer/>
        </Fragment>


    )

}