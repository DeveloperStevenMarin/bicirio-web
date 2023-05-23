import { Link } from "react-router-dom";
export default function MenuList() {
  return (
    <div className="home-content">
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>

      <div className="wrapper">
        <ul>
          <li>
            <Link to={"/users"}>Usuarios</Link>
          </li>
          <li>
            <Link to={"/services"}>Servicios</Link>
          </li>
          <li>
            <Link to={"/locations"}>Ubicaciones</Link>
          </li>
          <li>
            <Link to={"/registers"}>Registros</Link>
          </li>
          <li>
            <Link to={"/stations"}>Estaciones</Link>
          </li>
          <li>
            <Link to={"/schedules"}>Horarios</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
