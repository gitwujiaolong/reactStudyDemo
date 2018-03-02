import React, { Component } from 'react';
import A from './components/A'
/*import logo from './logo.svg';*/
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          color:'red'
      };
      console.log('first');
  }
  componentWillMount(){
      console.log('componentWillMount');
  }
  autoClick(){
      this.setState({
          color:'yellow'+Math.random()
      })
  }
  render() {
    console.log('render');
    return (
      <div className="App">
          <A/>
        <header className="App-header">
            {this.state.color}
        </header>
        <p className="App-intro" onClick={ ()=>this.autoClick() }>
          点我更新组件
        </p>
      </div>
    );
  }
  componentDidMount(){
      console.log('componentDidMount');
  }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate(){
        return true;
    }
}

export default App;
