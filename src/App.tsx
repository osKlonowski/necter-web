import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import DownloadPage from "./pages/download";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/download" component={DownloadPage} />
      </Switch>
    </Router>
  );
}

export default App;
