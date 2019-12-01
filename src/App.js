import React, { Component }from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component{
    state={
        counters:[
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0},
            {id:5, value:0},
            {id:6, value:0}
        ]

    };
    //Mount phase
    constructor(props){
        super(props);
        console.log("App-Constructor");
    }
    // is called after component is render into the DOM
    // and it's a perfect place to make ajax calls to get data from the server
    componentDidMount() {
        //Ajax call
        console.log("App-Mounted");
    }


    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
    };

    handleReset = () =>{
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleIncrement = (counter) => {
        // console.log(counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters: counters});
    };

    render() {
        console.log("App-Rendered");
        return(
          <React.Fragment>
            <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
              <main className="container">
                 <Counters
                 counters={this.state.counters}
                 onReset={this.handleReset}
                 onIncrement={this.handleIncrement}
                 onDelete={this.handleDelete}
                 />
              </main>
          </React.Fragment>
        );
    }

}

export default App;
