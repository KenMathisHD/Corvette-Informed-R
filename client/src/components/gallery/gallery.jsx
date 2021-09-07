import React, { Component } from "react";
import { searchOptions, getGalleryImages } from "../../data/galleryService";
import { paginate } from "../../data/paginate";
import Pagination from "./pagination";
import Select from "../common/select";
import * as api from "../../data/apiEndpoints.json";

class Gallery extends Component {
  state = {
    images: [],
    pageSize: 20,
    currentPage: 1,
    searchParams: [],
    searchResults: [],
    options: {
      type: "",
      year: "",
      color: "",
      submodel: "",
      body: "",
    },
    shownImages: [],
    selectedImage: "",
  };

  async componentDidMount() {
    const { data: images } = await getGalleryImages(`${api.gallery}`);
    const selectedImage = images[0].url;
    this.setState({ images: images, selectedImage: selectedImage });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleReset = () => {
    const options = { type: "", year: "", color: "", submodel: "", body: "" };
    this.setState({
      options,
      currentPage: 1,
      searchParams: [],
      searchResults: [],
    });
  };

  handleSearch = (options) => {
    const { images } = this.state;
    let results = [...images];
    const searchParams = [];

    Object.entries(options).forEach(([value]) => {
      if (options[value]) {
        results = [...results.filter((y) => y[value] === options[value])];
        searchParams.push(options[value]);
      }
    });
    this.setState({ searchParams, searchResults: results, options });
  };

  updateOptions = (target, dropList) => {
    const { name, value } = target;
    const options = { ...this.state.options };
    if (dropList.indexOf(value) === -1) {
      options[name] = "";
    } else {
      options[name] = value;
    }

    this.handleSearch(options);
  };

  renderSelect(name, dropDownList) {
    const { options } = this.state;

    return (
      <Select
        name={name}
        value={options[name]}
        onChange={this.updateOptions}
        dropDownList={dropDownList}
      ></Select>
    );
  }

  handleImageSelect = (imageUrl) => {
    this.setState({ selectedImage: imageUrl });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      images: allImages,
      searchParams,
      searchResults,
    } = this.state;

    const filtered = searchParams.length > 0 ? searchResults : allImages;
    const images = paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, data: images };
  };

  render() {
    const { pageSize, currentPage, selectedImage } = this.state;
    const { totalCount, data } = this.getPageData();

    return (
      <div className="gallery-cont">
        <h1>Corvette Gallery</h1>
        <div className="currentImage">
          <div
            style={{
              backgroundImage: `url(${
                !selectedImage
                  ? "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-chevrolet-corvette-lead2-1571234772.jpg?crop=0.837xw:0.627xh;0.0577xw,0.219xh&amp;resize=1200:*"
                  : selectedImage
              })`,
            }}
          ></div>
        </div>
        <div className="drop-cont">
          <button className="btn-danger" onClick={this.handleReset}>
            Reset
          </button>

          {this.renderSelect("type", searchOptions("type", data))}
          {this.renderSelect("year", searchOptions("year", data))}
          {this.renderSelect("color", searchOptions("color", data))}
          {this.renderSelect("submodel", searchOptions("submodel", data))}
          {this.renderSelect("body", searchOptions("body", data))}

          {/* <button className="btn-primary" onClick={this.handleSearch}>
            Search
          </button> */}
          <span className="imageCounter">{totalCount} Images</span>
        </div>
        <div className="gallery-item-cont">
          {data.map((image, index) => (
            <div
              key={image.alt}
              className="gallery-item"
              alt={image.alt}
              style={{ backgroundImage: `url(${image.url})` }}
              index={index}
              onClick={() => this.handleImageSelect(image.url)}
            ></div>
          ))}
        </div>
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        ></Pagination>
      </div>
    );
  }
}

export default Gallery;
