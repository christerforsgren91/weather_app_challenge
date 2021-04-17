import React from "react";
import Plot from "react-plotly.js";

const GraphHourlyTemp = (props) => {
  let hourTemp = [];
  let hourTime = [];
  let time = "";
  let date = null;
  if (props.data) {
    props.data.forEach((hour) => {
      date = new Date(hour.dt * 1000);
      time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}`;
      hourTime.push(time);
      hourTemp.push(hour.temp);
    });
  }

  let data = [
    {
      x: hourTime,
      y: hourTemp,
      type: "line",
      fill: "tozeroy",
    },
  ];

  return (
    <Plot
      data={data}
      layout={{
        width: 640,
        height: 320,
        margin: { l: 40, r: 45, t: 20, b: 80 },
        xaxis: { x: "date", tickformat: "%y/%m/%d : %H.%M" },
        yaxis: { ticksuffix: "°C" },
      }}
      config={{ staticPlot: true }}
    />
  );
};

export default GraphHourlyTemp;
