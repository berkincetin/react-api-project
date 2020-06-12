import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import SearchForm from './components/SearchForm/SearchForm';
import MasterForm from './components/MutliStageForm/MovingForm';

function App() {
  return (
    <div className="App">
      <Header />
      <MasterForm />
    </div>
  );
}

export default App;
