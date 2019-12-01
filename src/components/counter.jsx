import React, { Component } from 'react';

class Counter extends Component{
    // this is now controlled component by it's parent Counters and
    // now it just get data and raise an events
    // styles = {
    //     fontSize: 50,
    //     fontWeight: 'bold'
    // };
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // state = {
    //     value: this.props.counter.value,
    //     // tags: ["tag1",'tag2','tag3']
    // };

    // arrow function doesn't rebind this, it's inherited
    // handleIncrement = (product) =>  {
    //     console.log(product);
    //     console.log("Increment clicked!", this);
    //     this.setState({value: this.state.value + 1});
    // };

    //Lifecycle Hook after component is updated (compare with old props)
    //if there are change we can make an ajax request to get new data from the server
    componentDidUpdate(prevProps, prevState) {
        console.log('Counter-Updated');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            //Ajax call to get new data from the server
        }
    }

    //Unmounting phase
    //is called just before component is removed from the DOM
    componentWillUnmount() {
        console.log('Counter-Unmount');
    }

    render(){
        //console.log('props', this.props);
        console.log("Counter-Rendered");
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn-danger btn-sm m-2"
                >
                    Delete
                </button>
                {/*<ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>*/}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

}
export default Counter;
