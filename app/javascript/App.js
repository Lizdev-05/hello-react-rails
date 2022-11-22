import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Greeting from "./pages/Greeting";

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Greeting/>}/>
    </Routes>
    <h2>Treat me well </h2>
  </>
}

export default App;