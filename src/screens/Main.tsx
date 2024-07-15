import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  GeolocationControl,
} from "@pbe/react-yandex-maps";
import { EventData } from "@components/Events/EventList";
import WebApp from "@twa-dev/sdk";

export const Main = () => {
  const viewportStableHeight = WebApp.viewportStableHeight;
  const mapHeight = viewportStableHeight * 0.6;
  console.log("mapHeight", mapHeight);

  const defaultState = {
    center: [55.730265, 37.635949],
    zoom: 12,
    controls: [],
  };
  return (
    <div>
      <p>Карта событий</p>
      <YMaps query={{ apikey: "cf9ae4bb-ef7b-4c05-acd6-cfa7ee09955e" }}>
        <Map defaultState={defaultState} width={"100%"} height={mapHeight}>
          {EventData.map((event) => (
            <Placemark
              key={event.id}
              geometry={event.coords}
              onClick={() => WebApp.showAlert(`Событие ${event.name} `)}
            />
          ))}
          <ZoomControl options={{ position: { left: 10, top: 50 } }} />
          <GeolocationControl options={{ float: "left" }} />
        </Map>
      </YMaps>
    </div>
  );
};
