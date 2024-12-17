import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    user: {}
}

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            const { auth, user } = action.payload
            state.isAuth = auth
            state.user = user
        }
    }
})

export const { setAuth } = userSlice.actions

export default userSlice.reducer