import { useEffect, useState } from "react";
import { API_STATION_URL } from "../../config/config";

export default function DetailModal({ station }, { user }) {
  const [stationList, setStationList] = useState([]);

  useEffect(() => getStationInfo, []);
  const getStationInfo = async () => {
    await fetch(API_STATION_URL + "/" + station.stationID, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setStationList(json);
        console.log(json)
      });
  };

  return (
    <div>
     {stationList.map((station)=>{
      <h3>station.name</h3>
     })}
    </div>
  );
}
