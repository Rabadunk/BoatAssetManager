import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import useParts from '../PartsContext';
import './styles.css';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;



const BubbleChart = () => {
  const { parts, addPart, editPart, deletePart, sortPart } = useParts();


  const options = {
    backgroundColor: "transparent",
    height: 500,
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: 'Center Of Mass on Z-Y Plane',
    },
    axisX: {
      title: 'Z-axis',
      minimum: -250,
      maximum: 250,
    },
    axisY: {
      title: 'Y-axis',
      minimum: -250,
      maximum: 250,
    },
    data: [
      {
        type: 'bubble',
        toolTipContent: '<b>{name}</b><br/>X: {z}<br/>Y: {y}<br/>Z: {x}<br/>Mass: {mass}',
        dataPoints: parts.map((part) => {
          let datapoint = {
            name: part.name,
            mass: part.mass,
            x: part.centerOfMass.z,
            y: part.centerOfMass.y,
            z: part.centerOfMass.x
        }
        
        return datapoint; }),
      },
    ],
  };

  return (
    <div className="bubble-chart-container">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default BubbleChart;