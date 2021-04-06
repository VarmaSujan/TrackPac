import { useState, useEffect, React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components/Page Imports
import Header from "../components/Header";
import Footer from "../components/Footer";
import background from "../assets/TrakPak_background.jpg";
import "../styles/Home.css";
import "../styles/Header.css";

export default function HomePage(props) {
  // Constants
  const [status, setStatus] = useState(0);
  const [orders, setOrders] = useState([]);
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Methods
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => onFetchSuccess(json))
      .catch((error) => onFetechFail(error));
  }, [setOrders, setStatus]);
  console.log(orders);

  function onFetchSuccess(json) {
    props.setOrders(json);
    setStatus(1);
  }

  function onFetechFail(error) {
    console.log("Error loading data", error);
    setStatus(2);
  }

  return (
    <div className="App">
      <Header />

      <div className="Fetching">
        {status === 0 && <p>🤞 Loading...</p>}
        {status === 1 && <p>👍 Data Loaded! </p>}
        {status === 2 && (
          <p>
            👎 Error loading data, please check your connention, loading from
            backup data!
          </p>
        )}
        <img className="banner" src={background} alt="banner" />
      </div>
      <Footer />
    </div>
  );
}
