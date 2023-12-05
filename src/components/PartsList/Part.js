/**
 * Part object
 * 
 * Represents a part of a boat with three attributes: name, mass, and center of mass coordinates.
 * @property {string} name - The name of the part.
 * @property {number} mass - The mass of the part.
 * @property {Object} centerOfMass - The center of mass coordinates as an object {x, y, z}.
 */

const Part = ({ name, mass, centerOfMass }) => {
    return {name: name, mass: mass, centerOfMass: centerOfMass};
}

export default Part;