import React, { useState } from "react";

const SearchBar = () => {
  const [searchCriteria, setSearchCriteria] = useState<string>("");

  const handleSearchMovies = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCriteria(e.target.value);
  };

  return (
    <form>
      <input
        className="form-field"
        placeholder="Search For A Movie Title"
        type="text"
        onChange={handleSearchMovies}
        value={searchCriteria}
      />
    </form>
  );
};

export default SearchBar;
