/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Statistics = ({ location }) => {
  const [brewNum, setBrewNum] = useState(null);
  const [stateBrewNum, setStateBrewNum] = useState(null);
  const [cityBrewNum, setCityBrewNum] = useState(null);

  useEffect(() => {
    requestBrewNum().catch(console.error);
    if (location.state == "") {
      setStateBrewNum(null);
    } else {
      requestStateNum().catch(console.error);
    }
    if (location.city == "") {
      setCityBrewNum(null);
    } else {
      requestCityNum().catch(console.error);
    }
  }, [location]);

  const requestBrewNum = async () => {
    const request = await fetch(
      `https://api.openbrewerydb.org/v1/breweries/meta?by_country=united_states`
    );
    const json = await request.json();
    if (json == null) {
      alert("request failed");
    }
    setBrewNum(json);
  };

  const requestStateNum = async () => {
    const request = await fetch(
      `https://api.openbrewerydb.org/v1/breweries/meta?by_country=united_states&by_state=${
        location.state ? location.state : null
      }`
    );
    const json = await request.json();
    if (json == null) {
      alert("request failed");
    }
    setStateBrewNum(json);
  };

  const requestCityNum = async () => {
    const request = await fetch(
      `https://api.openbrewerydb.org/v1/breweries/meta?by_country=united_states&by_state=${
        location ? location.state : null
      }&by_city=${location ? location.city : null}`
    );
    const json = await request.json();
    if (json == null) {
      alert("request failed");
    }
    setCityBrewNum(json);
  };

  return (
    <div>
      <h2>Statistics</h2>
      <h3 className="label">
        Breweries in the U.S: <span>{brewNum && brewNum.total}</span>
      </h3>
      <h3 className="label">
        Breweries in your state:{" "}
        <span>{stateBrewNum ? stateBrewNum.total : "choose a state"}</span>
      </h3>
      <h3 className="label">
        Breweries in your city:{" "}
        <span>{cityBrewNum ? cityBrewNum.total : "choose a city"}</span>
      </h3>
    </div>
  );
};

export default Statistics;