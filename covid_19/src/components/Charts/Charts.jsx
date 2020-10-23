import React,{useState,useEffect} from 'react';
import {fetchDailyDate} from '../../api';
import {Line,bar} from 'react-chartjs-2';

import styles from './Charts.module.css';


const Charts =()=>{
    const [dailyData,setDailyData]=useState([]);

    useEffect(()=>{
        const fetchAPI=async()=>{
            setDailyData(await fetchDailyDate());
        }

     
        console.log(dailyData);
        fetchAPI();
    });

    const lineChart=(
        dailyData.length
        ?(
        <Line
        data={{
            lablels:dailyData(({date})=>date),
            datasets:[{
                data:dailyData(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true,
            },{
                data:dailyData(({deaths})=>deaths),
                label:'Infected',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true,

            }],
        }}
        />) :null
    );

    return(
       <div className={styles.container}>
           {lineChart}
       </div>
    )
}

export default Charts;