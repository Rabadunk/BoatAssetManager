import React, {useState, useEffect} from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import useParts from '../../PartsContext';
import './BubbleChart.css';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BubbleChart = () => {
  const { parts, totalMass, centerOfMass } = useParts();

  const options = {
    backgroundColor: "transparent",
    height: 500,
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: 'Center Of Mass on YZ Plane',
      fontSize: 30
    },
    axisX: {
      title: 'Y-axis (m)',
      minimum: -2.50,
      maximum: 2.50,
    },
    axisY: {
      title: 'Z-axis (m)',
      minimum: -10,
      maximum: 26.5,
    },
    data: [
      {
        type: 'bubble',
        name: "Components",
        showInLegend: true,
        toolTipContent: '<b>{name}</b><br/>X: {z} m<br/>Y: {x} m<br/>Z: {y} m<br/>Mass: {mass} kg',
        dataPoints: parts.map((part) => {
          let datapoint = {
            name: part.name,
            mass: part.mass,
            x: part.centerOfMass.y,
            y: part.centerOfMass.z,
            z: part.centerOfMass.x,
            markerColor: "rgba(0, 0, 1000, 0.5)",
        }
        
        return datapoint; }),

      },
      {
        type: 'bubble',
        name: "Yacht",
        showInLegend: true,
        toolTipContent: '<b>{name}</b><br/>X: {z} m<br/>Y: {y} m<br/>Z: {x} m<br/>Mass: {mass} kg',
        dataPoints: [{
            name: "Boat",
            mass: Number(totalMass),
            x: Number(centerOfMass.y),
            y: Number(centerOfMass.z),
            z: Number(centerOfMass.x),
            markerColor: "rgba(1000, 0, 0, 1)",
        }]
      }
    ],
  };

  return (

    <div className="bubble-chart-container">
      <CanvasJSChart key={parts.toString()} options={options} />
    </div>


  );
};

export default BubbleChart;