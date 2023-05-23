import React, { useState } from "react";
import "./AddUser.css";
import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { API_USER_URL } from "../../config/config";
import { useSelector } from "react-redux";

export default function UpdateUser() {
  const loggedUser = useSelector((state) => state.Store.loggedUser.data);
  const [register, setRegister] = useState();
  const selectedUser = useLocation();
  const navigate = useNavigate();
  const profileOptions = [
    { value: 0, label: "Operario" },
    { value: 1, label: "Técnico" },
    { value: 2, label: "Supervisor" },
    { value: 3, label: "Coordinador" },
  ];
  
  const options = profileOptions.filter(option=> loggedUser.profile>=option.value)
  const userToUpdate = JSON.parse(selectedUser.state.selectedUser);
  const updateUserUrl = API_USER_URL + "/" + userToUpdate.id;
  const back = () => {
    navigate("../users");
  };
  const handleSubmit = async () => {
    try {
      await fetch(updateUserUrl, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      })
        .then(navigate("../users"))
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
    console.log(register);
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
                id="password"
                className="form_input--add-user"
                type="text"
                placeholder=" "
                name="password"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="password" className="form_placeholder--add-user">
                {userToUpdate.password}
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="name1"
                className="form_input--add-user"
                type="text"
                placeholder=" "
                autoComplete="new-password"
                name="name1"
                minLength={3}
                maxLength={20}
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="name1" className="form_placeholder--add-user">
                {userToUpdate.name1}
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="name2"
                className="form_input--add-user"
                type="text"
                placeholder=" "
                name="name2"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="name2" className="form_placeholder--add-user">
                {userToUpdate.name2}
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="surname1"
                className="form_input--add-user"
                type="text"
                placeholder=" "
                name="surname1"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="surname1" className="form_placeholder--add-user">
                {userToUpdate.surname1}
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="surname2"
                className="form_input--add-user"
                type="text"
                placeholder=" "
                name="surname2"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="surname2" className="form_placeholder--add-user">
                {userToUpdate.surname2}
              </label>
            </div>
            <div className="form_input-container--add-user">
              <select
                name="profile"
                defaultValue={userToUpdate.profile}
                onChange={handleChange}
                className="form_input--add-user"
              >
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
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
