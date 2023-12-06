import { useState } from 'react';


import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';



import useParts from '../../PartsContext.js';

import './Tools.css';

const Tools = () => {
    const { readOnly, sortPart, toggleReadOnly } = useParts();

    const [selectedFilter, setSelectedFilter] = useState('name');

    const handleChange = (event) => {
      sortPart(event.target.value);
      setSelectedFilter(event.target.value);
    };

    const handleReadChange = (event) => {
      const newReadOnly = !readOnly;
      toggleReadOnly(newReadOnly);
    };

  return (
    <Box className="tools-container">
        <h3>Tools</h3>
        <div className="tools-feature">
          <h4>Sort by</h4>
          <Select
            labelId="sort"
            id="sort"
            value={selectedFilter}
            label="Filter"
            onChange={handleChange}
          >
            <MenuItem value={'name'}>Name</MenuItem>
            <MenuItem value={'mass'}>Mass</MenuItem>
            <MenuItem value={'com'}>COM.x</MenuItem>
          </Select>
        </div>

        <div className="tools-feature">
          <h4>Read only</h4>
          <Switch onChange={handleReadChange}/>
        </div>

    </Box>
  );
}

export default Tools;