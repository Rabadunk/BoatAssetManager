export const calculateTotalMass = (dataPoints) => {
    // Initialize variable to store the total mass
    let totalMass = 0;
  
    // Iterate through the points to calculate the total mass
    dataPoints.forEach((point) => {
      totalMass += Number(point.mass);
    });
  
    return totalMass;
}

