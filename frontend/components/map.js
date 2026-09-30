import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Papa from "papaparse";
import { useEffect, useState } from "react";

function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getMarkerPosition(event, index, events) {
  const latitude = Number(event.Latitude);
  const longitude = Number(event.Longitude);

  const sameLocation = events.filter(
    (otherEvent) =>
      Number(otherEvent.Latitude) === latitude &&
      Number(otherEvent.Longitude) === longitude
  );

  if (sameLocation.length === 1) {
    return [latitude, longitude];
  }

  const positionInGroup = sameLocation.findIndex(
    (otherEvent) => otherEvent === event
  );

  const angle =
    (positionInGroup / sameLocation.length) * 2 * Math.PI;

  const offset = 0.3;

  return [
    latitude + Math.sin(angle) * offset,
    longitude + Math.cos(angle) * offset,
  ];
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Map() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/data/greenCauseTeamEvents.csv")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not greenCauseTeamEvents.csv");
        }

        return response.text();
      })
      .then((csv) => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,

          complete: (results) => {
            console.log("CSV data:", results.data);
            console.log("Number of events:", results.data.length);

            setEvents(results.data);
          },
        });
      })
      .catch((error) => {
        console.error("Error loading events:", error);
      });
  }, []);

  return (
    <MapContainer
      center={[40, -75]}
      zoom={4}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {events.map((event, index) => {
        const latitude = Number(event.Latitude);
        const longitude = Number(event.Longitude);

        if (
          !Number.isFinite(latitude) ||
          !Number.isFinite(longitude)
        ) {
          return null;
        }

        return (
          <Marker
            key={`${event["Event Name"]}-${index}`}
            position={getMarkerPosition(event, index, events)}
          >
            <Popup>
              <div style={{ width: "300px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  {event["Event Name"]}
                </h3>

                <p>
                  <strong>Date:</strong> {formatDate(event.Date)}
                </p>

                <p>
                  <strong>Location:</strong> {event["Event Location"]}
                </p>

                <p>
                  <strong>Attendees:</strong> {event["# of Attendees"]}
                </p>

                <p
                  style={{
                    marginTop: "12px",
                    marginBottom: "6px",
                    fontWeight: "bold",
                  }}
                >
                  Summary
                </p>

                <p style={{ textAlign: "justify" }}>
                  {event.Activities}
                </p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}