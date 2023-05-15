import React, { ReactElement } from 'react'
import NavbarComp from '../Navbar/navbar.view'

interface LayoutProps{
    children:ReactElement
}
const Layout:React.FC<LayoutProps> = (props) => {
    return (
        <>
            <NavbarComp />
            <div>
                {
                    props.children
                }

            </div>
        </>
    )
}

export default Layout