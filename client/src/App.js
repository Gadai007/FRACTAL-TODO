import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routes from './Routes'
import './styles.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
