import React, { Component } from 'react'
import Counter from "./counter";

class Counters extends  Component{
    render() {
        console.log("Counters-Rendered");
        const { onReset, onDelete, onIncrement, counters} = this.props;
        return(<div>
            <button
                onClick={onReset}
                className="btn-primary btn-sm m-2"
            >
                Reset
            </button>
            {counters.map(counter =>(
                <Counter
                    key={counter.id}
                    onDelete={onDelete}
                    counter={counter}
                    onIncrement={onIncrement}
                    //value={counter.value}
                    //id={counter.id}
             />
            ))}
        </div>)
    }
}

export default Counters;