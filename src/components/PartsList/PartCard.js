import { useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import './PartCard.css';


const PartCard = ({name, mass, centerOfMass}) => {
    return (

      <ListItem className="part-list-item">
        <ListItemText className="list-item-name">{name}</ListItemText> 
        <Divider orientation="vertical" flexItem />
        <ListItemText className="list-item-mass">{mass}</ListItemText> 
        <Divider orientation="vertical" flexItem />
        <ListItemText className="list-item-com">x: {centerOfMass.x} y: {centerOfMass.y} z: {centerOfMass.z}</ListItemText> 
      </ListItem>

    );
}

export default PartCard;