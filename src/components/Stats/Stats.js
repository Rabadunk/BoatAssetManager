import useParts from '../../PartsContext.js';

const Stats = () => {
    const { totalMass, centerOfMass } = useParts();
    return (
        <div>
            <div>The total mass: {totalMass}</div>
            <div>The center of mass:</div>
            <div>x: {centerOfMass.x}, y: {centerOfMass.y}, z: {centerOfMass.z}</div>
        </div>
    )
}

export default Stats;