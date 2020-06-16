import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import SearchForm from './components/SearchForm/SearchForm';
import MasterForm from './components/MutliStageForm/MovingForm';
import Home from './components/Home/Home';
import FormSuccess from './components/FormSuccess/FormSuccess';
import ParlorForm from './components/LocationForm/LocationForm';
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <MasterForm />
//     </div>
//   );
// }

const initialState = {
  route: 'home'
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  onRouteChange = (route) => {
      this.setState({route: route})
  }
  render () {
    const { route } = this.state;
    return (
      <div className ="App">
        <Header />

        {route === "home" ?
        <div>

        <Home onRouteChange={this.onRouteChange}/>
        <ParlorForm />
        </div>
        : (
          route ==="movingform" ?
          <MasterForm onRouteChange={this.onRouteChange}/>
          :
          <FormSuccess onRouteChange={this.onRouteChange} />
        )

      }
    </div>
    )
  }

}

export default App;
