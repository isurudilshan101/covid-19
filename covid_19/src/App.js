import React from 'react';

//  import Cards from './components/Cards/Cards';
//  import Charts from './components/Charts/Charts';
//  import CounterPicker from './components/CounterPicker/CounterPicker';

 import {Cards,Charts,CounterPicker} from './components';
import styles from './App.module.css';


class App extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <Cards/>
                <Charts/>
                <CounterPicker/>
            </div>
        )
    }
}

export default App;