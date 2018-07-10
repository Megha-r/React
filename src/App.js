import React from "react";
import List from "../src/components/List";
import Form from "../src/components/Form";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form  />
    </div>
  </div>
);
console.log ("I am inside APP Component");
export default App;
