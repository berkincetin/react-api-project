import React from 'react';
import './MovingForm.css'; 

class MasterForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        firstName: '',
        lastName:'',
        email:  '',
        phonenumber: '',
        contactMethod:'',
        username: '',
        password: '',
        movingservices: ''
      }
    }
  
    handleChange = event => {
      console.log("Event",event)
      console.log("Event target", event.target)
      console.log("Event target name", event.target.name)
      console.log("Event target value", event.target.value)

      const {name, value} = event.target
      this.setState({
        [name]: value
      })   
      console.log(this.state); 
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const { firstName, lastName, email, phonenumber, contactMethod, username, password } = this.state
      alert(`Your registration detail: \n 
             First Name: ${firstName} \n
             Last Name: ${lastName} \n
             Phone Number: ${phonenumber} \n
             Contact Method: ${contactMethod} \n
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`)
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary float-left" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
        <React.Fragment>
        <div className = "booking-form">

        <h1>Book Your Move Today</h1>
        <p>Step {this.state.currentStep} </p> 
  
        <form onSubmit={this.handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
        
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phonenumber={this.state.phonenumber}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}
  
        </form>
        </div>

        </React.Fragment>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div>
        <h2 className ="mb-4">Tell us about yourself</h2>
        <div className="form-group form-row row mb-2">
          <div class="col-sm-12">
            <input
              className="form-control"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter first name"
              value={props.firstName}
              onChange={props.handleChange}
              />
          </div>
        </div>
        <div className="form-group form-row row mb-2">
          <div class="col-sm-12">
            <input
              className="form-control"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter last name"
              value={props.lastName}
              onChange={props.handleChange}
              />
          </div>
        </div>
        
        <div className="form-group form-row row mb-2">
          <div class="col-sm-12">
            <input
              className="form-control"
              id="email"
              name="email"
              type="text"
              placeholder="Enter email"
              value={props.email}
              onChange={props.handleChange}
              />
          </div>
        </div>
        <div className="form-group form-row row mb-2">
          <div class="col-sm-12">
            <input
              className="form-control"
              id="phonenumber"
              name="phonenumber"
              type="text"
              placeholder="Enter phone number"
              value={props.phonenumber}
              onChange={props.handleChange}
              />
          </div>
        </div>

      </div>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div>
        <div>
      <input type ="checkbox" name="services" id="moving-services" value= {props.movingservices}               onChange={props.handleChange}
 />
        </div>
        <div className="form-group form-row row mb-2">
        <div class="col-sm-12">
          <input
            className="form-control"
            id="phonenumber"
            name="phonenumber"
            type="text"
            placeholder="Enter phone number"
            value={props.phonenumber}
            onChange={props.handleChange}
            />
        </div>
      </div>
    </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
          />      
      </div>
      <button className="btn btn-success btn-block mb-2">Sign up</button>
      </React.Fragment>
    );
  }
  
  export default MasterForm;