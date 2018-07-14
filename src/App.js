import React from "react";
import Search from "./components/Search";
// import { FormContainer } from "./components/FormContainer";
import ShopifyTable from './components/ShopifyTable';



const App = () => (
  // <div className="row mt-5">
    <div>
    <Search />
    <div >
      <ShopifyTable />
    </div>
  </div>
  
);
console.log ("I am inside APP Component");
export default App;


