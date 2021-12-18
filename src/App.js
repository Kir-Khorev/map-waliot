import React from 'react';
import './App.css';
import Map from './components/Map/Map';
import CarsList from './components/Cars/CarsList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Map />
      {/* <CarsList /> */}
      <Footer />
    </div>
  );
}

export default App;
