import React, { useEffect, useState } from "react";
import { API_STATION_URL, API_USER_STATION_URL } from "../../config/config";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import "../home/Home.css";
import Loading from "../general/Loading/Loading";
import { useLocation } from "react-router-dom";
import UserStationCard from "./UserStationCard";
import { element } from "prop-types";

export default function AddUserStation() {
  const state = useLocation();
  const station = JSON.parse(state.state.selectedStation);
  const checkList = JSON.parse(localStorage.getItem("checkList"));
  const userList = useSelector((state) => state.Store.userList.data);

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const back = () => {
    window.location.href = "./";
  };

  useEffect(() => {
    setDataIsLoaded(true);
  }, []);

  if (!dataIsLoaded) {
    return <Loading />;
  } else {
    return (
      <div className="home-content">
        <button className="btn--back" onClick={back}>
          <BiArrowBack />
        </button>
        <div className="content">
          <section className="section user-section">
            <div className="form form--add-user">
              <legend>Selecciona los usuarios para asignar:</legend>
              {userList.map((user) => (
                <UserStationCard
                  station={station}
                  user={user}
                  checkList={checkList}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
}
