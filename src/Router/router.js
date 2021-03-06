import React from 'react';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // withRouter
} from 'react-router-dom'
import { createBrowserHistory } from 'history';

import { parent, children } from './menu'
import Home from '../views/Home/home'
import About from '../views/About/about'

import { connect } from 'react-redux'
import { addNameCreater, addAgeCreater, addNameAsync } from '../redux/actions'

const { SubMenu } = Menu;

const AppHome = connect(
  state => ({
    lastname: state.addName,
    lastage: state.addAge
  }),
  {addNameCreater, addAgeCreater, addNameAsync}
)(Home)

class Sider extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.initData()
  }

  initData () {
    let history = createBrowserHistory() // 创建历史对象
    let pathname = history.location.pathname
    console.log(pathname)
    let path = parent.slice()
    children.map(item =>
      path.find(one => one.key === item.parent).children.push(item)
    )
    let defaultOpenKeys = []
    let defaultSelectedKeys = []
    children.map(item => {
      if (item.path === pathname) {
        defaultOpenKeys = [item.parent]
        defaultSelectedKeys = [item.key]
      }
      return true
    })
    return {path, defaultOpenKeys, defaultSelectedKeys}
  }

  handleClick = e => {
    console.log(e)
  }

  render() {
    return (
      <Router>
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={this.state.defaultOpenKeys}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          mode="inline"
        >
          {
            this.state.path.map(item => {
              return (
                <SubMenu
                  key={item.key}
                  title={
                    <span>
                      <SettingOutlined />
                      <span>{item.name}</span>
                    </span>
                  }
                >
                  {
                    item.children.map(path => {
                      return (
                        <Menu.Item key={path.key}>
                          <Link to={path.path}>{path.name}</Link>
                        </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            })
          }
        </Menu>
        <div className="container">
          <Switch>
            <Route path="/home">
              <AppHome />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Sider;
