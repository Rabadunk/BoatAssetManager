
import { calculateTotalMass } from "./utils/calculateTotalMass";
import { calculateCenterOfMass } from "./utils/calculateCenterOfMass";

const initialParts = [
  { name: 'Hull', mass: 5000, centerOfMass: { x: 12.5, y: 0.5, z: -7.5 } },
  { name: 'Keel', mass: 800, centerOfMass: { x: -5, y: 1, z: 20 } },
  { name: 'Mast', mass: 1200, centerOfMass: { x: 8, y: -2, z: -2 } },
  { name: 'Boom', mass: 150, centerOfMass: { x: -9, y: 2, z: 15 } },
  { name: 'Sails', mass: 200, centerOfMass: { x: 14, y: -1.5, z: 5 } },
  { name: 'Rudder', mass: 300, centerOfMass: { x: -6, y: 1.5, z: -8 } },
  { name: 'Winches', mass: 50, centerOfMass: { x: 3, y: -2, z: 18 } },
  { name: 'Deck', mass: 1000, centerOfMass: { x: -10, y: 2, z: -4 } },
  { name: 'Cockpit', mass: 400, centerOfMass: { x: 7, y: -1, z: 12 } },
  { name: 'Bow Sprit', mass: 120, centerOfMass: { x: 0, y: 2.5, z: 0 } },
  { name: 'Crew Quarters', mass: 700, centerOfMass: { x: 4, y: -1.5, z: -9 } },
  { name: 'Navigation Station', mass: 80, centerOfMass: { x: -2, y: 0.5, z: 6 } },
  { name: 'Water Ballast Tanks', mass: 600, centerOfMass: { x: 5, y: 2, z: 25 } },
  { name: 'Hydraulic Systems', mass: 120, centerOfMass: { x: -8, y: -1.5, z: 14 } },
  { name: 'Electrical Systems', mass: 90, centerOfMass: { x: 9, y: 2, z: -5 } },
  { name: 'Carbon Fiber Mast Sections', mass: 350, centerOfMass: { x: 1, y: 0.5, z: 8 } },
  { name: 'Carbon Fiber Rigging', mass: 180, centerOfMass: { x: -3, y: -1, z: 10 } },
  { name: 'Satellite Communication System', mass: 40, centerOfMass: { x: 6, y: 1.5, z: 21 } },
  { name: 'Emergency Life Rafts', mass: 120, centerOfMass: { x: -7, y: 0.5, z: -3 } },
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
          parts: payload.parts,
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