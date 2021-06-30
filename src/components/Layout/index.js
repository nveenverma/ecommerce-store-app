import React from 'react'

import Header from '../Header'
import MenuHeader from '../MenuHeader'
import "./style.css"

function Layout (props) {
    return (
        <>
            <Header />
            <MenuHeader />
            {props.children}
        </>
    )
}

export default Layout
