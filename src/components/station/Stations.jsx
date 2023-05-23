import React, { useState, useEffect } from "react";
import "./Stations.css";
import { BiArrowBack } from "react-icons/bi";
import { API_STATION_URL } from "../../config/config";
import MenuList from "../general/MenuList";
import StationList from "./StationList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeLoggedUser } from "../../features/users/loggedUserSlice";
import { initializeStationList } from "../../features/stations/stationSlice";
import Loading from "../general/Loading/Loading";

export default function Station() {
  let [dataIsLoaded, setDataIsLoaded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.Store.loggedUser.data);
  const stationList = useSelector((state) => state.Store.stationList.data);
  useEffect(() => {
    if (!loggedUser) {
      navigate("../");
    } else if (loggedUser.profile <= 0) {
      dispatch(removeLoggedUser(null));
      alert("Usted no es admin");
      navigate("../");
    }
    fetch(API_STATION_URL, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(initializeStationList(json));
        setDataIsLoaded(true);
      });
  }, []);

  const back = async () => {
    navigate("../");
  };

  if (!dataIsLoaded) {
    return (
     <Loading/>
    );
  } else {
    return (
      <div className="home-content">
        <button className="btn--back" onClick={() => back()}>
          <BiArrowBack />
        </button>
        <MenuList />
        <StationList stationList={stationList} />
      </div>
    );
  }
}
