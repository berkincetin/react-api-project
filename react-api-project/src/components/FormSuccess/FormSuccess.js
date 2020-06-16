import React, { Component } from 'react';

class FormSuccess extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        const { onRouteChange } = this.props;
        return (
            <div>
                <h2 className="mb-2">Thanks for submitting a moving request!</h2>
                <h2 className="mb-2">We're working on it. We'll get you moving in no time!</h2>
                <p onClick = {() => onRouteChange("home")} className ="btn">Go home</p>
            </div>
        )
    }
}



export default FormSuccess;