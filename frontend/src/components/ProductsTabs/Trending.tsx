import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { FruitsList } from "../../utils/GETRequests";
import axios from "axios";
import { Space, Select, Card } from "antd";
const { Meta } = Card;

const Cards = () => {
  return (
    <Tilt tiltEnable={false} scale={1.02} transitionSpeed={3500}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      {/* <div
      style={{
        height: "16rem",
        width: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#bccef796",
        borderRadius: "5px",
        padding: "1rem",
      }}
    >
      <img
        style={{ width: "15rem", height: "8rem", borderRadius: "10px" }}
        alt=""
        src="https://wallpaperaccess.com/full/1537315.jpg"
      />
      <div>Trending</div>
      <div>Price</div>
      <Space>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          //   onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Space>
    </div> */}
    </Tilt>
  );
};

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
      <Cards />
    </div>
  );
};

export default Trending;
