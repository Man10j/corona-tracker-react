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

export const fetchdailydata = async()=>{
  try{
    let {data} = await axios.get(`${url}/daily`);
    const modifiedData = data.map((moddata)=>({
      confirmed:moddata.confirmed.total,
      deaths:moddata.deaths.total,
      date:moddata.reportDate,
  }))
  return modifiedData;
  }
  catch(err){
    console.log(err)
  }
}

export const fetchcountries =  async()=>{
  try{
      let {data : {countries}} = await axios.get(`${url}/countries`)
     
      return countries.map((country)=> country.name);
  }
  catch(err){
    console.log(err)
  }
}