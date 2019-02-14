import React, { Component } from "react"
import axios from "axios"
import randomCities from "../data/randomCities"
import { config } from "../data/config"
import { convertKelvinToCelsius } from "../helpers"
import {Link} from 'react-router-dom'


class Home extends Component {
  state = {
    weatherList: [],
  }
  componentWillMount() {
    let requestList = []
    for (let i = 0; i < randomCities.length; i++) {
      let { name, country } = randomCities[i]
      requestList.push(
        axios.get(
          `${config.root_url_current_weather}?appid=${
            config.app_key
          }&q=${name},${country}`
        )
      )
    }

    Promise.all(requestList)
      .then(values => {
        
        this.setState({ weatherList: values })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.weatherList.length && this.state.weatherList
              ? this.state.weatherList.map((city, key) => (
                  <OneRow city={city} key={key}></OneRow>
                ))
              : null
            }
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Home

const OneRow = ({city: { data: {name, main: {humidity, temp, pressure} } }  }) => (

  <tr>
    <td> <Link to={`/forecast/${name}`} > {name} </Link> </td>
    <td> { convertKelvinToCelsius(temp) } </td>
    <td> {pressure} </td>
    <td> {humidity} </td>
  </tr>
)