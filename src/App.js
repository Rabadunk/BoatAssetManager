import PartsList from "./components/PartsList/PartsList";
import PartsCrud from "./components/PartsCrud/PartsCrud";
import Stats from "./components/Stats/Stats";
import Tools from "./components/Tools/Tools";
import BubbleChart from "./components/BubbleChart/BubbleChart";
import Box from '@mui/material/Box';

import useParts from './PartsContext.js';

import './App.css';

function App() {

  const { readOnly } = useParts();



  return (
    <Box className = "container">
      <Box  className = "tool-bar">
        <Stats/>
        <Tools />
        <PartsList/>
        {

          readOnly ? null:

          <PartsCrud/>

        }
          

      </Box>
      <Box className = "charts">
        <BubbleChart />
      </Box>

    </Box>

  )

}

export default App;
