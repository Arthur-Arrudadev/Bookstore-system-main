import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '@components/navbar'

function GuestLayout() {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
        </Fragment>
    )
}

export default GuestLayout
