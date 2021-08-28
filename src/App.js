<<<<<<< HEAD
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import LandingPage from './Component/LandingPage';
function App() {
  return (
 <>
 <LandingPage/>
 </>
=======

import './App.css';
import { NavBar } from './Components/NavBar';
// import { Payment } from './Payment/Payment';

function App() {
  return (
    <div>
      <NavBar/>
      {/* <Payment/> */}
    </div>
>>>>>>> 4158e90ab22e1c2c9c1c479157cb4ed912ee023d
  );
}

export default App;
