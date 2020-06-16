import React from 'react'
const google = window.google

class ParlorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.autocomplete = null
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})

    this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
  }

  initialState() {
    return {
        inputAddress: ''
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.clearForm()
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

  render() {
    return(
      <div>
        <h1>Add New Parlor</h1>
        <form onSubmit={this.handleSubmit}>
            <div class="col-12 mb-5">
            <input id="autocomplete"
            className="input-field"
            name="inputAddress"
            ref="input"
            type="text"
            onChange={this.handleChange}
            />
            </div>


            <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }

}

export default ParlorForm