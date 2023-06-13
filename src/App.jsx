import { Grid, GridItem } from "@chakra-ui/react";
import StudentForm from "./Components/StudentForm";
import Students from "./Components/Students";

const App = () => {
  return (
    <Grid p={3} templateColumns="repeat(12,1fr)" gap={4}>
      <GridItem colSpan={{ base: 12, md: 6 }}>
        <StudentForm />
      </GridItem>
      <GridItem bg="red.500" colSpan={{ base: 12, md: 6 }}>
        <Students />
      </GridItem>
    </Grid>
  );
};

export default App;
