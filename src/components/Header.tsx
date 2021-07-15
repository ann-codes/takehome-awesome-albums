import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../features/SearchBar/SearchBar";

import { IoIosMusicalNote } from "react-icons/io";

export const Header = () => {
  return (
    <header className="bg-semi">
      <div className="container pure-g">
        <div className="pure-u-1-1 pure-u-lg-3-5">
          <h1 className="logo">
            <Link to="/takehome-awesome-albums/">
              Awesome Albums <IoIosMusicalNote />
            </Link>
          </h1>
          <p className="subtitle is-4">Find the Awesomest Albums</p>
        </div>
        <div className="search-bar pure-u-1-1 pure-u-lg-1-3">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};
