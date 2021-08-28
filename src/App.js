import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Payment } from "./Components/Payment/Payment";
import { LandingPage } from "./Components/Landingpage/LandingPage";
import { NavBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Landingpage/Footer";
import {HotelResult} from "./Components/Hotel_Ind_Page/HotelResult"
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>      
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/hotelResult">
          <HotelResult/>
        </Route>
      </Switch>
      <Footer/>
    </div>

  );
}

export default App;
