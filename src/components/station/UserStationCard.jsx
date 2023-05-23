import { useEffect, useState } from "react";
import { API_USER_STATION_URL } from "../../config/config";

export default function UserStationCard({ user, station, checkList }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checkList.some((element) => element.userID === user.id)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [checkList, user.id]);

  const updateUserStation = async (method) => {
    await fetch(API_USER_STATION_URL, {
      method: method,
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: user.id,
        stationID: station.id,
      }),
    });
  };

  const handleInputChange = (event) => {
    if (checked) {
      updateUserStation("DELETE");
      setChecked(event.target.checked);
    } else {
      setChecked(event.target.checked);
      updateUserStation("POST");
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        name="userID"
        value={user.id}
        key={user.id}
        className="input--checkbox"
        style={{ display: "inline", marginRight: "10px" }}
        checked={checked}
        onChange={handleInputChange}
      />
      <label htmlFor={user.id}>
        {user.name1} {user.surname1}
      </label>
    </div>
  );
}
