import React, { useRef, useEffect } from "react";
import { useYMaps } from "@pbe/react-yandex-maps";

export const CustomMap = ({ children, width, height, defaultState }) => {
  const mapRef = useRef(null);
  const ymaps = useYMaps(["Map"]);

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    new ymaps.Map(mapRef.current, defaultState);
  }, [ymaps, defaultState]);

  return (
    <div ref={mapRef} style={{ width, height }}>
      {children}
    </div>
  );
};
