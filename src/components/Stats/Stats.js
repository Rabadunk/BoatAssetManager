import useParts from '../../PartsContext.js';

import './Stats.css';

const Stats = () => {
    const { totalMass, centerOfMass } = useParts();
    return (
        <div className='stats-container'>
            <h3>Boat Stats</h3>
            <div className='stats-val'>
                <h4>Total mass</h4>
                 <div>{totalMass} kg</div>
            </div>
            <div className='stats-val'>
                <h4>Center of mass</h4>
                <div>
                    <div className='stats-com-val'>x: {centerOfMass.x} m</div>
                    <div className='stats-com-val'>y: {centerOfMass.y} m</div>
                    <div className='stats-com-val'>z: {centerOfMass.z} m</div>
                </div>
            </div>
        </div>
    )
}

export default Stats;