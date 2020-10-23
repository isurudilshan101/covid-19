import React from 'react';

//  import Cards from './components/Cards/Cards';
//  import Charts from './components/Charts/Charts';
//  import CounterPicker from './components/CounterPicker/CounterPicker';

import {Cards,Charts,CounterPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';



class App extends React.Component{

    state={
      data:{},
    }


    async componentDidMount(){
        const fetchedData=await fetchData();
       this.setState({data:fetchedData});
    }

    render(){

        const {data}=this.state;
        return(
            <div className={styles.container}>
                <Cards data={data} />
                <Charts/>
                <CounterPicker/>
            </div>
        );
    }
}

export default App;