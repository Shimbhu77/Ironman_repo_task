import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  textValue: "",
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    addText: (state, action) => {
      state.textValue = action.payload
    },
  },
})

export const { addText } = inputSlice.actions

export default inputSlice.reducer