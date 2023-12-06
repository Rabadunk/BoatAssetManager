import PartsList from "./components/PartsList/PartsList";
import Stats from "./components/Stats/Stats";
import BubbleChart from "./components/BubbleChart";
import Box from '@mui/material/Box';

import './App.css';

function App() {

  const data = [
    { x: 1, y: 2, z: 3, mass: 10 },
    // Add more data points as needed
  ];


  return (
    <Box className = "container" id="container">
      <Box  className = "parts-list">
        <PartsList/>
      </Box>
      <Box className = "density-heat-map">
        <BubbleChart />
      </Box>
      <Box className = "stats">
        <Stats/>
      </Box>
    </Box>

  )

}

export default App;
