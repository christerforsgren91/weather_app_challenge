import React from 'react';
import Plot from 'react-plotly.js';

const GraphHourlyTemp = (props) => { 
  let hourTemp = []
  let hourTime = []
  let year, month, day, hours = null
  let time = ''
  if(props.data) {
    props.data.forEach(hour => {      
      year = new Date(hour.dt*1000).getFullYear()
      month = new Date(hour.dt*1000).getMonth() + 1
      day = new Date(hour.dt*1000).getDate()
      hours = new Date(hour.dt*1000).getHours()
      time = `${year}-${month}-${day} ${hours}`
      hourTime.push(time)      
      hourTemp.push(hour.temp)      
    })
  }
  
  
  let data = [
    {
    x: hourTime,
    y: hourTemp,    
    type: 'line',
    
    //mode: 'lines+markers',
    //marker: {color: 'red'},
  },
]
  
  
    return (
      <Plot
        data={data}
        layout={ {width: 640, height: 320, margin: {l: 40, r: 45, t: 20, b: 80},
        xaxis: { x: 'date', tickformat: '%y/%m/%d : %H.%M' }, 
        yaxis: { ticksuffix: '°C' }
        } }
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



