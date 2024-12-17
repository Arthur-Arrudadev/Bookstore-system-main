import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setAuth } from '../redux/user/userSlice'
import { get_profile } from '@api/index'

export const useLoadingRefresh = () => {

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const loadFetching = useCallback(async () => {
        try {
            const { data } = await get_profile()
            dispatch(setAuth(data))
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }, [dispatch, setLoading])

    useEffect(() => {
        loadFetching()
    }, [loadFetching])

    return {
        loading
    }

}