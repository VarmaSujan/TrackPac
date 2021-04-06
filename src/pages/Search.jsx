import Header from "../components/Header";
import Footer from "../components/Footer";
import banner from "../assets/Trakpak_banner.jpg";
import "../styles/Search.css";
import { useState } from "react";

export default function Search({ orders }) {
  // const onSubmitHandler () =>{
  //   {orders.filter(yourParcel => yourParcel.includes(query)).map(filteredParcel =>(
  //     <ul key={parcel.id}>
  //         <li>parcel_id: {parcel.parcel_id}</li>
  //         <li>parcel_sender: {parcel.sender}</li>
  //         <li>parcel_status: {parcel.status}</li>
  //         <li>parcel_location: {parcel.location_name}</li>
  //         <li>
  //           parcel_last_updated: {dateString} {timeString}
  //         </li>
  //       </ul>
  //   )
  //     )}
  // }
  const [query, setQuery] = useState("");
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
    <div>
      <Header />
      <div className="banner_search">
        <img className="logo_banner" src={banner} alt="logo_Banner" />
        <form className="form">
          <input
            type="text"
            placeholder="Search by id"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
      {ordersArray}
      <Footer />
    </div>
  );
}
// onSubmit={this.onSubmitHandler}
