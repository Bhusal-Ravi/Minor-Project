import "./App.css";
import Login from "./Components/Assets/Login/Login";
//import Register from "./Components/Assets/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import WhatWeOffer from "./Components/Offers/Offers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <WhatWeOffer />
    </div>
  );
}

export default App;
