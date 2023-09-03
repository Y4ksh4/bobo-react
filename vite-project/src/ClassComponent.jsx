import React , {Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
      super(props);
  
      // Initialize the component's state
        this.state = {
            count: 0,
        }
    };

    incrementCount = () => {
        this.setState((prevState) => ({
          count: prevState.count + 1,
        }));
    };

    render() {
        return (
          <div>
            <h1>Class Component Example</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={this.incrementCount}>Increment</button>
          </div>
        );
    };

}

export default ClassComponent;
