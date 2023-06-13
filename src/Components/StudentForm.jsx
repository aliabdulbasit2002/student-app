import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const StudentForm = () => {
  return (
    <Box>
      {/*Box - Renders a div by default */}
      <form>
        <FormControl>
          <FormLabel>Title:</FormLabel>
          <Input type="Text" borderColor="gray.700" />
        </FormControl>
        <FormControl>
          <FormLabel>Note Text:</FormLabel>
          <Input type="Text" borderColor="gray.700" />
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          Add
        </Button>
      </form>
    </Box>
  );
};

export default StudentForm;
