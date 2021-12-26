import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Resultcard from "./components/Resultcard/Resultcard";
import Countrypicker from "./components/Countrypicker/Countrypicker";
import Chart from "./components/Chart/Chart";
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

  const handlecountrypicker = async (country) => {
    const data = await fetchdata(country);
    setState({ data, country: country });
  };

  const { data, country } = state;
  return (
    <div className="container">
      <Header />
      <Resultcard data={data} />
      <Countrypicker handlecountrypicker={handlecountrypicker} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
