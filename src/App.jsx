import React, { Component } from "react";
import axios from "axios";
import { Container, Header, Segment } from 'semantic-ui-react'
import WeatherContainer from './WeatherContainer'
import GraphHourlyTemp from './GraphHourlyTemp'

const getCity = (locationResponse) => {
  if (locationResponse.data.results[0].components.city === undefined) {
    return locationResponse.data.results[0].components.postal_city;
  }
  return locationResponse.data.results[0].components.city;
};

class App extends Component {
  state = {
    city: "",
    temperature: "",
    description: "",
    hourlyData: [
      {
        x: [1, 2, 3],
        y: [2, 6, 3],
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: 'red'},
      },          
    ]
  };

  componentDidMount() {    
    navigator.geolocation.getCurrentPosition(async (position) => {
      const openCageDatakey = process.env.REACT_APP_OPEN_CAGE;
      const openWeatherMapkey = process.env.REACT_APP_OPEN_WEATHER;
      let { latitude, longitude } = position.coords;
      let locationResponse = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${openCageDatakey}`
      );
      let weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,daily,alerts&units=metric&appid=${openWeatherMapkey}`
      );
      let city = getCity(locationResponse);
      this.setState({
        city: city,
        temperature: weatherResponse.data.current.temp,
        description: weatherResponse.data.current.weather[0].description,
      });      
    });
  }

  render() {
    return (
      <Container data-cy='weather-display' text textAlign='center'>
        <Segment inverted>
          <Header>Weather App</Header>
        </Segment>
        <WeatherContainer city={this.state.city} temperature={this.state.temperature} description={this.state.description}/>
        <Segment>
          <GraphHourlyTemp data={this.state.hourlyData}/>
        </Segment>
      </Container>
    );
  }
}

export default App;
