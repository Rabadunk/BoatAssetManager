import PartsList from "./components/PartsList/PartsList";
import Box from '@mui/material/Box';
import './App.css';
import Stats from "./components/Stats/Stats";

function App() {

  return (
    <Box className = "container">
      <Box  className = "partsList">
        <PartsList/>
      </Box>
      <Box className = "stats">
        <Stats/>
      </Box>
    </Box>

  )

}

export default App;
