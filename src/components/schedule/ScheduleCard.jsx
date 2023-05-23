import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function ScheduleCard({ schedule }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    const selectedUser = event.target.value;
    navigate("/users/update", { state: { selectedUser } });
  };

  return (
    <section className="section user-section">
      <ul className="list user-list">
        <li key={schedule.id}>
          {schedule.id}
        </li>
        <li>{schedule.id}</li>
      </ul>
      <button
        className="btn btn-edit-users"
        name="id"
        value={JSON.stringify(schedule)}
        onClick={handleClick}
      >
        <BiEdit className="icon--update" />
      </button>
    </section>
  );
}
