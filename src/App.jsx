// NPM imports

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// Components/Page Imports
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import "./styles/App.css";

export default function App() {
  const [orders, setOrders] = useState([]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home orders={orders} setOrders={setOrders} />}
          />
          <Route
            path="/search"
            exact
            render={() => <Search orders={orders} />}
          />
        </Switch>
      </Router>
    </div>
  );
}
