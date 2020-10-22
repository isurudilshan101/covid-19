import React from 'react';
import {Card,CardContent, Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards=({data:{confirmed,recovered,death,lastUpdate}})=>{
    console.log(confirmed);
   if(!confirmed){
       return 'Loading...';
       
   }
    return( 
       <div className={styles.container}>
           <Grid container spacing={3} justify="center">
             <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterbotto>Infected</Typography>
                    <Typography variant="h5"> 
                   < CountUp
                    start={0}
                    end={confirmed.value}
                    duration={2.5}
                    separator=","
                   /></Typography>
                    <Typography color="textSecondary">REAL DATE</Typography>
                    <Typography variant="body2">Number of active cases of COVI-19</Typography>
                </CardContent>
            </Grid>  

            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterbotto>Recovered</Typography>
                    <Typography variant="h5"> REAL DATA</Typography>
                    <Typography color="textSecondary">REAL DATE</Typography>
                    <Typography variant="body2">Number of active recoveries from COVI-19</Typography>
                </CardContent>
            </Grid>  

            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterbotto>Deaths</Typography>
                    <Typography variant="h5"> REAL DATA</Typography>
                    <Typography color="textSecondary">REAL DATE</Typography>
                    <Typography variant="body2">Number of deaths  coused by COVI-19</Typography>
                </CardContent>
            </Grid>  

           </Grid>
       </div>
    )
}

export default Cards;