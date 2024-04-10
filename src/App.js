// import { useState } from "react";
// import "./App.css";
// import FirstComponents from "./UseEffectBasic/FirstComponents";
// import MyComponents from "./UseEffectBasic/MyComponents";
// import Timer from "./UseEffectBasic/Timer";
import UseMemoBasic from "./UseEffectBasic/UseMemoBasic";
// import UseEffBasic from "./UseEffectBasic/UseEffBasic";
// import BasicStateHook from "./components/BasicStateHook";
// import SelectColors from "./components/SelectColors";
// import StateColors from "./components/StateColor";

function App() {
  // To toggle the value of the components

  // const [isVisible, setVisible] = useState(true);

  return (
    <div className="App">
      <UseMemoBasic />
      {/* <Timer /> */}
      {/* <FirstComponents /> // Improtant is to do toggle in react count app
      {isVisible ? <MyComponents /> : <></>}
      <button onClick={() => setVisible(!isVisible)}>Toggle</button> */}
    </div>
  );
}

export default App;
