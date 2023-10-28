import { useState, useEffect } from "react";
import BreweryList from "../components/BreweryList";
import Filter from "../components/Filter";
import Statistics from "../components/Statistics";
import BreweryChart from "../components/BreweryChart";
import "./App.css";

function App() {
  const [breweries, setBreweries] = useState(null);
  const [location, setLocation] = useState({ state: "", city: "", name: "" });

  useEffect(() => {
    requestBrewery().catch(console.error);
  }, [location]);

  const requestBrewery = async () => {
    const response = await fetch(
      `https://api.openbrewerydb.org/v1/breweries?country=united_states&by_state=${location.state}&by_city=${location.city}&by_name=${location.name}`
    );
    const json = await response.json();
    if (json == null) {
      alert("fetch failed");
    }
    setBreweries(json);
  };

  const handleLocation = (e) => {
    setLocation({ ...location, [e.target.id]: e.target.value });
    console.log(location)
  };

  return (
    <>
      <h1>List of Breweries in the U.S</h1>
      <BreweryChart />
      <div className="heading">
        <div className="statistics">
          <Statistics location={location}/>
        </div>
        <div className="filter">
          <Filter location={location} onChange={handleLocation} />
        </div>
      </div>
      <div className="breweryList">
        <table>
          <thead>
            <tr>
              <td className="header name">Name</td>
              <td className="header city">City</td>
              <td className="header state">State</td>
              <td className="header details">Details</td>
            </tr>
          </thead>
          <tbody>
            {breweries &&
              Object.entries(breweries).map(([brewery], index) => (
                // eslint-disable-next-line react/jsx-key
                <BreweryList
                  name={breweries[brewery].name}
                  link={breweries[brewery].website_url}
                  city={breweries[brewery].city}
                  state={breweries[brewery].state}
                  index={index}
                  details={breweries[brewery].id}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;