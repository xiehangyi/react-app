//component/AddName.js
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button } from 'antd'

class AddName extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    console.log(PropTypes)
  }
  //声明属性
  static propTypes = {
    lastname: PropTypes.string.isRequired,
    addNameCreater: PropTypes.func.isRequired,
    lastage: PropTypes.string.isRequired,
    addAgeCreater: PropTypes.func.isRequired,
    addNameAsync: PropTypes.func.isRequired
  }
  //点击事件
  handlerFunc = () =>{
    const inputName = this.refs.inputValueTest.value;
    this.props.addNameCreater(inputName);
  }
  handlerAgeFunc = () =>{
    const inputage = this.refs.inputValueAge.value;
    this.props.addAgeCreater(inputage);
  }
  handlerAsyncFunc = () =>{
    const inputName = this.refs.inputValueTest.value;
    this.props.addNameAsync(inputName);
  }
  //渲染界面
  render() {
    const {lastname,lastage} = this.props;   
    return (
      <div>
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <label> {lastname} </label><br/>
        <input ref="inputValueTest" /><br/>
        <Button type="primary" onClick={this.handlerFunc}>confirm</Button><br/>
        <Button onClick={this.handlerAsyncFunc}>Async Confirm</Button><br/>

        <label> {lastage} </label><br/>
        <input ref="inputValueAge" /><br/>
        <Button onClick={this.handlerAgeFunc}>confirm</Button><br/>

      </div>
    );
  }
}

export default AddName;
