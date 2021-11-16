import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
//import { response } from 'express';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    data: ""
  }
}

componentDidMount() {
  this.callBackend()
    .then(res => this.setState({data: res.message}))
    .catch(err => console.log(err))
  /*return fetch ('api/hello')
    .then((response) => response.json())
    .then ((responseJson) => {
      this.setState({
        message: responseJson.message
      });
    })*/
}

callBackend = async() => {
  const response = await fetch('api/hello');
  const body = response.json();

  if(response.status !== 200){
    throw Error(body.error)
  }
  return body;
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
      Message from API: <b>{this.state.data}</b>
        </p>
        
      </header>
    </div>
  );
}
}

export default App;
