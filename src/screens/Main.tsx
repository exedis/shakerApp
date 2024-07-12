import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import WebApp from "@twa-dev/sdk";

export const Main = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };
  return (
    <div>
      <p>Главная</p>
      <YMaps>
        <Map defaultState={defaultState}>
          <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
      </YMaps>
      <button onClick={() => WebApp.showAlert(`Hello World! `)}>
        Show Alert
      </button>
    </div>
  );
};
