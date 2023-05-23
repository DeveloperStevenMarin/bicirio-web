import React, { useState } from "react";
import { API_STATION_URL } from "../../config/config";
import { BiArrowBack } from "react-icons/bi";

export default function AddStation() {
  const [register, setRegister] = useState({});
  const createStation = async () => {
    fetch(API_STATION_URL, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: register.name,
        latitude: register.latitude,
        longitude: register.longitude,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Estacion creada con éxito");
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
          <div className="form_input-container--add-user">
              <input
                id="name"
                className="form_input--add-user"
                type="text"
                placeholder=" "
                name="name"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="name" className="form_placeholder--add-user">
                Nombre
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="latitud"
                className="form_input--add-user"
                type="number"
                placeholder=" "
                name="latitude"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="latitude" className="form_placeholder--add-user">
                latitud
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="longitude"
                className="form_input--add-user"
                type="number"
                placeholder=" "
                name="longitude"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="longitude" className="form_placeholder--add-user">
                longitud
              </label>
            </div>
            
            <button
              type="text"
              className="btn_form-submit--user"
              onClick={createStation}
            >
              Crear Estacion
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
