import { Fragment } from 'react'
import { Header } from './header'
import {Footer} from './footer'
export const Layout = ({ children = '' }) => {

    return (
        <Fragment>

            <Header />
           
                {children}
 
            <Footer/>
        </Fragment>


    )

}