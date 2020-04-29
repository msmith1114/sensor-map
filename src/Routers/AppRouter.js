import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import SensorView from "../Components/SensorView";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const AppRouter = () => {
  const [current, setCurrent] = useState("0");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[current]}>
            <Menu.Item key="0" onClick={handleClick}>
              <a href="/">Dashboard</a>
            </Menu.Item>
            <Menu.Item key="1" onClick={handleClick}>
              <a href="/about">About</a>
            </Menu.Item>
            <Menu.Item key="2" onClick={handleClick}>
              <a href="/topics">Topics</a>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "50px 50px" }}>
          <Switch>
            <Route path="/about">
              <p>About Test</p>
            </Route>
            <Route path="/topics">
              <p>Topics Test</p>
            </Route>
            <Route path="/devices/:id" component={SensorView} />
            <Route path="/" exact={true}>
              <Dashboard />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Sense Map Created by Matt Smith
        </Footer>
      </Layout>
    </Router>
  );
};

export default AppRouter;
