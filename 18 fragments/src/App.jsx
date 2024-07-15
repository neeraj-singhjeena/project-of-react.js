import "./App.css";
import React from "react";
function App() {
  let foodItem = ["dal", "green vegetable", "Roti", "Milk"];
  return (
    <React.Fragment>
      <div>
        <h1>Healthy food</h1>
      </div>
      <hr />
      <hr />
      <ul className="list-group">
        {foodItem.map((item) => {
          <li className="list-group-item">{item}</li>;
        })}
        {/* <li className="list-group-item">Roti</li>
        <li className="list-group-item">Green vegetable</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li> */}
      </ul>
    </React.Fragment>
  );
}

export default App;
