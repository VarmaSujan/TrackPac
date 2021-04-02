// NPM imports
import { useState, useEffect, React } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components/Page Imports
import HomePage from "./pages/HomePage.jsx";

// Backup Data Import
import * as backupData from "./data/orders.json";

export default function App() {
  console.log("Welcome to TrackPac, your one-stop package tracking app");

  // State
  const [status, setStatus] = useState(0);
  const [orders, setOrders] = useState([]);

  // Constants
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Methods

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => onFetchSuccess(json))
      .catch((error) => onFetechFail(error));
    console.log(status);
    console.log(orders);
  }, [setOrders, setStatus, status, orders]);

  function onFetchSuccess(json) {
    setOrders(json);
    setStatus(1);
  }

  function onFetechFail(error) {
    console.log("Error loading data", error);
    setStatus(2);
  }
  // import * as data from "./orders.json";
  // if (status === 2) {
  //   setOrders(backupData.default);
  //   setStatus(3);
  // }
  // {
  //   status === 3 && <TaskPage tasks={tasks} />;
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to TrackPac!</h1>
      </header>

      <div className="Fetching">
        {status === 0 && <p>🤞 Loading...</p>}
        {status === 1 && <HomePage orders={orders} />}
        {status === 2 && (
          <p>
            👎 Error loading data, please check your connention, loading from
            backup data!
          </p>
        )}

        {/* {status === 3 && setOrders(backupData.default)} */}
      </div>
      <footer>
        <h1>This is the footer</h1>
      </footer>
    </div>
  );
}
