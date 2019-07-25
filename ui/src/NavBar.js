import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./NavBar.css";

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  
  render() {

    return (
        
          <AppBar position="static" >
            <Toolbar className="bar">
            <div style={{float:'left'}}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Resources</Button>
              </div>
              <div className="center">
                <div className="inline">
                <p style={{display:'inline-block', padding: '4px'}}className="red"> Duke</p>
                <p style={{display:'inline-block',padding: '4px'}}> Sexual Assault Project</p>
                </div>
            </div>
            </Toolbar>
          </AppBar>

      );
  }
}

export default NavBar;
