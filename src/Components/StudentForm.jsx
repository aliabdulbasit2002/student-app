import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import {useState} from "react";

const StudentForm = () => {
 const [studentData, setStudentData] = useState({
  title: "",
  noteText: ""
 })
 const {title, noteText} = studentData;

 const handleChange = (e) => {

  setStudentData((prev) => ({...prev, [e.target.name]:e.target.value}))
  
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  let newStudent = {title, noteText}
  console.log(newStudent);
  setStudentData({
    title: "",
    noteText: ""
   })
  
 }
  return (
    <Box>
      {/*Box - Renders a div by default */}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Title:</FormLabel>
          <Input type="Text" name="title" value={title} borderColor="gray.700" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Note Text:</FormLabel>
          <Input type="Text" name="noteText" value={noteText} borderColor="gray.700" onChange={handleChange}/>
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          Add
        </Button>
      </form>
    </Box>
  );
};

export default StudentForm;
