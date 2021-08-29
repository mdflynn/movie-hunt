import React, { useState, Dispatch, SetStateAction } from "react";

const SearchBar: React.FC<{
  search: Dispatch<SetStateAction<any>>;
  criteria: string;
}> = ({ search, criteria }) => {
  const handleSearchMovies = (e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  };

  return (
    <form>
      <input
        className="form-field"
        placeholder="Search For A Movie Title"
        type="text"
        onChange={handleSearchMovies}
        value={criteria}
      />
    </form>
  );
};

export default SearchBar;
