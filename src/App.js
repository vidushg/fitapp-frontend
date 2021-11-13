import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
//import { response } from 'express';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    message: ""
  }
}

componentDidMount() {
  return fetch ('api/hello')
    .then((response) => response.json())
    .then ((responseJson) => {
      this.setState({
        message: responseJson.message
      });
    })
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
      Message from API: <b>{this.state.message}</b>
        </p>
        
      </header>
    </div>
  );
}
}

export default App;
