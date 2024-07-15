// import clockName from "./components/clockName";

import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockName from "./components/ClockName";
import ClockTime from "./components/ClockTime";

// Rest of your code

function App() {
  return (
    <center>
      <ClockName></ClockName>
      <ClockHeading></ClockHeading>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;
