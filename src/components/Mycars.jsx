import React, { Component } from "react";
import Cars from "./Cars";

class Mycars extends Component {
  //evet f1
  noCopy = () => {
    alert("merci de ne pas copier le texte");
  };
  //evet f1
  addStyle = (event) => {
    if (event.target.classList.contains("styled")) {
      event.target.classList.remove("styled");
    } else {
      event.target.classList.add("styled");
    }
  };

  render() {
    return (
      <div>
        <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>
        <p onCopy={this.noCopy}>event</p>
        <Cars color="red">Ford</Cars>
        <Cars color="green">Mercedes</Cars>
        <Cars>Peaugeot</Cars>
      </div>
    );
  }
}
export default Mycars;
