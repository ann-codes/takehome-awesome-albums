import React from "react";
import { useSearchWord } from "../../context/SearchWordContext";

export const SearchBar = () => {
  const { filter, setFilter } = useSearchWord();

  return (
    <div className="field is-grouped">
      <p className="control is-expanded">
        <input
          className="input is-info is-medium "
          placeholder="Search by artist, album, genre"
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
        />
      </p>
      <p className="control">
        <input
          className="button is-info is-light is-medium "
          type="button"
          name="clear"
          id="clear"
          value="Clear"
          onClick={() => setFilter("")}
        />
      </p>
    </div>
  );
};
