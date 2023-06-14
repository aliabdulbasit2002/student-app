/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../features/StudentSlice";
import EditStudent from "./EditStudent";

const Student = ({ student }) => {
  const dispatch = useDispatch();
  return (
    <Box
      bg="facebook.400"
      color="white"
      p={3}
      borderRadius={10}
      borderTop="10px solid"
      borderTopColor="facebook.800"
      maxW={300}
    >
      <Text fontWeight="bold" color="gray.50" fontSize="10pt">
        {student.timeStamp}
      </Text>
      <Text>
        <Text as="span" fontWeight="bold">
          Note Title:
        </Text>{" "}
        {student.title}
      </Text>
      <Text>
        <Text as="span" fontWeight="bold">
          Note Description:
        </Text>{" "}
        {student.noteText}
      </Text>
      <ButtonGroup mt={3}>
        {/* this EditStudent form is a modal that contains 
        a button to open the modal for a user to be able to
        edit a student.
        */}
        {/* we pass the student as a prop so we can access
        the values the user inputted */}
        <EditStudent student={student} />
        <Button onClick={() => dispatch(deleteStudent(student.id))}>
          Delete
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Student;
