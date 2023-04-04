import React from "react";
import { Layout, theme, Button } from "antd";
import { navLinks } from "../constants";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "#FAF7F0",
        }}
      >
        <div>Logo</div>
        <div>
          {navLinks.map((links) => (
            <Button type="text">{links}</Button>
          ))}
        </div>
        <div>User</div>
      </Header>
    </Layout>
  );
};

export default Navbar;
