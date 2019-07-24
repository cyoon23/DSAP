import React, { Component } from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import "./Form.css";

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            checkedIhave: false,
            checkedStudent: false,
            story: '',
            error1: false,
            error2: false,
        }
      }

      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

      type = (event) =>{
          console.log(event.target.value);
          this.setState({
              story: event.target.value,
          })
      }

      submit=()=>{
          const {increment} =this.props;
          const {checkedIhave, checkedStudent, error1, error2}=this.state;
          this.setState({
              error1: !checkedStudent,
              error2: !checkedIhave
          }, ()=> {if(!this.state.error1 && !this.state.error2){
            increment();
            alert("submission")}
          })
          console.log(checkedStudent)
          
      }

  render() {
      const {checkedIhave, checkedStudent, error1, error2} = this.state;

    return (
      <div className='root'>
        <FormControl error={error2}>
            <div style={{display: 'inline-block'}}>
            <FormLabel>I confirm that I have been assaulted during my time as an undergraduate student at Duke.</FormLabel>
            <FormControlLabel
            error={error2}
            required
            control={<Checkbox checked={checkedIhave} onChange={this.handleChange('checkedIhave')} value="checkedIhave" />}
            />
            </div>
        </FormControl>
        <br/>
        <TextField
        id="outlined-dense-multiline"
        label="Your Story"
        //className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        multiline
        rowsMax="4"
        onChange={this.type}
        value={this.state.story}
      />
        <br/>
        <FormControl  error={error1} >
        <div style={{display: 'inline-block'}}>
          <FormLabel >I confirm that I am a currend Duke undergraduate student.</FormLabel>
          <FormControlLabel 
            error={error1}
            required
            control={<Checkbox checked={checkedStudent} onChange={this.handleChange('checkedStudent')} value="checkedStudent" />}
          />
          </div>
        </FormControl>
        <br/>
        <Button style={{ color:'white', backgroundColor: 'black'}} onClick={this.submit}>Increment</Button>
      </div>
    );
  }
}

export default Form;
