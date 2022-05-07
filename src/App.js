import "./App.css";
import React from "react";
import Mycars from "./components/Mycars";

class App extends React.Component {
  //state
  state = {
    title: "Mon catalog voitures",
    color: "red",
  };

  //method

  changeTitle = (event) => {
    this.setState({
      title: "Mon nouveau titre",
    });
  };

  changeByParam = (title) => {
    this.setState({
      title: title,
    });
  };

  changeByBind = (param) => {
    this.setState({
      title: param,
    });
  };

  onChangeByInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.title} />

        <button onClick={this.changeTitle}>Chager le nom dur</button>
        <button
          onClick={(e) => {
            this.changeByParam("Title change by param");
          }}
        >
          By param
        </button>
        <button onClick={this.changeByBind.bind(this, "title By bind")}>
          By Bind
        </button>
        <input type="text" onChange={this.onChangeByInput} />
      </div>
    );
  }
}

export default App;
