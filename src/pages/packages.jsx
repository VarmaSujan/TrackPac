import { useState, useEffect, React } from "react";

// Components/Page Imports
import "../styles/Home.css";
import "../styles/Header.css";
import "../styles/Packages.css";

export default function Packages() {
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
    setOrders(json);
    setStatus(1);
  }

  function onFetechFail(error) {
    setStatus(2);
  }

  const ordersArray = orders.map((parcel) => {
    const dateString = parcel.last_updated.substring(0, 10);
    const timeString = parcel.last_updated.substring(11, 16);
    return (
      <div className="parcelInfo">
        <ul key={parcel.id}>
          <li>parcel_id: {parcel.parcel_id}</li>
          <li>parcel_sender: {parcel.sender}</li>
          <li>parcel_status: {parcel.status}</li>
          <li>parcel_location: {parcel.location_name}</li>
          <li>
            parcel_last_updated: {dateString} {timeString}
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div className="App">
      <div className="Fetching">
        {status === 0 && <p>🤞 Loading...</p>}
        {status === 1 && <p>👍 Data Loaded! </p>}
        {status === 2 && (
          <p>
            👎 Error loading data, please check your connention, loading from
            backup data!
          </p>
        )}

        {ordersArray}
      </div>
    </div>
  );
}
