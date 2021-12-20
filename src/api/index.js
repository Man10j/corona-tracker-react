import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchdata = async (country) => {
  let changedurl = url;
  let data;
  if (country) {
    changedurl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changedurl);
    const modifiedData = { confirmed, recovered, deaths, lastUpdate };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
