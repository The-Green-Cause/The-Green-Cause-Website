import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Papa from "papaparse";
import { useEffect, useState } from "react";

export default function Map() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
  fetch("/data/events.csv").then((response) => response.text()).then((csv) => {Papa.parse(csv, {header: true, complete: (results) => {setEvents(results.data);}});});
  }, []);
  console.log(events);

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}