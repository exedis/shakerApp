import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Map, Clusterer, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import { EventData } from "@components/Events/EventList";
import { hydrateRoot } from "react-dom/client";
import WebApp from "@twa-dev/sdk";
import { observer } from "mobx-react-lite";
import { useStores } from "@store";
import { MapEventWindow } from "@components/Map/MapEventWindow/MapEventWindow";

const BalloonContentLayout = (layoutFactory, Component) => {
  const html = ReactDOMServer.renderToString(Component);
  const Layout = layoutFactory?.createClass(`<div id="balloon">${html}</div>`, {
    build: function () {
      Layout.superclass.build.call(this);
    },
  });

  return Layout;
};

const Balloon = (props) => {
  return (
    <div>
      <h1>Test {props.id}</h1>
      <button>Click me</button>
    </div>
  );
};

export const MapLayout = observer(() => {
  const {
    mapStore: {
      setCenterMapOnUserPosition,
      centerMapCoordinates,
      setMapCenterNewCoords,
      attach,
      detach,
      userPosition,
    },
  } = useStores();

  const state = {
    ymaps: null,
    selectedPoint: null,
  };
  const viewportStableHeight = WebApp.viewportStableHeight;
  const mapHeight = viewportStableHeight * 0.6;
  const [mapState, setMapState] = useState(state);
  const mapRef = useRef(null);

  //   const setCenterMapOnUserPosition = () => {
  //     console.log("mapState?.ymaps", mapState?.ymaps);

  //     mapState?.ymaps?.geolocation
  //       ?.get({
  //         // Выставляем опцию для определения положения по ip
  //         provider: "yandex",
  //         // Карта автоматически отцентрируется по положению пользователя.
  //         mapStateAutoApply: true,
  //       })
  //       .then(function (result) {
  //         mapRef.current?.geoObjects.add(result.geoObjects);
  //         console.log("result.geoObjects", result.geoObjects);
  //       });
  //   };
  const onPlacemarkClick = (point) => () => {
    setMapState({ ...mapState, selectedPoint: point });
  };

  useEffect(() => {
    mapRef.current?.setCenter(centerMapCoordinates, 14);
  }, [centerMapCoordinates]);

  useEffect(() => {
    mapRef.current?.events.add("boundschange", function (event) {
      setMapCenterNewCoords(event.originalEvent.newCenter);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    attach();
    return detach;
  }, [attach, detach]);

  const { selectedPoint, ymaps } = mapState;

  const mapStateDef = {
    center: centerMapCoordinates,
    zoom: 12,
    controls: [],
  };

  const [myPosition, setMyPosition] = useState([]);
  const [myPositionError, setMyPositionError] = useState("");

  function getMyPosition() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "denied") {
            WebApp.showAlert("Please allow location access.");

            window.location.href = "app-settings:location";
          } else {
            navigator.geolocation.getCurrentPosition(
              (pos) => {
                setMyPosition([pos.coords.latitude, pos.coords.longitude]);
              },
              (err) =>
                setMyPositionError(`Ошибка(${err.code}): ${err.message}`),
              { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true }
            );
          }
        });
    } else {
      WebApp.showAlert("Geolocation is not supported in your browser.");
    }
  }

  return (
    <div className="App">
      <Map
        width={"100%"}
        height={mapHeight}
        defaultState={mapStateDef}
        onLoad={(ymaps) => setMapState({ ...mapState, ymaps })}
        instanceRef={mapRef}
      >
        <Clusterer
          options={{
            preset: "islands#invertedVioletClusterIcons",
            groupByCoordinates: false,
            balloonPanelMaxMapArea: Infinity,
          }}
        >
          {ymaps &&
            EventData.map((point, index) => (
              <Placemark
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                key={index}
                geometry={point.coords}
                onBalloonOpen={() => {
                  hydrateRoot(
                    document.getElementById("balloon"),
                    <Balloon id={point.title} />
                  );
                }}
                onClick={onPlacemarkClick(point)}
                options={{
                  balloonContentLayout: BalloonContentLayout(
                    ymaps.templateLayoutFactory,
                    <Balloon />
                  ),
                  balloonPanelMaxMapArea: Infinity,
                }}
              />
            ))}
        </Clusterer>
        <Placemark
          geometry={userPosition}
          options={{
            zIndex: 9,
            iconLayout: "default#image",
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38],
            iconImageHref: "./vite.svg",
          }}
        />
        <ZoomControl options={{ position: { left: 10, top: 50 } }} />
        {/* <GeolocationControl options={{ float: "left" }} /> */}
      </Map>
      <div id="test" />
      {selectedPoint && (
        <MapEventWindow
          title={selectedPoint.title}
          description={selectedPoint.description}
          eventCoords={selectedPoint.coords}
          userCoords={userPosition}
          onClose={() => setMapState({ ...mapState, selectedPoint: null })}
        />
      )}
      <br />
      {!selectedPoint && (
        <button onClick={setCenterMapOnUserPosition}>
          Показать события около меня
        </button>
      )}
      <button
        onClick={() => {
          getMyPosition();
          WebApp.showAlert(`position: ${myPosition} ${myPositionError}`);
        }}
      >
        тестовый алерт2
      </button>
    </div>
  );
});
