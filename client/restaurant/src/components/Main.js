import React, { Component } from "react";
import Top from "./Top";
import API from "../helpers/API";

export default class Main extends Component {
  async componentDidMount() {
    let dataObjects = await API.get("/top");
    let data = dataObjects.data;
    console.log(data);
    for (const restaurant of data) {
    }
  }
  render() {
    return (
      <div>
        <Top />
      </div>
    );
  }
}
