import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addStudent } from "../features/StudentSlice";

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    title: "",
    noteText: "",
    timeStamp: "",
  });
  const { title, noteText } = studentData;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setStudentData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let today = new Date();
    // let hour = date.getHours();
    // let minute = date.getMinutes();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let newStudent = {
      title,
      noteText,
      id: uuid(),
      timeStamp: `Posted on ${time}`,
    };

    dispatch(addStudent(newStudent));

    setStudentData({
      title: "",
      noteText: "",
    });
  };
  return (
    <Box>
      {/*Box - Renders a div by default */}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Title:</FormLabel>
          <Input
            type="Text"
            name="title"
            value={title}
            borderColor="gray.700"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Note Text:</FormLabel>
          <Input
            type="Text"
            name="noteText"
            value={noteText}
            borderColor="gray.700"
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          Add
        </Button>
      </form>
    </Box>
  );
};

export default StudentForm;
