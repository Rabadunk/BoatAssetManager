import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PartCard from './PartCard.js';

// Sample initial parts data
const initialParts = [
  { name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } },
  { name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } },
];

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
    const newPart = { name, mass, centerOfMass };
    setParts([...parts, newPart]);
  };



  return (
    <div>
      <h1>Parts List</h1>
      <ul>
        {parts.map((part, index) => (
            <div>
                <PartCard name={part.name} mass={part.mass} centerOfMass={part.centerOfMass}/>
            </div>
        ))}
      </ul>
      <Button onClick={() => handleOpen()}>Add Part</Button>
      
      <Modal
        open={open}
        onClose={handleClose}>
        <Box>
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
