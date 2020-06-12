import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchForm />
    </div>
  );
}

export default App;
