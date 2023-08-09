import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav';
import { useEffect } from 'react';
import Preloader from './components/Preloader';
import { useState } from 'react';

function App() {
  // preloader-start
  const [loading, setLoading] =useState(true);
  useEffect (() => {
   setTimeout(() => {
    setLoading(false);
    document.body.classList.remove("overflow-hidden")
  }, 3000)
  document.body.classList.add("overflow-hidden")
   }, [])

  //  preloader-end
  return (
    <div>
      {loading && <Preloader/>}
     <Nav/>
    </div>
  );
}

export default App;
