import React, { Component } from "react";
import Top from "./Top";
import API from "../helpers/API";
import Card from "./Card";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantArray: null
    };
  }

  async componentDidMount() {
    let dataObjects = await API.get("/top");
    let data = dataObjects.data;
    this.setState({
      restaurantArray: data
    });
  }
  render() {
    return (
      <div>
        <Top />
        <Card props={this.state.restaurantArray} />
      </div>
    );
  }
}
