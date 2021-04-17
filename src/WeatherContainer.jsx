import React from 'react'
import { Segment, Grid, GridColumn } from 'semantic-ui-react'

const WeatherContainer = (props) => {
  return (
    <Segment>
      <Grid columns={3} divided>
       <Grid.Column>
         <p>City {props.city}</p>
        </Grid.Column>
        <Grid.Column>
          <p>{parseFloat(props.temperature).toFixed(1)}°C</p>
        </Grid.Column>
        <Grid.Column>
          <p>{props.description.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</p>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default WeatherContainer