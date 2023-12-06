
import { calculateTotalMass } from "./utils/calculateTotalMass";
import { calculateCenterOfMass } from "./utils/calculateCenterOfMass";

const initialParts = [
    { name: 'Hull', mass: 5000, centerOfMass: { x: 0, y: 0, z: -2 } },
    { name: 'Keel', mass: 800, centerOfMass: { x: 0, y: 0, z: -4 } },
    { name: 'Mast', mass: 1200, centerOfMass: { x: 0, y: 0, z: 8 } },
    { name: 'Boom', mass: 150, centerOfMass: { x: 0, y: 2, z: 8 } },
    { name: 'Sails', mass: 200, centerOfMass: { x: 0, y: 5, z: 8 } },
    { name: 'Rudder', mass: 300, centerOfMass: { x: 0, y: 0, z: -6 } },
    { name: 'Winches', mass: 50, centerOfMass: { x: 0, y: 3, z: 2 } },
    { name: 'Deck', mass: 1000, centerOfMass: { x: 0, y: 0, z: 2 } },
    { name: 'Cockpit', mass: 400, centerOfMass: { x: 0, y: 1, z: 4 } },
    { name: 'Bow Sprit', mass: 120, centerOfMass: { x: 0, y: 0, z: 10 } },
    { name: 'Crew Quarters', mass: 700, centerOfMass: { x: 0, y: 0, z: 1 } },
    { name: 'Navigation Station', mass: 80, centerOfMass: { x: 0, y: 2, z: 6 } },
    { name: 'Water Ballast Tanks', mass: 600, centerOfMass: { x: 0, y: 0, z: -3 } },
    { name: 'Hydraulic Systems', mass: 120, centerOfMass: { x: 0, y: 4, z: 2 } },
    { name: 'Electrical Systems', mass: 90, centerOfMass: { x: 0, y: 0, z: 3 } },
    { name: 'Carbon Fiber Mast Sections', mass: 350, centerOfMass: { x: 0, y: 0, z: 9 } },
    { name: 'Carbon Fiber Rigging', mass: 180, centerOfMass: { x: 0, y: 0, z: 8 } },
    { name: 'Satellite Communication System', mass: 40, centerOfMass: { x: 0, y: 3, z: 5 } },
    { name: 'Emergency Life Rafts', mass: 120, centerOfMass: { x: 0, y: 0, z: 1 } },
  ];

export const initialState = {
    totalMass: calculateTotalMass(initialParts),
    parts: initialParts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)),
    centerOfMass: calculateCenterOfMass(initialParts),
    selectedIndex: 0,
    readOnly: false
};

const partReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "UPDATE_PART":
        console.log("UPDATE_PART", payload);
  
        return {
          ...state,
          parts: payload.parts
        };

      case "DELETE_PART":
          console.log("DELETE_PART", payload);
    
          return {
            ...state,
            parts: payload.parts,
            selectedIndex: payload.selectedIndex
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

        case "UPDATE_SELECTED_INDEX":
          console.log("UPDATE_SELECTED_INDEX", payload);
    
          return {
            ...state,
            selectedIndex: payload.selectedIndex
        };

        case "TOGGLE_READ_ONLY":
          console.log("TOGGLE_READ_ONLY", payload);
    
          return {
            ...state,
            readOnly: payload.readOnly
        };

        default:
            throw new Error(`No case for type ${type} found in partReducer.`);
    }

  };

export default partReducer