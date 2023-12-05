import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Part from '../Part.js';

// Sample initial parts data
const initialParts = [
  Part({ name: 'Part1', mass: 10, centerOfMass: { x: 0, y: 0, z: 0 } }),
  Part({ name: 'Part2', mass: 5, centerOfMass: { x: 1, y: 1, z: 1 } }),
];

const PartsList = () => {
  const [parts, setParts] = useState(initialParts);
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
          <li key={index}>
            {part.name} - Mass: {part.mass} - Center of Mass: (
            {part.centerOfMass.x}, {part.centerOfMass.y}, {part.centerOfMass.z})
            <Button onClick={() => editPart(index, 'NewName', 15, { x: 2, y: 2, z: 2 })}>
              Edit
            </Button>
            <Button onClick={() => deletePart(index)}>Delete</Button>
          </li>
        ))}
      </ul>
      <Button onClick={() => handleOpen()}>Add Part</Button>
      
      <Modal
        open={open}
        onClose={handleClose}>
        <div>Sugma</div>
      </Modal>
    </div>
  );
}

export default PartsList;