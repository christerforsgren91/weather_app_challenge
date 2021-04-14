import React, { Component } from "react";
import axios from'axios'

class App extends Component {
  state = {
    city: '',
    temperature: ''
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( async position => {
      let { latitude, longitude } = position.coords
      let locationResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=e6f4c46ac96349659a0e831752fcdd1f`)
      let weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=dfc7df90d3884a5f7c441896633d3aee`)      
      this.setState({ city: locationResponse.data.results[0].components.city, temperature: weatherResponse.data.current.temp});
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
    </div>) 
  }
}

export default App;
