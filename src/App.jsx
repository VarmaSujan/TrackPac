// NPM imports

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components/Page Imports
import Home from "./pages/Home.jsx";
import Packages from "./pages/packages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/packages" exact component={Packages} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
