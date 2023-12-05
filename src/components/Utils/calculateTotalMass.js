export const calculateTotalMass = (dataPoints) => {
    // Initialize variable to store the total mass
    let totalMass = 0;
  
    // Iterate through the cards to calculate the total mass
    dataPoints.forEach((point) => {
      totalMass += point.mass;
    });
  
    return totalMass;
}

