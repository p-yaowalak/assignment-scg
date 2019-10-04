import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import Card from "./Card";

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      isLoading: true,
      location: "",
      showResult: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  handleChange(event) {
    console.log(this.state.location);
    this.setState({ location: event.target.value });
  }

  getLocation(location) {
    axios
      .get(`http://localhost:5000/scg?location=${location}`)
      .then(response => {
        const restaurants = response.data;
        console.log(restaurants);
        this.setState({ restaurants, isLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSubmit(event) {
    this.getLocation(this.state.location);
    this.setState({ showResult: true })
    event.preventDefault();
  }

  componentDidMount() {
    this.getLocation(this.state.location);
  }

  render() {
    const { restaurants, isLoading, location, showResult } = this.state;
    return (
      <>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">
              Find restaurants in {location === "" ? "..." : location}
            </h1>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
            <Search
              location={location}
              amount={restaurants.length}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <p className="font-weight-bold">
                {showResult && restaurants.length !== 0 && `Result: ${restaurants.length} ${restaurants.length === 1 ? 'restaurant' : 'restaurants'}`}
                {showResult && restaurants.length === 0 && `Result not found`}
              </p>
            </div>
          </div>

          {isLoading ? (
            <div className="row">
              <div className="col-sm">loading</div>
            </div>
          ) : (
            <div className="row">
              {restaurants.map((list, i) => (
                <div
                  className="col-md-6 col-lg-4 d-flex align-items-stretch w-100"
                  key={i}
                >
                  <Card list={list} />
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Restaurants;
