import { json, useLocation, useNavigate } from "react-router-dom";
import {
  API_SCHEDULE_URL,
  API_STATION_URL,
  API_USER_URL,
} from "../../config/config";
import "./Users.css";
import Loading from "../general/Loading/Loading";
import { BiArrowBack, BiX } from "react-icons/bi";
import { useEffect, useState } from "react";
import DetailModal from "../general/DetailModal";

export default function UserDetailsCard() {
  const [inTimeModalActive, setInTimeModalActive] = useState(false);
  const [outTimeModalActive, setOutTimeModalActive] = useState(false);
  const [stationsModalActive, setStationsModalActive] = useState(false);
  const [stationsList, setStationList] = useState([]);
  const [userStations, setUserStations] = useState([]);
  let [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [scheduleList, setScheduleList] = useState([]);
  const selectedUser = useLocation();
  const user = JSON.parse(selectedUser.state.selectedUser);
  let data = { user };

  useEffect(() => {
    getScheduleList();
  }, []);
  switch (user.profile) {
    case 0:
      data.user.profile = "Operario";
      break;
    case 1:
      data.user.profile = "Técnico";
      break;
    case 2:
      data.user.profile = "Supervisor";
      break;
    case 3:
      data.user.profile = "Coordinador";
      break;
  }
  if (user.active === true) {
    data.user.active = "Activo";
  } else {
    data.user.active = "Inactivo";
  }
  scheduleList.map((schedule) => {
    if (schedule.id === user.scheduleID) {
      data.user.scheduleID =
        schedule.assign_in_time + " - " + schedule.assign_out_time;
    } else if (!user.scheduleID) {
      data.user.scheduleID = "No tiene horario asignado";
    }
  });

  const navigate = useNavigate();
  const back = async () => {
    navigate("../users");
  };

  const getScheduleList = async () => {
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
  };

  const getStationList = async () => {
    fetch(API_USER_URL + "/" + user.id + "/stations", {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setStationList(json);
      });
  };
  const getStationInfo = async (station) => {
    setDataIsLoaded(false);
    await fetch(API_STATION_URL + "/" + station, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  };

  const closeModal = async (event) => {
    if (event.target.value === "stations") {
      setStationsModalActive(false);
    } else if (event.target.value === "inTime") {
      setInTimeModalActive(false);
    } else {
      setOutTimeModalActive(false);
    }
  };

  const openModal = async (event) => {
    if (event.target.value === "stations") {
      setStationsModalActive(true);
      getStationList().then(
        stationsList
          .map((station) => {
            setDataIsLoaded(false);
            setUserStations(...userStations, getStationInfo(station.stationID));
            console.log(userStations);
          })
          .then(setDataIsLoaded(true))
      );
    } else if (event.target.value === "inTime") {
      setInTimeModalActive(true);
    } else {
      setOutTimeModalActive(true);
    }
  };

  if (!dataIsLoaded) {
    return <Loading />;
  } else {
    return (
      <div className="home-content">
        <button className="btn--back" onClick={() => back()}>
          <BiArrowBack />
        </button>
        <div className="content">
          <div className="title">
            {data.user.name1} {data.user.surname1}
          </div>
          <div className="container container--user">
            <section
              className="section user-section"
              style={{ flexDirection: "column", gap: "0px" }}
            >
              <div
                className="user-list-title"
                style={{ justifyContent: "space-between" }}
              >
                <h3>Cédula: </h3>
                <h3>{data.user.id}</h3>
              </div>
              <div
                className="user-list-title"
                style={{ justifyContent: "space-between" }}
              >
                <h3>Perfil: </h3>
                <h3>{data.user.profile}</h3>
              </div>
              <div
                className="user-list-title"
                style={{ justifyContent: "space-between" }}
              >
                <h3>Estado: </h3>
                <h3>{user.active}</h3>
              </div>
              <div
                className="user-list-title"
                style={{ justifyContent: "space-between" }}
              >
                <h3>Horario: </h3>
                <h3>{user.scheduleID}</h3>
              </div>
              <div
                className="user-list-title"
                style={{ justifyContent: "center" }}
              >
                <button>Ver horas de entrada</button>
              </div>
              <div
                className="user-list-title"
                style={{ justifyContent: "center" }}
              >
                <button>Ver horas de salida</button>
              </div>
              <div
                className="user-list-title"
                style={{ justifyContent: "center" }}
              >
                <button onClick={openModal} value={"stations"}>
                  Ver estaciones
                </button>
              </div>

              <button
                className="btn btn-edit-users"
                name="id"
                value={JSON.stringify(user)}
              ></button>
            </section>
          </div>
          <div
            className={
              stationsModalActive
                ? "userDetailsCardModal"
                : "userDetailsCardModal--close"
            }
          >
            <button
              className="btn-close--modal"
              onClick={closeModal}
              value={"stations"}
            >
              <BiX></BiX>
            </button>
            <section className="section user-section">
              {stationsList.map((station) => (
                <DetailModal station={station} user={user}></DetailModal>
              ))}
            </section>
          </div>
        </div>
      </div>
    );
  }
}
