import React, { Component } from "react";
import "./Stories.css";

class Stories extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render() {
    const {count}=this.state
    return (
      <div className="Stories">
        <p class="p1">These are our stories</p>
        <p class="p2">something about community building and not feeling alone. </p>
      </div>

    );
  }
}

export default Stories;
