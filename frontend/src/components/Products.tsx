import React from "react";
import { Button, TabsProps } from "antd";
import { Tabs, theme, Divider } from "antd";
import StickyBox from "react-sticky-box";
import { tabItems } from "../constants";

const Products: React.FC = () => {
  return (
    <div
      style={{
        
        height: "60px",
        backgroundColor: "#BCCEF8",
        display: "flex",
        alignItems: "center",
              justifyContent: "space-between",
        padding:"0 20px"
      }}
    >
      {tabItems.map((items) => (
        <Button type="text" style={{ color: "red" }}>
          {items}
        </Button>
      ))}
    </div>
  );
};

export default Products;
