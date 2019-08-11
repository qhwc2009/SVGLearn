import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Nav from 'components/Nav/Nav'

import Home from 'view/Home/Home'
import Circle from 'view/Circle/Circle'
import SVGEditor from 'view/SVGEditor/SVGEditor';
import LinearGradient from 'view/LinearGradient/LinearGradient';
import RadiaGradient from 'view/RadiaGradient/RadiaGradient';
import Pattern from 'view/Pattern/Pattern';

import './App.scss'

const { Sider, Content } = Layout

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
              <Route path="/circle" exact component={Circle} />
              <Route path="/SVGEditor" exact component={SVGEditor} />
              <Route path="/LinearGradient" exact component={LinearGradient} />
              <Route path="/RadiaGradient" exact component={RadiaGradient} />
              <Route path="/Pattern" exact component={Pattern} />
            </div>
          </Content>
        </Layout>
      </div>
    </Router>
  )
}

export default App
