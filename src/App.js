import React from 'react';

// import { Button } from 'antd'

import Sider from './Router/router'

import 'antd/dist/antd.less';
import './App.less';

const parent = [
  {name: 'settings', key: 'settings', children: []}
]

const children = [
  {
    name: 'About',
    key: 'about',
    path: '/about',
    parent: 'settings'
  },
  {
    name: 'Home',
    key: 'home',
    path: '/home',
    parent: 'settings'
  }
]

const App = () => (
  <div className="App">
    <Sider children={children} parent={parent} />
  </div>
)

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
