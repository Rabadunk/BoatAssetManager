import { createContext, useReducer, useContext } from "react";
import partReducer, { initialState } from "./PartReducer";
import { calculateTotalMass } from "./utils/calculateTotalMass";
import { calculateCenterOfMass } from "./utils/calculateCenterOfMass";

const PartsContext = createContext(initialState);

export const PartsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(partReducer, initialState);

    const addPart = (part) => {
        console.log("adding part", part);
        const updatedParts = state.parts.concat(part);
          updateTotalMass(updatedParts)
          updateCenterOfMass(updatedParts);
      
        dispatch({
          type: "ADD_PART",
          payload: {
            parts: updatedParts
          }
        });
    };

    const editPart = (part, index) => {
        const updatedParts = state.parts;
        updatedParts[index] = part;
        updateTotalMass(updatedParts);
        updateCenterOfMass(updatedParts);
      
        dispatch({
          type: "EDIT_PART",
          payload: {
            parts: updatedParts
          }
        });
    };

    const deletePart = (index) => {
        const updatedParts = state.parts;
        updatedParts.splice(index, 1);

        updateTotalMass(updatedParts)
        updateCenterOfMass(updatedParts);
      
        dispatch({
          type: "DELETE_PART",
          payload: {
            parts: updatedParts
          }
        });
      };
      
    const updateTotalMass = (parts) => {
        let totalMass = calculateTotalMass(parts);
        console.log("total mass: ", totalMass);
      
        dispatch({
          type: "UPDATE_TOTAL_MASS",
          payload: {
            totalMass: totalMass
          }
        });
    };

    const updateCenterOfMass = (parts) => {
        let centerOfMass = calculateCenterOfMass(parts);
      
        dispatch({
          type: "UPDATE_CENTER_OF_MASS",
          payload: {
            centerOfMass
          }
        });
    };

    const value = {
        totalMass: state.totalMass,
        parts: state.parts,
        centerOfMass: state.centerOfMass,
        addPart,
        editPart,
        deletePart
      };

    return <PartsContext.Provider value={value}>{children}</PartsContext.Provider>;
};

const useParts = () => {
    const context = useContext(PartsContext)
  
    if (context === undefined) {
      throw new Error("useParts must be used within PartsContext")
    }
  
    return context
  }
  
  export default useParts

