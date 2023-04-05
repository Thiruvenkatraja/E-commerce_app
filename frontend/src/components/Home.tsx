import React from "react";

import Box from "@mui/material/Box";
import { navLinks } from "../constants";
import { Carousel } from "antd";
import Products from "./Products";
export const Home = () => {
  const contentStyle: React.CSSProperties = {
    height: "25rem",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h1 style={contentStyle}>Page 1</h1>
        </div>
        <div>
          <h1 style={contentStyle}>Page 2</h1>
        </div>
        <div>
          <h1 style={contentStyle}>Page 3</h1>
        </div>
        <div>
          <h1 style={contentStyle}>Page 4</h1>
        </div>
      </Carousel>
      <Products />
    </div>
  );
};
