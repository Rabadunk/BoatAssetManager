export const calculateCenterOfMass = (dataPoints) => {
    // Initialize variables to store the sums
    let sumMass = 0;
    let sumX = 0;
    let sumY = 0;
    let sumZ = 0;
  
    // Iterate through the points to calculate the sums
    dataPoints.forEach((point) => {
      console.log(point);
      const { name, mass, centerOfMass } = point;
      sumMass += mass;
      sumX += mass * centerOfMass.x;
      sumY += mass * centerOfMass.y;
      sumZ += mass * centerOfMass.z;
    });
  
    // Calculate the center of mass
    const centerX = sumX / sumMass;
    const centerY = sumY / sumMass;
    const centerZ = sumZ / sumMass;
  
    return { x: centerX, y: centerY, z: centerZ };
}