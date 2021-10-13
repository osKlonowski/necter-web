import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import DownloadPage from "./pages/download";
import PrivacyPolicyPage from "./pages/privacy_policy";
import TermsConditionsPage from "./pages/terms_conditions";
import PrivacyPolicyDePage from "./pages/privacy_policy_de";
import TermsConditionsDePage from "./pages/terms_conditions_de";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/download" component={DownloadPage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="/privacy-policy-de" component={PrivacyPolicyDePage} />
        <Route path="/terms-conditions" component={TermsConditionsPage} />
        <Route path="/terms-conditions-de" component={TermsConditionsDePage} />
      </Switch>
    </Router>
  );
}

export default App;
