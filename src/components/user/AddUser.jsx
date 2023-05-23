import React, { useState } from "react";
import "./AddUser.css";
import { BiArrowBack } from "react-icons/bi";
import { API_USER_URL } from "../../config/config";

const createUserUrl = API_USER_URL;

export default function AddUser() {
  const [register, setRegister] = useState({});
  const createUser = async () => {
    fetch(createUserUrl, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: register.id,
        password: register.password,
        name1: register.name1,
        name2: register.name2,
        surname1: register.surname1,
        surname2: register.surname2,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Usuario creado con éxito");
          window.location.href = "../users";
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
    window.location.href = "../users";
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
                id="id"
                className="form_input--add-user"
                type="number"
                autoComplete="email"
                pattern="/^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))?$/gm"
                placeholder=" "
                name="id"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="id" className="form_placeholder--add-user">
                Cédula
              </label>
            </div>
            <div className="form_input-container--add-user">
              <input
                id="password"
                className="form_input--add-user"
                type="password"
                placeholder=" "
                name="password"
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="password" className="form_placeholder--add-user">
                Contraseña
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
                onChange={handleChange}
              />
              <div className="form_cut"></div>
              <label htmlFor="name1" className="form_placeholder--add-user">
                Primer nombre
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
                Segundo nombre
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
                Primer apellido
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
                Segundo apellido
              </label>
            </div>
            <button
              type="text"
              className="btn_form-submit--user"
              onClick={createUser}
            >
              Crear usuario
            </button>
          </div>
        </section>
        {/* <Form
          createUser={createUser}
          fields={{
            "primer nombre": "name1",
            "segundo nombre": "name2",
            "cedula": "id",
            "clave": "password",
            "primer apellido": "surname1",
            "segundo apellido": "surname2",
          }}
          handleChange={handleChange}
        /> */}
      </div>
    </div>
  );
}
