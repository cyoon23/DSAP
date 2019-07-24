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
          <h1 >Number of Sexual Assaults Reported.</h1>
          <h1> {count}</h1>
        </header>

      </div>
    );
  }
}

export default Count;
