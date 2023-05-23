import { API_SCHEDULE_URL } from "../../config/config";
import MenuList from "../general/MenuList";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { removeLoggedUser } from "../../features/users/loggedUserSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Loading from "../general/Loading/Loading";
import ScheduleList from "./ScheduleList";

export default function Schedules() {
  let [dataIsLoaded, setDataIsLoaded] = useState(false);
  const loggedUser = useSelector((state) => state.Store.loggedUser.data);
  const [scheduleList, setScheduleList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const back = async () => {
    navigate("../");
  };
  useEffect(() => {
    if (!loggedUser) {
      navigate("../");
    } else if (loggedUser.profile <= 0) {
      dispatch(removeLoggedUser(null));
      alert("Usted no es admin");
      navigate("../");
    }
    fetch(API_SCHEDULE_URL, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setScheduleList(json);
        setDataIsLoaded(true);
      });
  }, []);
  console.log(scheduleList);
  if (!dataIsLoaded) {
    return <Loading />;
  } else {
    return (
      <div className="home-content">
        <button className="btn--back" onClick={() => back()}>
          <BiArrowBack />
        </button>
        <MenuList />
        <ScheduleList scheduleList={scheduleList}/>
      </div>
    );
  }
}
