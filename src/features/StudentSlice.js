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
    },

    deleteStudent: (state, action) => {
      state.students = state.students.filter((student) => {
        if (student.id !== action.payload) {
          return student;
        }
      })
    }
  }
})

// Action creators are generated for each case reducer function
export const { addStudent, deleteStudent } = StudentSlice.actions

export default StudentSlice.reducer