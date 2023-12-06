export const calculateCenterOfMass = (dataPoints) => {
    // Initialize variables to store the sums
    let sumMass = 0;
    let sumX = 0;
    let sumY = 0;
    let sumZ = 0;
  
    // Iterate through the points to calculate the sums
    dataPoints.forEach((point) => {
      const { name, mass, centerOfMass } = point;
      const massNum = Number(mass);
      sumMass += massNum;
      sumX += massNum * Number(centerOfMass.x);
      sumY += massNum * Number(centerOfMass.y);
      sumZ += massNum * Number(centerOfMass.z);
    });
  
    // Calculate the center of mass
    const centerX = sumX / sumMass;
    const centerY = sumY / sumMass;
    const centerZ = sumZ / sumMass;
  
    return { x: centerX.toFixed(1), y: centerY.toFixed(1), z: centerZ.toFixed(1)};
}