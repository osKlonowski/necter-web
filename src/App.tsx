import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/#/" exact component={Home} />
      </Switch>
      <Home />
    </Router>
    // <Router>
    //   <Navbar />
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     {/* <Route path="/about" component={About} />
    //     <Route path="/signin" component={SignIn} />
    //     <Route path="/sign-up" component={SignUp} /> */}
    //   </Switch>
    // </Router>
  );
}

export default App;
