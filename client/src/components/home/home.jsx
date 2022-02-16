import React, { Component } from "react";
import Slides from "./slides/slides";
import GenerationsDisplay from "./generation-display/generations-display";
import axios from "../../data/services/axiosService";
import * as api from "../../data/apiEndpoints.json";
import "./home.scss";

class Home extends Component {
  state = { genData: [] };

  async componentDidMount() {
    const { data: genData } = await axios.get(`${api.generations}/`);
    console.log(genData);
    this.setState({ genData: genData });
  }

  render() {
    const { genData } = this.state;
    return (
      <div className="container">
        <Slides className="ci-home-slides"></Slides>
        <GenerationsDisplay
          generations={genData}
          className="ci-home-generations"
        ></GenerationsDisplay>
      </div>
    );
  }
}

export default Home;
