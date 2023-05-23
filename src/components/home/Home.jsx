import React, { useEffect, useState } from "react";
import "./Home.css";
import { BiLogOut } from "react-icons/bi";
import MenuList from "../general/MenuList";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeLoggedUser } from "../../features/users/loggedUserSlice";
import { API_OUT_TIME_URL } from "../../config/config";
import WorkingArea from "../WorkingArea/WorkingArea";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedUser = useSelector((state) => state.Store.loggedUser.data);
  useEffect(() => {
    if (!loggedUser) {
      navigate("../");
      // } else if (loggedUser.profile <= 0) {
      //   dispatch(removeLoggedUser(null));
      //   alert("Usted no es admin");
      //   navigate("../");
      //
    }
    document.title = `Bicirio`;
  }, []);
  const logout = async () => {
    out_time(loggedUser.id, loggedUser.schedule);
    dispatch(removeLoggedUser(null));
    navigate("../");
  };
  const out_time = async (userId, scheduleID) => {
    await fetch(API_OUT_TIME_URL, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: userId,
        scheduleID: scheduleID,
      }),
    });
  };

  if (!loggedUser) {
    <></>;
  }
  if (loggedUser.profile < 2) {
    return <WorkingArea />;
  } else {
    return (
      <div className="home-content">
        <button className="btn--logout" onClick={() => logout()}>
          <BiLogOut />
        </button>
        <MenuList />
        <div className="content">
          <div className="title">Bienvenido</div>
          <p>
            {loggedUser.name1} {loggedUser.surname1}
          </p>
        </div>
      </div>
    );
  }
}
