import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../home/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { removeLoggedUser } from "../../features/users/loggedUserSlice";
import { API_OUT_TIME_URL } from "../../config/config";
import { useEffect } from "react";
export default function WorkingArea() {
  const loggedUser = useSelector((state) => state.Store.loggedUser.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  useEffect(() => {
    // Obtener la ubicación cada 5 minutos (300,000 milisegundos)
    const intervalo = 60000;

    // Función para obtener la ubicación actual
    function obtenerUbicacion() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (posicion) => {
            const latitud = posicion.coords.latitude;
            const longitud = posicion.coords.longitude;
            const precision = posicion.coords.accuracy;
            alert(
              `Latitud: ${latitud}\nLongitud: ${longitud}\nPrecisión: ${precision} metros`
            );
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error("Geolocalización no soportada por este navegador");
      }
    }

    // Obtener la ubicación cada 5 minutos
    const intervalId = setInterval(obtenerUbicacion, intervalo);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);
  const logout = async () => {
    out_time(loggedUser.id, loggedUser.schedule);
    dispatch(removeLoggedUser(null));
    navigate("../");
  };

  return (
    <div className="home-content">
      <button className="btn--logout" onClick={() => logout()}>
        <BiLogOut />
      </button>
      <div className="content">
        <div className="title">Área de trabajo</div>
        <p>
          {loggedUser.name1} {loggedUser.surname1}
        </p>
        <ul>
          <li>Uno</li>
          <li>Dos</li>
          <li>Tres</li>
        </ul>
      </div>
    </div>
  );
}
