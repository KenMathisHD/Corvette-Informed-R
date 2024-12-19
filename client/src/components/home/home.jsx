import React, { Component } from "react";
import Slides from "./slides/slides";
import GenerationsDisplay from "./generation-display/generations-display";
import axios from "../../data/services/axiosService";
import * as api from "../../data/apiEndpoints.json";
import "./home.scss";

class Home extends Component {
  state = { genData: [], error: null };

  async componentDidMount() {
    try {
      const { data: genData } = await axios.get(`${api.generations}/`);
      this.setState({ genData: genData });
    } catch (err) {
      this.setState({ error: err.message });
      console.error("Failed to fetch generations:", err);
    }
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    }

    return (
      <div className="container">
        <Slides className="ci-home-slides"></Slides>
        <GenerationsDisplay
          generations={this.state.genData}
          className="ci-home-generations"
        ></GenerationsDisplay>
      </div>
    );
  }
}

export default Home;
