import React, { useState } from "react";
import { API_SCHEDULE_URL, API_USER_URL } from "../../config/config";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function AddSchedule() {
  const currentDate = new Date();
  const loggedUser = useSelector((state) => state.Store.loggedUser.data);
  const userList = useSelector((state) => state.Store.userList.data);
  const [register, setRegister] = useState({});
  const assignShceduleToUser = async (user, schedule) => {
    console.log('User: '+ user+ ' Schedule:'+ schedule)
    try {
      await fetch(API_USER_URL + "/" + user, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({scheduleID: schedule}),
      })
        .then()
        .catch((error) => {
          alert("Por favor verifique los datos:" + error);
        });
    } catch (e) {
      alert(e);
    }
  };
  const createSchedule = async () => {
    fetch(API_SCHEDULE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assign_in_time: register.assign_in_time,
        assign_out_time: register.assign_out_time,
        break_time: register.break_time,
        userID: register.userID,
        timestamp: currentDate,
        coordinator: loggedUser.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          assignShceduleToUser(register.userID, data.id);
          alert("Horario creado con éxito");
          window.location.href = "./";
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleChange = (event) => {
    event.persist();
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
    console.log(register);
  };

  const back = () => {
    window.location.href = "./";
  };

  return (
    <div className="home-content">
      <button className="btn--back" onClick={back}>
        <BiArrowBack />
      </button>
      <div className="content">
        <section className="section user-section">
          <div className="form form--add-user">
            <label for="operario">Operario:</label>
            <select name="userID" onChange={handleChange} className="form_input--add-user" style={{height: '50px'}}>
              {userList.map((user) => (
                <option value={user.id}>
                  {user.name1} {user.surname1}
                </option>
              ))}
            </select>
            <div className="form_input-container--add-user">
              <input
                id="latitud"
                className="form_input--add-user"
                type="time"
                placeholder=" "
                name="assign_in_time"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="latitude" className="form_placeholder--add-user">
                Hora de ingreso
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="longitude"
                className="form_input--add-user"
                type="time"
                placeholder=" "
                name="assign_out_time"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="longitude" className="form_placeholder--add-user">
                Hora de egreso
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="longitude"
                className="form_input--add-user"
                type="time"
                placeholder=" "
                name="break_time"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="longitude" className="form_placeholder--add-user">
                Hora de descanso
              </label>
            </div>

            <button
              type="text"
              className="btn_form-submit--user"
              onClick={createSchedule}
            >
              Crear Horario
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
