export const initialState = {
    totalMass: 0,
    parts: [
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
    ],
    centerOfMass: {x: 0, y: 0, z: 0}
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