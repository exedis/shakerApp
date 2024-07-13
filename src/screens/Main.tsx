import React from "react";
import WebApp from "@twa-dev/sdk";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Link } from "react-router-dom";
import { Path } from "@consts/path";

export const Main = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };
  return (
    <div>
      <p>Главная</p>
      <Link to={Path.TO_EVENTS}>Перейти в список</Link>
      <button onClick={() => WebApp.showAlert(`Hello World! `)}>
        Show Alert
      </button>
      <YMaps query={{ apikey: "cf9ae4bb-ef7b-4c05-acd6-cfa7ee09955e" }}>
        <Map defaultState={defaultState}>
          <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
      </YMaps>
    </div>
  );
};
