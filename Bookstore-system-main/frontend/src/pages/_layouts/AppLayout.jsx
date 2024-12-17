import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '@components/navbar'
import { logout } from '../../api/index'
import { useSelector } from 'react-redux'
import { LoaderCircle } from 'lucide-react'

import { setAuth } from '../../redux/user/userSlice'
import { useDispatch } from 'react-redux'

function AppLayout() {

    const dispatch = useDispatch()

    const handleLogout = async () => {
        try {
            const { data } = await logout()
            dispatch(setAuth(data))
        } catch (err) {
            console.error(err)
        }
    }

    const { user } = useSelector((state) => state.auth)

    if (!user) {
        setTimeout(() => {
            window.location.reload()
        }, 1000)

        return (
            <div className='min-h-screen flex items-center justify-center'>
                <LoaderCircle className='animate-spin text-[#323c99]' />
            </div>
        )
    }

    return (
        <Fragment>
            <Navbar handleLogout={handleLogout} />
            <Outlet />
        </Fragment>
    )
}

export default AppLayout