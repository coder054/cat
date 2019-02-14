import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
class Header extends Component {
  state = {
    cityname: "",
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push(`/forecast/${this.state.cityname}`)
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <Link className="navbar-brand" to="/">
          {" "}
          Weather{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="mr-auto" />
          <form
            onSubmit={this.handleSubmit}
            className="form-inline my-2 my-lg-0"
          >
            <input
              value={this.state.cityname}
              onChange={e => this.setState({ cityname: e.target.value })}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search city"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
