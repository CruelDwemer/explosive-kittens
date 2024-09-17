import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../models'

type State = {
  userData: User
}

const initialState: State = {
  userData: {
    id: 0,
    login: '',
    password: '',
    first_name: '',
    second_name: '',
    email: '',
    phone: '',
    display_name: null,
    avatar: null,
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserData: (state: State, action: PayloadAction<User>) => {
      state.userData = action.payload
    },
  },
})

const { saveUserData } = userSlice.actions
const userReducer = userSlice.reducer

export { saveUserData, userReducer }
