import React, { Component } from "react";
import "./App.css";
import Count from './Count';
import Form from './Form';
import NavBar from './NavBar';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
        count:0,
    }
  }

  increment = ()=>{
    const {count} = this.state;
    this.setState({
      count: count +1
    })
  }
  render() {
    const {count}=this.state
    return (
      <div className="App">
        <NavBar/>
        <Count count={count}/>
        <Form increment={this.increment}/>
      </div>

    );
  }
}

export default App;
