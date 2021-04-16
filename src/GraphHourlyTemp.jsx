import React from 'react';
import Plot from 'react-plotly.js';

const GraphHourlyTemp = (props) => {  
    return (
      <Plot
        data={props.data}
        layout={ {width: 640, height: 480, margin: {l: 0, r: 0, t: 0, b: 20} } }
        config={ {staticPlot: true} }        
      />
    );  
}

export default GraphHourlyTemp

/*
[
  {
    x: [1, 2, 3],
    y: [2, 6, 3],
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: 'red'},
  },          
]
*/



