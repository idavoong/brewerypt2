import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BreweryDetail = () => {
  const [fullDetails, setFullDetails] = useState(null);

  let params = useParams();

  useEffect(() => {
    const getBrewDetail = async () => {
      const breweries = await fetch(
        `https://api.openbrewerydb.org/v1/breweries/${params.id}`
      );
      const breweriesJson = await breweries.json();
        console.log(breweriesJson)
      setFullDetails(breweriesJson);
    };

    getBrewDetail().catch(console.error);
  }, []);

  return (<>
    {fullDetails && (
      <>
        <h1>{fullDetails.name}</h1>
        <h3>{fullDetails.street}</h3>
        <h3>{fullDetails.city}, {fullDetails.state} {fullDetails.postal_code}</h3>
        <h3>Brewery type: {fullDetails.brewery_type}</h3>
        <h3>Phone Number: {fullDetails.phone}</h3>
        <h3><a href={fullDetails.website_url}>Website Link</a></h3>
      </>
    )}
  </>);
};

export default BreweryDetail;
