import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchcountries } from "../../api";
import "./Countrypicker.css";

const Countrypicker = (props) => {
  const [fetchedCountry, setFetchedCountry] = useState([]);

  useEffect(() => {
    (async function () {
      setFetchedCountry(await fetchcountries());
    })();
  }, []);

  return (
    <div className="formControl">
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(event) => {
            props.handlecountrypicker(event.target.value);
          }}
        >
          <option value="">Global</option>

          {fetchedCountry.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};
export default Countrypicker;
