import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <div className="card">
      <img src={country.flags.png} alt={`${country.name.common} flag`} width="100" />
      <h3>{country.name.common}</h3>
      <Link to={`/country/${country.name.common}`}>Vaata lähemalt</Link>
    </div>
  );
};

export default CountryCard;
