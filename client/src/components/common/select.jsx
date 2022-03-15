import React, { Component } from "react";
import { capitalizeFirstLetter } from "../../utils/functions";

class Select extends Component {
  render() {
    const { name, value, onChange, dropDownList } = this.props;
    return (
      <select
        className="form-select"
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.currentTarget)}
      >
        <option defaultValue value="">
          {capitalizeFirstLetter(name)}
        </option>
        {dropDownList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
