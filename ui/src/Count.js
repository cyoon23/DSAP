import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Form from './Form';
import './Count.css';

class Count extends React.Component {
  constructor(props){
    super(props);
    this.state={
      undergrads:7000,
      days:0,
      assaults:0,
      official:0,
      dialog: false,
    }
  }

  toggleDialog=()=>{
    const {dialog}=this.state;
    this.setState({
      dialog: !dialog,
    });
  }
  
  render() {
    const {count, increment} = this.props;
    const {undergrads, days, assaults, official, dialog}= this.state;
    return (
      <div className="Count">
        <header>
          <div className="wrapper">
            <div className="inline">
              <p style={{display:'inline-block', padding: '4px'}}className="red"> {undergrads}</p>
              <p style={{display:'inline-block',padding: '4px'}}> undergraduates currently enrolled at duke</p>
            </div>
            <div className="inline">
              <p style={{display:'inline-block',padding: '4px'}}className="red"> {days} </p>
              <p style={{display:'inline-block',padding: '4px'}}>days since school started</p>
            </div>
            <div className="inline">
              <p style={{display:'inline-block',padding: '4px'}}className="red">{assaults} </p>
              <p style={{display:'inline-block',padding: '4px'}}>students assaulted this academic year</p>
            </div>
            <div className="inline">
              <p style={{display:'inline-block',padding: '4px'}}className="red">{official} </p>
              <p style={{display:'inline-block',padding: '4px'}}> assaults officially reported this academic year</p>
            </div>
          </div>
          <div className="number">
            <p className="bignumber"> {count}</p>
            <h1 className="subtype">Number of Sexual Assaults Reported.</h1>
            <Button style={{backgroundColor:'white'}}onClick={this.toggleDialog}>Increment</Button>
          </div>
          
        </header>
        
        <Form increment={increment} dialog={dialog} handleClose={this.toggleDialog}/>
      </div>
    );
  }
}

export default Count;
