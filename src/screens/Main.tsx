import React from "react";
import WebApp from "@twa-dev/sdk";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Link } from "react-router-dom";
import { Path } from "@consts/path";
import { EventData } from "@components/Events/EventList";

export const Main = () => {
  const defaultState = {
    center: [55.730265, 37.635949],
    zoom: 12,
  };
  return (
    <div>
      <p>Карта событий</p>
      <Link to={Path.TO_EVENTS}>Перейти в список</Link>
      <button onClick={() => WebApp.showAlert(`Hello World! `)}>
        Show Alert
      </button>
      <YMaps query={{ apikey: "cf9ae4bb-ef7b-4c05-acd6-cfa7ee09955e" }}>
        <Map defaultState={defaultState} width={"100%"} height={400}>
          {EventData.map((event) => (
            <Placemark key={event.id} geometry={event.coords} />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};
