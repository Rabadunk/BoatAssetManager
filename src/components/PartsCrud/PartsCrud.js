import { useState } from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import useParts from '../../PartsContext.js';

import './PartsCrud.css';

const PartsCrud = () => {
    const { parts, selectedIndex, addPart, editPart, deletePart } = useParts();

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

  const validateNewPartAttributes = () => {

    if (newPartMass < 0) {
        alert('Please enter a mass greater that zero');
        return false;
    }

    if (newPartCOM.y > 2.5 || newPartCOM.y < -2.5) {
        alert('Please enter a y coordinate between -2.5 and 2.5');
        return false;
    }

    if (newPartCOM.z > 26.5 || newPartCOM.z < -10) {
        alert('Please enter a z coordinate between -10 and 26.5');
        return false;
    }

    return true;

  } 


  return (
    <Box className="parts-crud-container">

      <Box className="button-row">
        <Button className=" button" variant="contained" onClick={() => handleOpenAdd()}>Add</Button>
        <Button className="open-edit-part-button button" variant="contained" onClick={() => handleOpenEdit()}>Edit</Button>
        <Button className="open-edit-part-button button" variant="contained" color='warning' onClick={() => deletePart(selectedIndex)}>Delete</Button>
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
                    if(validateNewPartAttributes()) {
                        handleCloseAdd();
                        addPart({name: newPartName, mass: newPartMass, centerOfMass: newPartCOM});
                    }

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

                    if(validateNewPartAttributes()) {
                        handleCloseEdit();
                        editPart({name: newPartName, mass: newPartMass, centerOfMass: newPartCOM}, selectedIndex);
                    }

                }} variant="contained" className="modal-button">Add</Button>
            </Box>
        </Box>
      </Modal>

    </Box>
  );
}

export default PartsCrud;