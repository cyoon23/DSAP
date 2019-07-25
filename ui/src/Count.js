import React, { Component } from "react";
import "./Count.css";

class Count extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const {count} = this.props;
    return (
      <div className="Count">
        <header>
          <div className="wrapper">
            <div className="inline">
              <p style={{display:'inline-block', padding: '4px'}}className="red"> 7000</p>
              <p style={{display:'inline-block',padding: '4px'}}> undergraduates currently enrolled at duke</p>
            </div>
            <div className="inline">
              <p style={{display:'inline-block',padding: '4px'}}className="red"> 0 </p>
              <p style={{display:'inline-block',padding: '4px'}}>days since school started</p>
            </div>
            <div className="inline">
              <p style={{display:'inline-block',padding: '4px'}}className="red">0 </p>
              <p style={{display:'inline-block',padding: '4px'}}>students assaulted this academic year</p>
            </div>
            <div className="inline">
              <p style={{display:'inline-block',padding: '4px'}}className="red">0 </p>
              <p style={{display:'inline-block',padding: '4px'}}> assaults officially reported this academic year</p>
            </div>
          </div>
          <div className="number">
            <p className="bignumber"> {count}</p>
            <h1 className="subtype">Number of Sexual Assaults Reported.</h1>
          
          </div>
        </header>

      </div>
    );
  }
}

export default Count;
