import { useState } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

import useParts from '../../PartsContext.js';

import PartCard from './PartCard.js';
import './PartsList.css';

const PartsList = () => {
    const { parts, selectedIndex, updateSelectedIndex } = useParts();

  return (
    <Box className="parts-list-container">
        <h3>Components</h3>
        <ListItem className="part-list-item-button">
            <h4 className="list-item-heading-name list-item-title">Name</h4> 
            <Divider orientation="vertical" flexItem />
            <h4 className="list-item-heading-mass list-item-title">Mass (kg)</h4> 
            <Divider orientation="vertical" flexItem />
            <h4 className="list-item-heading-com list-item-title">Center Of Mass (m)</h4> 
        </ListItem>
      <List className = "part-list">
        
        {parts.map((part, index) => (
            <ListItemButton className = "part-list-item-button" selected={selectedIndex === index} onClick={(event) => updateSelectedIndex(index)} key={index}>
                <PartCard name={part.name} mass={part.mass} centerOfMass={part.centerOfMass}/>
            </ListItemButton>
        ))}
      </List>

    </Box>
  );
}

export default PartsList;
