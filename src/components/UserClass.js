import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  async componentDidMount() {
    // any fech call or api call can be made here
    this.interval = setInterval(() => {
      console.log("setInterval called");
    }, 1000);
  }

  componentDidUpdate() {
    // this will be called when the state or props changes after re-rendering the component
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    // this will be called when the component is removed from the DOM
    console.log("componentWillUnmount called");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1> User Class Component </h1>
        <h2> This website is hosted by {this.props.name} </h2>
        <h2> This website is about {this.props.site} </h2>
        <h2> Count: {this.state.count} </h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase Count
        </button>
        <h2> Count1: {this.state.count1} </h2>
      </div>
    );
  }
}

export default UserClass;
