import React from 'react';
import Plot from 'react-plotly.js';

const GraphHourlyTemp = (props) => { 
  let hourTemp = []
  let hourTime = []
  let newHours = null
  let date = null
  if(props.data) {
    props.data.forEach(hour => {      
      hourTime.push(hour.dt)
      hourTemp.push(hour.temp)      
    })
  }
  let data = [
    {
    x: hourTime,
    y: hourTemp,
    x: 'date',
    type: 'line',
    //mode: 'lines+markers',
    //marker: {color: 'red'},
  },
]
  
  
    return (
      <Plot
        data={data}
        layout={ {width: 640, height: 480, margin: {l: 20, r: 20, t: 20, b: 20} } }
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
//new Date(hour.dt*1000).getHours()



