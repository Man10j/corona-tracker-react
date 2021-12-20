import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Resultcard from "./components/Resultcard/Resultcard";
import { fetchdata } from "./api";
const App = () => {
  const [state, setState] = useState({
    data: {},
    country: "",
  });
  useEffect(() => {
    (async function () {
      let data = await fetchdata();
      setState({ data });
    })();
  }, []);
  const { data, country } = state;
  return (
    <div className="container">
      <Header />
      <Resultcard data={data}/>
    </div>
  );
};

export default App;
