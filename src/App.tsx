import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Routes } from "./components/Routes";
import { Footer } from "./components/Footer/Footer";
import { SearchWordContext } from "./context/SearchWordContext";

function App() {
  const [filter, setFilter] = useState<string>("");

  console.log(filter);
  return (
    <SearchWordContext.Provider value={{ filter, setFilter }}>
      <div className="bg-whitish">
        <Header />
        <Routes />
        <Footer />
      </div>
    </SearchWordContext.Provider>
  );
}

export default App;
