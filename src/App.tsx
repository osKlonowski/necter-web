import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import DownloadPage from "./pages/download";
import PrivacyPolicyPage from "./pages/privacy_policy";
import TermsConditionsPage from "./pages/terms_conditions";
import PrivacyPolicyDePage from "./pages/privacy_policy_de";
import TermsConditionsDePage from "./pages/terms_conditions_de";
import ContactPage from "./pages/contact";
import ImprintPage from "./pages/imprint";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL} hashType={"slash"}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/download" component={DownloadPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/imprint" component={ImprintPage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="/privacy-policy-de" component={PrivacyPolicyDePage} />
        <Route path="/terms-conditions" component={TermsConditionsPage} />
        <Route path="/terms-conditions-de" component={TermsConditionsDePage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
