import React, { Component } from "react";
import {
  searchOptions,
  getGalleryImages,
} from "../../data/services/galleryService";
import Pagination from "./pagination/pagination";
import Select from "../common/select";
import * as api from "../../data/apiEndpoints.json";
import { paginate } from "./../../utils/functions";

import "./gallery.scss";

class Gallery extends Component {
  state = {
    images: [],
    imgsLoaded: false,
    pageSize: 20,
    currentPage: 1,
    searchResults: [],
    options: {},
    shownImages: [],
    selectedImage: {},
  };

  async componentDidMount() {
    const { data: images } = await getGalleryImages(`${api.gallery}`);
    this.setState({
      images,
      selectedImage: { url: images[0].url, alt: images[0].alt },
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page, imgsLoaded: false });
  };

  handleReset = () => {
    this.setState({
      options: {},
      currentPage: 1,
      searchResults: [],
    });
  };

  handleSearch = (options) => {
    let searchResults = [...this.state.images];

    for (const prop in options) {
      searchResults = [
        ...searchResults.filter((y) => y[prop] === options[prop]),
      ];
    }
    this.setState({ searchResults, options });
  };

  updateOptions = (target) => {
    const options = { ...this.state.options };
    if (!target.value) {
      delete options[target.name];
    } else {
      options[target.name] = target.value;
    }

    this.handleSearch(options);
  };

  renderSelect(name, dropDownList, index) {
    const { options } = this.state;

    return (
      <Select
        name={name}
        value={options[name] ? options[name] : name}
        onChange={this.updateOptions}
        dropDownList={dropDownList}
        key={index}
      ></Select>
    );
  }

  handleImageSelect = (imageUrl, imageAlt) => {
    this.setState({ selectedImage: { url: imageUrl, alt: imageAlt } });
  };

  getPageData = () => {
    const { pageSize, currentPage, images, searchResults } = this.state;

    const filtered = searchResults.length > 0 ? searchResults : images;
    const pageImages = paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, data: pageImages, filtered };
  };

  isLoaded = (imgLength, dataLength) => {
    if (imgLength === dataLength) {
      this.setState({ imgsLoaded: true });
    }
  };

  render() {
    const { pageSize, currentPage, selectedImage, imgsLoaded } = this.state;
    const { totalCount, filtered, data } = this.getPageData();
    const imgsLoadedCount = [];

    return (
      <div className="gallery-cont">
        <h1>Corvette Gallery</h1>
        <div className="current-image">
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            style={{ display: selectedImage ? "block" : "none" }}
          />
        </div>
        <div className="drop-cont">
          <button className="btn-danger" onClick={this.handleReset}>
            Reset
          </button>

          {["type", "year", "color", "submodel", "body"].map(
            (selector, index) =>
              this.renderSelect(
                selector,
                searchOptions(selector, filtered),
                index
              )
          )}

          <span className="image-counter">{totalCount} Images</span>
        </div>
        <div className="gallery-item-cont">
          {data.map((image, index) => {
            return (
              <div
                className="gallery-item"
                key={index}
                style={imgsLoaded ? {} : { display: "none" }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  index={index}
                  onClick={() => this.handleImageSelect(image.url, image.alt)}
                  onLoad={() => {
                    imgsLoadedCount.push(index);
                    this.isLoaded(imgsLoadedCount.length, data.length);
                  }}
                />
              </div>
            );
          })}
          <div className="span" style={imgsLoaded ? { display: "none" } : {}}>
            <div className="dashboard"></div>
          </div>
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
