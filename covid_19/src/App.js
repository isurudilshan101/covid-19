import React from 'react';

//  import Cards from './components/Cards/Cards';
//  import Charts from './components/Charts/Charts';
//  import CounterPicker from './components/CounterPicker/CounterPicker';

 import {Cards,Charts,CounterPicker} from './components';

class App extends React.Component{
    render(){
        return(
            <div>
                <Cards/>
                <Charts/>
                <CounterPicker/>
            </div>
        )
    }
}

export default App;