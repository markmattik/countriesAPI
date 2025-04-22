import React, { useState } from 'react';
import CountryCard from './components/CountryCard';
import Pagination from './components/Pagination';

// CountryList komponent, mis kuvab riikide nimekirja ja lehe numbrid
const CountryList = ({ countries }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(countries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCountries = countries.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="grid">
        {currentCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CountryList;
