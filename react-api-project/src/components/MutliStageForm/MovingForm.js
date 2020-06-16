import React from 'react';
import './MovingForm.css'; 
import {  Dropdown } from 'semantic-ui-react'
const google = window.google

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
        movingservices: false,
        supplyservices: false,
        storageservices: false,
        packingservices: false,
        rearrangingservices: false,

        movingFromAddress: '',
        movingFromBuildingType: '',
        movingFromSquareFeet: '',
        movingToAddress: '',
        movingToBuildingType:'',
        movingToSquareFeet:'',

        movingDate: '',
        movingTime: ''
      }
      this.autocomplete = null
    }
    componentDidMount() {
      this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('movingFromAddress'), {})
  
      this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
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
    handlePlaceSelect() {
      let addressObject = this.autocomplete.getPlace()
      let address = addressObject.address_components;
      console.log(addressObject);
      console.log(address);
      // this.setState({
      //   name: addressObject.name,
      //   street_address: `${address[0].long_name} ${address[1].long_name}`,
      //   city: address[4].long_name,
      //   state: address[6].short_name,
      //   zip_code: address[6].short_name,
      //   googleMapLink: addressObject.url
      // })
    }
    
    handleCheck = event => {
      const {name,checked} = event.target;
      console.log("Event Target", event.target)
      console.log("Name", name); 
      console.log("Checked", checked); 
      this.setState({
        [name]: checked
      })   


      console.log(this.state); 
    }
    onChangeDropdown = (event,data) => {
      const name=data.name;
      const value = data.value;
      console.log(event)
      console.log(data);
      console.log(data.name)
      console.log(data.value)
      this.setState({
          [name]:value
      })
    }
    handleSubmit = event => {
      event.preventDefault()
      const { 
          firstName, 
          lastName, 
          email, 
          phonenumber, 
          contactMethod, 
          username, 
          password, 
          movingservices,
          supplyservices, 
          storageservices,
          packingservices,
          rearrangingservices,
          movingFromBuildingType
      } = this.state

      alert(`Your registration detail: \n 
             First Name: ${firstName} \n

             Moving Services: ${movingservices} \n
             Supply Services: ${supplyservices} \n
             Storage Services: ${storageservices} \n
             Packing Services:  ${packingservices} \n
             Rearranging Services: ${rearrangingservices} \n
             Moving From Building Type: ${movingFromBuildingType}
             
             `)
             
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      console.log(this.state);
      currentStep = currentStep >= 3? 4: currentStep + 1
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
    if(currentStep <4){
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
    

  /* -------------------- RENDER ----------------------- */
    render() {    
      const { onRouteChange } = this.props;

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
            handleCheck={this.handleCheck}

            movingservices={this.state.movingservices}
            supplyservices = {this.state.supplyservices}
            storageservices={this.state.storageservices}
            packingservices =   {this.state.packingservices}
            rearrangingservices = {this.state.rearrangingservices}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            onChangeDropdown={this.onChangeDropdown}
            handleChange={this.handleChange}

            movingFromAddress={this.state.movingFromAddress}
            movingFromBuildingType={this.state.movingFromBuildingType}
            movingFromSquareFeet={this.state.movingFromSquareFeet}
            movingToAddress={this.state.movingToAddress}
            movingToBuildingType={this.state.movingToBuildingType}
            movingToSquareFeet={this.state.movingToSquareFeet}


          />
          <Step4 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            movingDate = {this.state.movingDate}
            movingTime ={this.state.movingTime}
            onRouteChange = {onRouteChange}

          />
          {this.previousButton()}
          {this.nextButton()}
  
        </form>
        </div>

        </React.Fragment>
      );
    }
  }
  
  /****** FORM PAGE 1 *********/
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div>
        <h2 className ="mb-4">Tell us about yourself</h2>
        <div className="form-group form-row row mb-2">
          <div className="col-sm-12">
            <input
              className="form-control"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter first name"
              value={props.firstName}
              onChange={props.handleChange}
              required
              />
          </div>
        </div>
        <div className="form-group form-row row mb-2">
          <div className="col-sm-12">
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
          <div className="col-sm-12">
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
          <div className="col-sm-12">
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

  /****** FORM PAGE 2 *********/
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div>
        <h2 className ="mb-4">How can All-Rite help you?</h2>

        <div className="col-12">
          <input 
          className = "mr-2"
            type ="checkbox" 
            name="movingservices" 
            id="movingservices" 
            defaultChecked = {props.movingservices}
            onClick={props.handleCheck.bind(this)} 
          />
         <label>I need to move!</label>
        </div>

        <div>
          <input 
          className = "mr-2"
            type ="checkbox" 
            name="supplyservices" 
            id="supplyservices" 
            defaultChecked = {props.supplyservices}
            onClick={props.handleCheck.bind(this)} 
          />
         <label>I need moving supplies</label>
        </div>
        <div>
          <input 
          className = "mr-2"
            type ="checkbox" 
            name="storageservices" 
            id="storageservices" 
            defaultChecked = {props.storageservices}
            onClick={props.handleCheck.bind(this)} 
          />
         <label>I need storage services</label>
        </div>
        <div>
          <input 
          className = "mr-2"
            type ="checkbox" 
            name="packingservices" 
            id="packingservices" 
            defaultChecked = {props.packingservices}
            onClick={props.handleCheck.bind(this)} 
          />
         <label>I need packing services</label>
        </div>
        <div>
          <input 
          className = "mr-2"
            type ="checkbox" 
            name="rearrangingservices" 
            id="rearrangingservices" 
            defaultChecked = {props.rearrangingservices}
            onClick={props.handleCheck.bind(this)} 
          />
         <label>I need rearranging services</label>
        </div>


    </div>
    );
  }

  /****** FORM PAGE 3 *********/

  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment>
        <div>
        <h2 className ="mb-4">Tell us more about your moving details</h2>

          <div className="form-group row">
            <div className="col-sm-6">
              <label>Moving From</label>

              <input
              className="form-control"
              id="movingFromAddress"
              name="movingFromAddress"
              type="text"
              placeholder="Current address"
              value={props.movingFromAddress}
              onChange={props.handleChange}
              /> 
            </div>    
            <div className="col-sm-6">
              <label htmlFor="movingToAddress">Moving To</label>
              <input
                className="form-control"
                id="movingToAddress"
                name="movingToAddress"
                type="text"
                placeholder="Moving address"
                value={props.movingToAddress}
                onChange={props.handleChange}
                />  
            </div>    
        </div>

        <div className = "form-group row">
          <div className="col-sm-6">
            <Dropdown
            name="movingFromBuildingType"
            placeholder="What type of building is this?"
            onChange={props.onChangeDropdown}
            value={props.movingFromBuildingType}

            fluid
            selection
            options={[{
              key: 'House',
              text:'House',
              value:'House'
            }, {
              key: 'Apartment',
              text:'Apartment',
              value:'Apartment'
            }, {
              key: 'Condo',
              text:'Condo',
              value:'Condo'
            }, {
              key: 'Storage',
              text: 'Storage',
              value: 'Storage'
            }
          ]}
            />
          </div>
          <div className="col-sm-6">
            <Dropdown
            name="movingToBuildingType"
            placeholder="What type of building is this?"
            onChange={props.onChangeDropdown}
            value={props.movingToBuildingType}

            fluid
            selection
            options={[{
              key: 'House',
              text:'House',
              value:'House'
            }, {
              key: 'Apartment',
              text:'Apartment',
              value:'Apartment'
            }, {
              key: 'Condo',
              text:'Condo',
              value:'Condo'
            }, {
              key: 'Storage',
              text: 'Storage',
              value: 'Storage'
            }
          ]}
            />
          </div>
        </div>
        <div className="form-group row">
            <div className="col-sm-6">
              <input
                className="form-control"
                id="movingFromSquareFeet"
                name="movingFromSquareFeet"
                type="text"
                placeholder="How big is your current space, in square feet?"
                value={props.movingFromSquareFeet}
                onChange={props.handleChange}
                />  
            </div>    
            <div className="col-sm-6">
              <input
                className="form-control"
                id="movingToSquareFeet"
                name="movingToSquareFeet"
                type="text"
                placeholder="How big is your destination space, in square feet?"
                value={props.movingToSquareFeet}
                onChange={props.handleChange}
                />  
            </div> 

        </div>
      </div>

      </React.Fragment>
    );
  }
  
    /****** FORM PAGE 4 *********/

  function Step4(props) {
    if (props.currentStep !== 4) {
      return null
    } 
    return(
      <React.Fragment>
        <div>
        <h2 className ="mb-4">What day would you like to move?</h2>
        <div className="form-group row">
          <div className="col-6">
            <label htmlFor="movingDate">Moving Date</label>
            <input
              className="form-control"
              id="movingDate"
              name="movingDate"
              type="date"
              value={props.movingDate}
              onChange={props.handleChange}
            />   
        </div>
        <div className="col-6">
            <label htmlFor="movingDate">Moving Time</label>
            <input
              className="form-control"
              id="movingTime"
              name="movingTime"
              type="time"
              value={props.movingTime}
              onChange={props.handleChange}
            />   
        </div>
      </div>
      <div class="col-4 mx-auto">
      <button onClick = {() => props.onRouteChange('success')} className="btn  btn-success btn-block mb-2">Let's get you moving!</button>

      </div>
        </div>

      </React.Fragment>
    );
  }

  /************ EXPORTING FORM ********************/
  export default MasterForm;