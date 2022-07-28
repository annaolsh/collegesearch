import React from "react";
import "./Search.css";

export default function Search(props) {
  return (
    <div>
      <label hidden>College Search</label>
      <input
        type="textarea"
        name="search"
        placeholder="college name"
        value={props.userInput}
        onChange={props.onInputChange}
      />
    </div>
  );
}
