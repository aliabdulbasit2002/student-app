/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { deleteStudent } from '../features/StudentSlice'

const Student = ({ student }) => {
    const dispatch = useDispatch();
  return (
    <Box bg="linkedin.500" color="white" p={3}>
      <Text>Note Title: {student.title}</Text>
      <Text>Note Text: {student.noteText}</Text>
      <ButtonGroup mt={3}>
      <Button>Edit</Button>
      <Button onClick={() => dispatch(deleteStudent(student.id))}>
        Delete
      </Button>
      </ButtonGroup>
    </Box>
  )
}

export default Student
