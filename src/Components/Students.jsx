import { SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Student from "./Student";

const Students = () => {
  const { students } = useSelector((state) => state.students);
  return (
    <SimpleGrid minChildWidth={250} gap={3}>
      {students.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </SimpleGrid>
  );
};

export default Students;
