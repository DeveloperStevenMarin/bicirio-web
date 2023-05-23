import { useEffect, useState } from "react";
import { BiEdit, BiUserPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { API_USER_STATION_URL } from "../../config/config";
export default function StationCard({ station }) {
  const [checkList, setCheckList] = useState([]);
  const navigate = useNavigate();
  const handleClick = (event) => {
    const selectedStation = event.target.value;
    navigate("/stations/update", { state: { selectedStation } });
  };

  const handleClickUserStation = async (event) => {
    const selectedStation = event.target.value;
    setCheckList(await getStationUsers(station.id));
    navigate("/stations/addUser", { state: { selectedStation } });
  };
  const getStationUsers = async (stationID) => {
    const res = await fetch(API_USER_STATION_URL + "/" + stationID, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem('checkList', JSON.stringify(json));
      });
    return res;
  };

  return (
    <section className="section user-section">
      <ul className="list user-list">
        <li key={station.id}>{station.name}</li>
        <li>{station.longitude}</li>
      </ul>
      <button
        className="btn btn-edit-users"
        name="id"
        value={JSON.stringify(station)}
        onClick={handleClick}
      >
        <BiEdit className="icon--update" />
      </button>
      <button
        className="btn btn-edit-users"
        name="id"
        value={JSON.stringify(station)}
        onClick={handleClickUserStation}
      >
        <BiUserPlus className="icon--update" />
      </button>
    </section>
  );
}
