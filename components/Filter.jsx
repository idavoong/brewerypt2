/* eslint-disable react/prop-types */
import { states } from "../src/states.jsx";

const Filter = ({ location, onChange }) => {
  return (
    <div>
      <h2>Filters</h2>
      <form id="filter">
        <label>State: </label>
        <select id="state" value={location.state} onChange={onChange}>
          {states.map((state) => {
            return (
              <option key={state} id="state" value={state}>
                {state}
              </option>
            );
          })}
        </select>
        <label>City: </label>
        <input
          className="input"
          type="text"
          id="city"
          value={location.city}
          onChange={onChange}
        />
        <label>Name: </label>
        <input
          className="input"
          type="text"
          id="name"
          value={location.name}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default Filter;