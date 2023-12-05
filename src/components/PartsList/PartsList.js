import { useState } from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import PartCard from './PartCard.js';
import './PartsList.css';

// Sample initial parts data
const initialParts = [
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
];

const PartsList = () => {
  const [parts, setParts] = useState(initialParts);
  const [newPartName, setNewPartName] = useState("New Part");
  const [newPartMass, setNewPartMass] = useState(20);
  const [newPartCOM, setNewPartCOM] = useState({ x: 2, y: 2, z: 2 });

  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => {

    if(parts.length > 0) {
        setNewPartName(parts[selectedIndex].name);
        setNewPartMass(parts[selectedIndex].mass);
        setNewPartCOM(parts[selectedIndex].centerOfMass);
        setOpenEdit(true)
        
    } else {

        alert("There are no components to edit, try add some.")
    }
};
  const handleCloseEdit = () => setOpenEdit(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  // Function to add a new part
  const addPart = (name, mass, centerOfMass) => {
    const newPart = { name, mass, centerOfMass };
    setParts([...parts, newPart]);
  };

  // Function to edit an existing part
  const editPart = (index, name, mass, centerOfMass ) => {
    const updatedParts = [...parts];
    updatedParts[index] = { name, mass, centerOfMass };
    setParts(updatedParts);
  };

// Function to delete a part
const deletePart = () => {
    if(parts.length > 1) {
        const updatedParts = [...parts];
        updatedParts.splice(selectedIndex, 1);
        setSelectedIndex(0);
        setParts(updatedParts);
    } else {

        alert("You need to have atleast one component, try add some and then delete this one.")
    }

};

  return (
    <Box className="parts-list-container">
      <List className = "part-list">
        <ListItem className="part-list-item-button">
            <ListItemText className="list-item-heading-name list-item-title">Name</ListItemText> 
            <Divider orientation="vertical" flexItem />
            <ListItemText className="list-item-heading-mass list-item-title">Mass</ListItemText> 
            <Divider orientation="vertical" flexItem />
            <ListItemText className="list-item-heading-com list-item-title">Center Of Mass</ListItemText> 
        </ListItem>
        
        {parts.map((part, index) => (
            <ListItemButton className = "part-list-item-button" selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index)}>
                <PartCard name={part.name} mass={part.mass} centerOfMass={part.centerOfMass}/>
            </ListItemButton>
        ))}
      </List>

      <Box className="button-row">
        <Button className="open-add-part-button button" variant="contained" onClick={() => handleOpenAdd()}>Add</Button>
        <Button className="open-edit-part-button button" variant="contained" onClick={() => handleOpenEdit()}>Edit</Button>
        <Button className="open-delete-part-button button" variant="contained" onClick={() => deletePart()}>Delete</Button>
      </Box>


      {/* Add new part modal */}
      <Modal open={openAdd} onClose={handleCloseAdd} className='add-new-part-modal'>
        <Box className='add-new-part-container'>
            <Box className="modal-input-row">
                <h5>Name</h5>
                <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event)=>{setNewPartName(event.target.value)}} className="modal-input"/>
            </Box>

            <Box className="modal-input-row">
                <h5>Mass</h5>
                <TextField id="outlined-basic" label="Mass" variant="outlined" type="number" onChange={(event)=>{setNewPartMass(event.target.value)}} className="modal-input"/>
            </Box>

            <Box className="modal-input-row">
                <h5>Center Of Mass</h5>
                <TextField id="outlined-basic" label="X" variant="outlined" type="number" onChange={(event)=>{setNewPartCOM({x: event.target.value, y: newPartCOM.y, z: newPartCOM.z})}} className="modal-input"/>
                <TextField id="outlined-basic" label="Y" variant="outlined" type="number" onChange={(event)=>{setNewPartCOM({x: newPartCOM.x, y: event.target.value, z: newPartCOM.z})}}  className="modal-input"/>
                <TextField id="outlined-basic" label="Z" variant="outlined" type="number" onChange={(event)=>{setNewPartCOM({x: newPartCOM.x, y: newPartCOM.y, z: event.target.value})}} className="modal-input"/>
            </Box>


            <Box className="modal-button-row">
                <Button variant="contained" onClick={() => handleCloseAdd()} color="error" className="modal-button-cancel modal-button">Cancel</Button>
                <Button onClick={() => {
                    handleCloseAdd();
                    addPart(newPartName, newPartMass, newPartCOM);
                }} variant="contained" className="modal-button">Add</Button>
            </Box>
        </Box>
      </Modal>

      {/* Edit part modal */}
      <Modal open={openEdit} onClose={handleCloseEdit} className='add-new-part-modal'>
        <Box className='add-new-part-container'>
            <Box className="modal-input-row">
                <h5>Name</h5>
                <TextField id="outlined-basic" defaultValue={parts[selectedIndex].name} variant="outlined" onChange={(event)=>{setNewPartName(event.target.value)}} className="modal-input"/>
            </Box>

            <Box className="modal-input-row">
                <h5>Mass</h5>
                <TextField id="outlined-basic" defaultValue={parts[selectedIndex].mass}  variant="outlined" type="number" onChange={(event)=>{setNewPartMass(event.target.value)}} className="modal-input"/>
            </Box>

            <Box className="modal-input-row">
                <h5>Center Of Mass</h5>
                <TextField id="outlined-basic" defaultValue={parts[selectedIndex].centerOfMass.x} variant="outlined" type="number" onChange={(event)=>{setNewPartCOM({x: event.target.value, y: newPartCOM.y, z: newPartCOM.z})}} className="modal-input"/>
                <TextField id="outlined-basic" defaultValue={parts[selectedIndex].centerOfMass.y} variant="outlined" type="number" onChange={(event)=>{setNewPartCOM({x: newPartCOM.x, y: event.target.value, z: newPartCOM.z})}}  className="modal-input"/>
                <TextField id="outlined-basic" defaultValue={parts[selectedIndex].centerOfMass.z} variant="outlined" type="number" onChange={(event)=>{setNewPartCOM({x: newPartCOM.x, y: newPartCOM.y, z: event.target.value})}} className="modal-input"/>
            </Box>


            <Box className="modal-button-row">
                <Button variant="contained" onClick={() => handleCloseEdit()} color="error" className="modal-button-cancel modal-button">Cancel</Button>
                <Button onClick={() => {
                    handleCloseEdit();
                    editPart(selectedIndex, newPartName, newPartMass, newPartCOM);
                }} variant="contained" className="modal-button">Add</Button>
            </Box>
        </Box>
      </Modal>

    </Box>
  );
}

export default PartsList;
