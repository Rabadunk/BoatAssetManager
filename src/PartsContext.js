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
          type: "UPDATE_PART",
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
          type: "UPDATE_PART",
          payload: {
            parts: updatedParts
          }
        });
    };

    const sortPart = (filter) => {

        const updatedParts = state.parts;

        switch (filter) {
            case 'name':
                updatedParts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                console.log("YOU ARE SORTING BY NAME");
                break;
            case 'mass':
                updatedParts.sort((a,b) => a.mass - b.mass);
                break;
            case 'centerOfMass':
                updatedParts.sort((a,b) => a.centerOfMass.x - b.centerOfMass.x);
                break;
            default:
                updatedParts.sort((a,b) => a.name - b.name);
        }

      
        dispatch({
          type: "UPDATE_PART",
          payload: {
            parts: updatedParts
          }
        });
    };

    const deletePart = (index) => {

        if(state.parts.length > 1) {
          console.log("deleting: ", state.parts[index]);
            const updatedParts = state.parts;
            updatedParts.splice(index, 1);

            
    
            updateTotalMass(updatedParts)
            updateCenterOfMass(updatedParts);
          
            dispatch({
              type: "DELETE_PART",
              payload: {
                parts: updatedParts,
                selectedIndex: 0
              }
            });
        } else {
            alert("You need at least one component in the list, try adding a new component then delete this one.");
        }

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

    const updateSelectedIndex = (index) => {
        dispatch({
          type: "UPDATE_SELECTED_INDEX",
          payload: {
            selectedIndex: index
          }
        });
    }

    const toggleReadOnly = (readOnly) => {
      dispatch({
        type: "TOGGLE_READ_ONLY",
        payload: {
          readOnly: readOnly
        }
      });
    }

    const value = {
        totalMass: state.totalMass,
        parts: state.parts,
        centerOfMass: state.centerOfMass,
        selectedIndex: state.selectedIndex,
        readOnly: state.readOnly,
        addPart,
        editPart,
        deletePart,
        sortPart,
        updateSelectedIndex,
        toggleReadOnly
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

