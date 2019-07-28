import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Nav from 'components/Nav/Nav';

import Home from 'view/Home/Home';
import './App.scss';

const { Sider, Content } = Layout;

function App() {
  return (
    <Router basename="/SvgLearn">
      <div className="App">
      <Layout className="layout">
        <Sider className="sider">
          <Nav />
        </Sider>
        <Content className="content">
        <div className="App">
        <Route path="/" exact component={Home} />
        </div>
        </Content>
        </Layout>
      </div>
    </Router>

  );
}

export default App;
