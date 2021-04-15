import React, { Component } from "react";
import axios from'axios'

class App extends Component {
  state = {
    city: '',
    temperature: '',
    description: ''
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( async position => {
      const openCageDatakey = process.env.REACT_APP_OPEN_CAGE
      const openWeatherMapkey = process.env.REACT_APP_OPEN_WEATHER
      let { latitude, longitude } = position.coords
      let locationResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${openCageDatakey}`)
      let weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${openWeatherMapkey}`)      
      this.setState({ 
        city: locationResponse.data.results[0].components.city, 
        temperature: weatherResponse.data.current.temp,
        description: weatherResponse.data.current.weather[0].description
      });
      debugger
    });
  }

  render() {
    return (<div data-cy='weather-display'>
      <p data-cy='location'>
        {this.state.city}
      </p>
      <p data-cy='temp'>  
        {this.state.temperature}
      </p>
      <p data-cy='description'>  
        {this.state.description}
      </p>
    </div>) 
  }
}

export default App;
