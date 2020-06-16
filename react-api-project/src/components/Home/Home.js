import React, {Component }  from 'react';

class Home extends Component {
    constructor(props) {
        super(props);

        }
    render () {
        const { onRouteChange } = this.props;
        return (
            <div>
                <h2 className="mb-2">Let's get you moving!</h2>
                <p onClick = {() => onRouteChange("movingform")} className ="btn">Book your move</p>
            </div>
        )
    }
}

export default Home;