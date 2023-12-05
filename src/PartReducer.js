
import { calculateTotalMass } from "./utils/calculateTotalMass";
import { calculateCenterOfMass } from "./utils/calculateCenterOfMass";

const initialParts = [
    { name: 'Hull', mass: 5000, centerOfMass: { x: 0, y: 0, z: -2 } },
    { name: 'Keel', mass: 800, centerOfMass: { x: 2, y: 0, z: -4 } },
    { name: 'Mast', mass: 1200, centerOfMass: { x: 5, y: 0, z: 8 } },
    { name: 'Boom', mass: 150, centerOfMass: { x: 1, y: 2, z: 8 } },
    { name: 'Sails', mass: 200, centerOfMass: { x: -1, y: 5, z: 8 } },
    // Add more parts as needed
  ];

export const initialState = {
    totalMass: calculateTotalMass(initialParts),
    parts: initialParts,
    centerOfMass: calculateCenterOfMass(initialParts)
};

const partReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "ADD_PART":
        console.log("ADD_PART", payload);
  
        return {
          ...state,
          parts: payload.parts
        };
      case "DELETE_PART":
        console.log("DELETE_PART", payload);
  
        return {
          ...state,
          parts: payload.parts
        };
      case "EDIT_PART":
        console.log("EDIT_PART", payload);
  
        return {
          ...state,
          parts: payload.parts
        };

        case "SORT_PART":
            console.log("SORT_PART", payload);
      
            return {
              ...state,
              parts: payload.parts
            };

        case "UPDATE_TOTAL_MASS":
            console.log("UPDATE_TOTAL_MASS", payload);
      
            return {
              ...state,
              totalMass: payload.totalMass
        };

        case "UPDATE_CENTER_OF_MASS":
            console.log("UPDATE_CENTER_OF_MASS", payload);
      
            return {
              ...state,
              centerOfMass: payload.centerOfMass
        };

        default:
            throw new Error(`No case for type ${type} found in partReducer.`);
    }

  };

export default partReducer