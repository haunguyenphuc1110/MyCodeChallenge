import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  isLoading: false,
  isSuccess: false,
  error: null,
  config: null,
  info: null
}

const cardSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    startFetch: (state) => {
      state.isLoading = true
      state.isSuccess = false
      state.error = null
    },
    getConfigSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.config = action.payload
      state.error = null
    },
    updateConfigSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.config = action.payload
      state.error = null
    },
    getInfoSuccess: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.info = action.payload
      state.error = null
    },
    fetchFail: (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.error = action.payload
      state.config = null
      state.info = null
    }
  },
})

export const {
  startFetch,
  getConfigSuccess,
  getInfoSuccess,
  updateConfigSuccess,
  fetchFail,
} = cardSlice.actions

export default cardSlice.reducer
