import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Riigi lehe komponent, mis kuvab valitud riigi andmed
const CountryPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Laadin...</p>;
  if (!country) return <p>Riiki ei leitud.</p>;

  return (
    <div>
      <Link to="/">Tagasi</Link>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt="Flag" width="200" />
      <p><strong>Pealinn:</strong> {country.capital?.[0]}</p>
      <p><strong>Rahvaarv:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Pindala:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Keeled:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'Puudub'}</p>
      <p><strong>Valuutad:</strong> {
        country.currencies
          ? Object.values(country.currencies).map((cur) => `${cur.name} (${cur.symbol})`).join(', ')
          : 'Puudub'
      }</p>
    </div>
  );
};

export default CountryPage;
