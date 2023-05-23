import { useState } from "react";
import { BiPlus, BiUserPlus } from "react-icons/bi";
import StationCard from "./StationCard";
import { useNavigate } from "react-router-dom";

export default function StationList({ stationList }) {
  const navigate = useNavigate();
  const [stationPerPage, setStationPerPage] = useState(15);
  const addStation = () => {
    navigate("./add");
  };
  return (
    <div className="content">
      <div className="title">Lista de estaciones</div>
      <div className="container container--user">
        <div className="user-list-title">
          <h3>Nombre</h3>
          <h3>Ubicacion</h3>
        </div>
        {stationList.map((station) => (
          <StationCard station={station} />
        ))}
      </div>
      <button className="btn btn--add-user" onClick={addStation}>
        <BiPlus />
      </button>
    </div>
  );
}
