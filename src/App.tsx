import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import DownloadPage from "./pages/download";
import PrivacyPolicyPage from "./pages/privacy_policy";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/download" component={DownloadPage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      </Switch>
    </Router>
  );
}

export default App;
