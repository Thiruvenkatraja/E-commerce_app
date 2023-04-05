import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { FruitsList } from "../../utils/GETRequests";
import axios from "axios";
const Card = () => (
  <Tilt tiltEnable={false} scale={1.1} transitionSpeed={3500}>
    <div
      style={{
        height: "10rem",
        width: "10rem",
        backgroundColor: "grey",
        borderRadius: "5px",
      }}
    >
      <div>Trending</div>
    </div>
  </Tilt>
);

const Trending = () => {
  const FruitsList = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log("res", res);
    });
  };

  useEffect(() => {
    FruitsList();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card />
    </div>
  );
};

export default Trending;
