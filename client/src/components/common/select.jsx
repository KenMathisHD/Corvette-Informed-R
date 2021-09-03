import React, { Component } from "react";

class Select extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const { name, value, onChange, dropDownList } = this.props;
    return (
      <select
        className="form-select"
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.currentTarget, dropDownList)}
      >
        <option defaultValue>{this.capitalizeFirstLetter(name)}</option>
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
