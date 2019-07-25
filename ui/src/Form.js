import React, { Component } from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import "./Form.css";
import { DialogActions } from "@material-ui/core";

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
          const {increment, handleClose} =this.props;
          const {checkedIhave, checkedStudent, error1, error2}=this.state;
          this.setState({
              error1: !checkedStudent,
              error2: !checkedIhave
          }, ()=> {if(!this.state.error1 && !this.state.error2){
            increment();
            handleClose();
            //alert("submission")
          }
          });
          console.log(checkedStudent)
          
      }

  render() {
      const {checkedIhave, checkedStudent, error1, error2} = this.state;
      const {dialog, handleClose} = this.props;
    return (
      <div className='root'>
        <Dialog
        open={dialog}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <div className="padding">
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
        <div>
        <TextField
        id="outlined-dense-multiline"
        label="Your Story"
        //className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        multiline
        style={{width:"100%"}}
        rowsMax="4"
        inputProps={{maxLength: 300}}
        onChange={this.type}
        value={this.state.story}
      />
      <p className="characterCount">{this.state.story.length}/300</p>
      </div>
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
        <DialogActions>
          <Button style={{ color:'white', backgroundColor: 'black'}} onClick={this.submit}>Increment</Button>
        </DialogActions>
        </div>
        </Dialog>
      </div>
    );
  }
}

export default Form;


// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Paper from '@material-ui/core/Paper';
// import Draggable from 'react-draggable';

// function PaperComponent(props) {
//   return (
//     <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
//       <Paper {...props} />
//     </Draggable>
//   );
// }

// export default function DraggableDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open form dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperComponent={PaperComponent}
//         aria-labelledby="draggable-dialog-title"
//       >
//         <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
//           Subscribe
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here. We will send updates
//             occasionally.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleClose} color="primary">
//             Subscribe
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }