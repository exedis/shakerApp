import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { EventData } from "@components/Events/EventList";

export const Main = () => {
  const defaultState = {
    center: [55.730265, 37.635949],
    zoom: 12,
  };
  return (
    <div>
      <p>Карта событий</p>
      <YMaps query={{ apikey: "cf9ae4bb-ef7b-4c05-acd6-cfa7ee09955e" }}>
        <Map defaultState={defaultState} width={"100%"} height={"100%"}>
          {EventData.map((event) => (
            <Placemark key={event.id} geometry={event.coords} />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};
