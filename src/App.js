import PartsList from "./components/PartsList/PartsList";
import Box from '@mui/material/Box';
import './App.css';

function App() {

  return (
    <Box className = "container">
      <Box  className = "partsList">
        <PartsList/>
      </Box>
    </Box>

  )

}

export default App;
