import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Payment } from "./Components/Payment/Payment";
import { LandingPage } from "./Components/Landingpage/LandingPage";
import { NavBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Landingpage/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
      <Switch>
        <Route path="/payment">
          <Payment />
        </Route>
      </Switch>
      <Footer/>
    </div>

  );
}

export default App;
