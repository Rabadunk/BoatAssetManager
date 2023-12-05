import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Part from './Part.js';

// Sample initial parts data
const initialParts = [
  Part({ name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } }),
  Part({ name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } }),
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const PartsList = () => {
  const [parts, setParts] = useState(initialParts);
  const [newPartName, setNewPartName] = useState("New Part");
  const [newPartMass, setNewPartMass] = useState(20);
  const [newPartCOM, setNewPartCOM] = useState({ x: 2, y: 2, z: 2 });
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Function to add a new part
  const addPart = (name, mass, centerOfMass) => {
    const newPart = Part({ name, mass, centerOfMass });
    setParts([...parts, newPart]);
  };

  // Function to edit a part
  const editPart = (index, name, mass, centerOfMass) => {
    const updatedParts = [...parts];
    updatedParts[index] = Part({ name, mass, centerOfMass });
    setParts(updatedParts);
  };

  // Function to delete a part
  const deletePart = (index) => {
    const updatedParts = [...parts];
    updatedParts.splice(index, 1);
    setParts(updatedParts);
  };

  return (
    <div>
      <h1>Parts List</h1>
      <ul>
        {parts.map((part, index) => (
          <div key={index}>
            {part.name} - Mass: {part.mass} - Center of Mass: (
            {part.centerOfMass.x}, {part.centerOfMass.y}, {part.centerOfMass.z})
            <Button onClick={() => editPart(index, 'NewName', 15, { x: 2, y: 2, z: 2 })}>
              Edit
            </Button>
            <Button onClick={() => deletePart(index)}>Delete</Button>
          </div>
        ))}
      </ul>
      <Button onClick={() => handleOpen()}>Add Part</Button>
      
      <Modal
        open={open}
        onClose={handleClose}>
        <Box sx={style}>
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event)=>{setNewPartName(event.target.value)}}/>
            <TextField id="outlined-basic" label="Mass" variant="outlined" type="number" onChange={(event)=>{setNewPartMass(event.target.value)}} />
            <TextField id="outlined-basic" label="Center Of Mass" variant="outlined" />
            <Button onClick={() => handleClose()}>Cancel</Button>
            <Button onClick={() => {
                handleClose();
                addPart(newPartName, newPartMass, { x: 1, y: 1, z: 1 });
            }}>Add</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default PartsList;
