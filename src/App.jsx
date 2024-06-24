import { useState } from "react";
import "./App.css";
import Search from "./Search";
import Restaurant from "./Restaurant";
import Card from "./Card";
import Header from "./Header";



function App() {
  
  return (
    <>
      <div className="container flex flex-col items-center m-auto space-y-6">
          <Header />
          <Search />
          <Restaurant />
      
      </div>
    </>
  );
}

export default App;
