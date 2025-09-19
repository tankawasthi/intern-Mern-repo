
import {Box,Container, Typography} from "@mui/material";
import AddHabitForm from "./components/AddHabitForm";
import useHabitStore from "./store/store";

function App() {
 
const store =useHabitStore()
console.log(store)
  return <Container>
    <Box>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Habit Tracker
      </Typography>
    </Box>
    <AddHabitForm/>
  </Container>
    

}

export default App
