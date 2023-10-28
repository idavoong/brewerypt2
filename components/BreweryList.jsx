/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BreweryList = ({ name, link, city, state, index, details }) => {
  return (
    <tr key={index}>
      <td className="name">
        <a href={link}>{name}</a>
      </td>
      <td className="city">{city}</td>
      <td className="state">{state}</td>
      <td className="details">
        <Link to={`/breweryDetails/${details}`} key={details}>
          Additional Details
        </Link>
      </td>
    </tr>
  );
};

export default BreweryList;
