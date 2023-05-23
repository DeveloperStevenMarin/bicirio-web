import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ScheduleCard from "./ScheduleCard";

export default function ScheduleList({ scheduleList }) {
  const navigate = useNavigate();
  const [stationPerPage, setStationPerPage] = useState(15);
  const addSchedule = () => {
    navigate("./add");
  };
  return (
    <div className="content">
      <div className="title">Lista de horarios</div>
      <div className="container container--user">
        <div className="user-list-title">
          <h3>Nombre</h3>
          <h3>Hora entrada</h3>
          <h3>Hora salida</h3>
        </div>
        {scheduleList.map((schedule) => (
          
          <ScheduleCard schedule={schedule} />
          
        ))}
      </div>
      <button className="btn btn--add-user" onClick={addSchedule}>
        <BiPlus />
      </button>
    </div>
  );
}
