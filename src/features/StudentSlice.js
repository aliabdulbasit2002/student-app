import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  students: []
}

export const StudentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
         state.students.push(action.payload) 
    }
  },
})

// Action creators are generated for each case reducer function
export const { addStudent } = StudentSlice.actions

export default StudentSlice.reducer