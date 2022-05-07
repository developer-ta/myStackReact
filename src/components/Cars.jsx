import React from "react";

const Cars = (props) => {
  console.log("props: ", props);
  const { children, color } = props;

  if (children) {
    return (
      <div
        className="cars"
        style={{
          backgroundColor: "lightpink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
      >
        <p>Marqur : {children}</p>
        <p>couleur :{color ? color : "néant"}</p>
      </div>
    );
  } else {
    return (
      <div
        className="cars"
        style={{
          backgroundColor: "lightpink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
      >
        <p>pas de data !</p>;
      </div>
    );
  }
};
export default Cars;
