import React, { Component } from "react";
import "./App.css";
import Count from './Count';
import Form from './Form';
import NavBar from './NavBar';
import Stories from './Stories';
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
        <Count count={count} increment={this.increment}/>
        <p className="intro">The Duke sexual assault project was created by five undergraduate Duke students. Share this project with any Duke undergraduates you know. The number of students assaulted by other Duke students will not stop growing unless everyone in our community can ban together to prevent sexual assaults on campus. ….. If you’ve been assaulted during your time at Duke and feel ready to share your experience, add yourself to the count and ______. In an effort to respect everyone’s privacy, all students will remain anonymous, including those contributing their stories and those accused of assault. This is a platform to raise awareness. Sexual assault is serious, and often times the only options are to stay silent or to file an official report…..</p>
        <hr className="divider"/>
        <Stories/>
      </div>

    );
  }
}

export default App;
