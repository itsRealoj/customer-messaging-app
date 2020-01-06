import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactForm />
      </header>
    </div>
  );
}

export default App;
