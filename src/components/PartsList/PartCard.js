import { useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import './PartCard.css';


const PartCard = ({name, mass, centerOfMass}) => {
    return (

      <ListItem className="part-list-item">
        <ListItemText className="list-item-name">{name}</ListItemText> 
        <ListItemText className="list-item-mass">{mass}</ListItemText> 
        <ListItemText className="list-item-com">
          <div className="list-item-com-val">x:   {centerOfMass.x}</div>
          <div className="list-item-com-val">y:   {centerOfMass.y}</div>
          <div className="list-item-com-val">z:   {centerOfMass.z}</div>
        </ListItemText> 
      </ListItem>

    );
}

export default PartCard;