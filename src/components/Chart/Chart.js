import React, {useState, useEffect} from "react";
import './Chart.css';
import { fetchdailydata } from "../../api";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Chart = ({data:{confirmed,recovered,deaths},country})=>{
    
    const [dailydata, setDailydata] = useState([]);

    useEffect(()=>{
        (async function(){
            setDailydata(await fetchdailydata())
        })();
    },[])
    const lineChart = ( <Line 
        data={{
            labels: dailydata.map(({date})=>date),
            datasets:[{
                data:  dailydata.map(({confirmed})=>confirmed),
                label: 'Infected',
                borderColor: '#ffe259',
                fill:true
            },
            {
                data:dailydata.map(({deaths})=>deaths),
                label: 'deaths',
                borderColor: '#FF0000',
                fill:true
            }
        ]
        }}
    />)
  
    const barChart = (
        confirmed
        ? (
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'people',
                    backgroundColor:['#ffe259', '#0f9b0f', '#FF0000'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]

            }}
            options={{
                plugins: {
                    title: {
                      display: true,
                      text:`Current state in ${country}`,
                    },
                    legend : {display:true},
                  }
            }}
        />
        ) : null
    );
    return(
    
         <div className='chart_container'>
        {country? barChart: lineChart}  
        </div>
    
    )
}
export default Chart;