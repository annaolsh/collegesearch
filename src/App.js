import React, { useState, useEffect } from "react";
import './App.css';
import Search from './SearchForm/Search';
import Map from "./Map/Map";
import Axios from "axios";

function App() {

  const [userInput, setUserInput] = useState("");
  const [colleges, setColleges] = useState([]);

  function handleInputChange(event) {
    setUserInput(event?.target.value);
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (userInput) {
        searchColleges();
      }
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [userInput]);

  function searchColleges() {
    const apiKey = "&api_key=X7jq0SMDNZNwIjnOu1WffzeXCZygoGVAJDQXv8xZ";
    const baseUrl =
      "https://api.data.gov/ed/collegescorecard/v1/schools.json?school.name=";
    const params = "&fields=school.name,location";
    Axios.get(baseUrl + userInput + params + apiKey).then(
      res => {
        if (res.data.results.length) {
          setColleges(res.data.results);
        }
      }
    );
  }

  return (
    <div className="container">
    <header>
      <h1>College Locator</h1>
    </header>
    <main>
      <Search userInput={userInput} onInputChange={handleInputChange} />;
      <Map />
    </main>
    <footer>Developed by Anna O.</footer>
  </div>
  );
}

export default App;
