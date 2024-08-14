import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherAPI from "./API/WeatherAPI.js";
import Current from "./components/Current.jsx";
import InputForm from "./components/InputForm.jsx";
import CurrentDetails from "./components/CurrentDetails.jsx";

function App() {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("")

  async function fetchData() {
    try {
      setWeather({ ...weather, ...(await WeatherAPI.getWeather(query)) });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Current weather={weather}/>
      <InputForm query={query} setQuery={setQuery} updateFnc={fetchData}/>
      <CurrentDetails weather={weather}/>
    </div>
  );
}

export default App;
