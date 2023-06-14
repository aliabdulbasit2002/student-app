import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editStudent } from "../features/StudentSlice";

const EditStudent = ({ student }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [studentData, setStudentData] = useState({
    title: student.title,
    noteText: student.noteText,
    timeStamp: "",
  });
  const { title, noteText } = studentData;
  const dispatch = useDispatch();
  // the toast is displays a notification message
  const toast = useToast();

  const handleChange = (e) => {
    setStudentData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedStudent = {
      title,
      noteText,
      id: student.id,
      timeStamp: student.timeStamp,
    };

    dispatch(editStudent({ id: student.id, updatedStudent }));

    toast({
      status: "success",
      position: "bottom-left",
      description: "Edited Successfully",
      isClosable: true,
    });

    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Student</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditStudent;
