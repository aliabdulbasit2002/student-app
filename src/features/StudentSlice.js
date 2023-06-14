import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

export const StudentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },

    deleteStudent: (state, action) => {
      state.students = state.students.filter((student) => {
        if (student.id !== action.payload) {
          return student;
        }
      });
    },
    // here to edit and update a student, we need to map
    // through the students and check if , the students's id,
    // matches the id of the student we want to edit,
    // then we edit the student, if not we return the student,
    // meaning we are not updating the student
    editStudent: (state, action) => {
      state.students = state.students.map((student) => {
        if (student.id === action.payload.id) {
          return action.payload.update;
        }
        return student;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addStudent, deleteStudent, editStudent } = StudentSlice.actions;

export default StudentSlice.reducer;
