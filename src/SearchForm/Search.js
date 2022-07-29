import React from "react"
import "./Search.css"

export default function Search(props) {
  return (
    <div className="search-comp">
      <label>Search for colleges: </label>
      <input
        type="textarea"
        name="search"
        placeholder="college name"
        value={props.userInput}
        onChange={props.onInputChange}
      />
    </div>
  )
}
