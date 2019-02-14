import React, { Component } from "react"
import axios from "axios"
import { config } from "../data/config"
import moment from "moment"
import { convertKelvinToCelsius } from "../helpers"
import update from "immutability-helper"

const LineChart = require("react-chartjs").Line

class ForecastOneCity extends Component {
  state = {
    loaded: false,
    dataForecast: {},
    day: "today",
    chartData: {
      labels: [
        "00:00",
        "03:00",
        "06:00",
        "09:00",
        "12:00",
        "15:00",
        "18:00",
        "21:00",
      ],
      datasets: [
        {
          label: "Temperature",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [1, 1, 1, 1, 1, 1, 1, 1],
        },
        {
          label: "Humidity",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [1, 1, 1, 1, 1, 1, 1, 1],
        },
      ],
    },
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the cityname has changed
    if (prevProps.match.params.cityname !== this.props.match.params.cityname) {
      this.fetchData()
    }
  }

  async fetchData() {
    this.setState({ loaded: false })
    let today = moment().format("YYYY-MM-DD")
    let day2 = moment(new Date())
      .add(1, "days")
      .format("YYYY-MM-DD")
    let day3 = moment(new Date())
      .add(2, "days")
      .format("YYYY-MM-DD")
    let day4 = moment(new Date())
      .add(3, "days")
      .format("YYYY-MM-DD")
    let day5 = moment(new Date())
      .add(4, "days")
      .format("YYYY-MM-DD")

    this.setState({ today, day2, day3, day4, day5 })

    let cityname = this.props.match.params.cityname
    console.log("fetch data for" + cityname)

    try {
      let forecastData = await axios.get(
        `${config.root_url_5days_forecast}?appid=${
          config.app_key
        }&q=${cityname}`
      )
      this.setState({ dataForecast: forecastData })
      this.caculateData()
      this.setState({ show: true })
      this.setState({ loaded: true })
      this.setState({ cityNotFound: false })
    } catch (err) {
      console.log(err)
      this.setState({ cityNotFound: true, loaded: true })
    }
    console.log(this.state)
  }

  async componentDidMount() {
    console.log("cwm")
    this.fetchData()
  }

  async caculateData() {
    let day = this.state[this.state.day]

    let dataList = this.state.dataForecast.data.list.filter(item => {
      return item.dt_txt.includes(day)
    })

    let tempList = []
    let humidityList = []

    for (let i = 0; i < dataList.length; i++) {
      tempList.push(convertKelvinToCelsius(dataList[i].main.temp))
      humidityList.push(dataList[i].main.humidity)
    }

    if (this.state.day == "today") {
      for (let i = 0; i < 8 - dataList.length; i++) {
        tempList.unshift(null)
        humidityList.unshift(null)
      }
    }

    let newState = update(this.state, {
      chartData: {
        datasets: {
          [0]: { data: { $set: tempList } },
          [1]: { data: { $set: humidityList } },
        },
      },
    })

    this.setState(newState)
  }

  async changeDay(day) {
    await this.setState({ day })
    this.caculateData()
  }

  renderContent() {
    if (!this.state.loaded) {
      return <div>Fetching data...</div>
    } else {
      if (this.state.cityNotFound) {
        return <div>City not found</div>
      } else {
        return (
          <div>
            <p className="title">
              Weather Forecast for{" "}
              <span className="cityname">
                {this.props.match.params.cityname}
              </span>{" "}
              in 5 days
            </p>
            {this.state.show ? (
              <LineChart
                data={this.state.chartData}
                options={config.chart_option}
                width="900"
                height="450"
              />
            ) : (
              <div> Loading... </div>
            )}

            <div>
              <button
                onClick={() => {
                  this.changeDay("today")
                }}
                className="btn btn-info mr-2"
              >
                {" "}
                {this.state.today}{" "}
              </button>
              <button
                onClick={() => {
                  this.changeDay("day2")
                }}
                className="btn btn-info mr-2"
              >
                {" "}
                {this.state.day2}{" "}
              </button>
              <button
                onClick={() => {
                  this.changeDay("day3")
                }}
                className="btn btn-info mr-2"
              >
                {" "}
                {this.state.day3}{" "}
              </button>
              <button
                onClick={() => {
                  this.changeDay("day4")
                }}
                className="btn btn-info mr-2"
              >
                {" "}
                {this.state.day4}{" "}
              </button>
              <button
                onClick={() => {
                  this.changeDay("day5")
                }}
                className="btn btn-info mr-2"
              >
                {" "}
                {this.state.day5}{" "}
              </button>
            </div>

            <div>
              {" "}
              Day: {this.state[this.state.day]} - ({this.state.day}){" "}
            </div>
          </div>
        )
      }
    }
  }

  render() {
    return <div className="ForecastOneCity-wrapper">{this.renderContent()}</div>
  }
}

export default ForecastOneCity
