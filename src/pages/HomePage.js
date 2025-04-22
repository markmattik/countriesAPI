import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CountryList from '../CountryList';

//Fetch funktsioon, mis toob andmed API-st
const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);
  // Filterime riigid vastavalt otsingusõnale
  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Maailma riigid</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {loading ? <p>Laadin...</p> : <CountryList countries={filtered} />}
    </div>
  );
};

export default HomePage;
