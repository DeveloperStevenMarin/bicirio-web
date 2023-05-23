import React, { useState } from "react";

import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { API_STATION_URL } from "../../config/config";

export default function UpdateStation() {
  const [register, setRegister] = useState();
  const selectedStation = useLocation();
  const navigate = useNavigate();

  const stationToUpdate = JSON.parse(selectedStation.state.selectedStation);
  const updateStationUrl = API_STATION_URL + "/" + stationToUpdate.id;
  const back = () => {
    navigate("../stations");
  };
  const handleSubmit = async (e) => {
    try {
      await fetch(updateStationUrl, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      })
        .then(navigate("/stations"))
        .catch((error) => {
          alert("Por favor verifique los datos:" + error);
        });
    } catch (e) {
      alert(e);
    }
  };

  const handleChange = async (e) => {
    await setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
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
                {stationToUpdate.name}
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
                {stationToUpdate.longitude}
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="latitude"
                className="form_input--add-user"
                type="number"
                placeholder=" "
                name="latitude"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="latitude" className="form_placeholder--add-user">
                {stationToUpdate.latitude}
              </label>
            </div>
            <button
              type="text"
              className="btn_form-submit--user"
              onClick={handleSubmit}
            >
              Actualizar informacion
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
