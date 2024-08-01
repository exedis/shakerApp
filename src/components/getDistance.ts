type Props = {
  userCoords?: [number, number];
  eventCoords?: [number, number];
};
const EARTH_RADIUS = 6372795;
const METERS_IN_KM = 1000;

export const getDisance = ({ userCoords, eventCoords }: Props) => {
  if (userCoords && eventCoords) {
    const eventLat = eventCoords[0];
    const eventLon = eventCoords[1];

    const userLat = userCoords[0];
    const userLon = userCoords[1];

    // перевести координаты в радианы
    const eventLatRad = (eventLat * Math.PI) / 180;
    const eventLonRad = (eventLon * Math.PI) / 180;
    const userLatRad = (userLat * Math.PI) / 180;
    const userLonRad = (userLon * Math.PI) / 180;

    // косинусы и синусы широт и разницы долгот
    const cosEventLat = Math.cos(eventLatRad);
    const cosUserLat = Math.cos(userLatRad);
    const sinEventLon = Math.sin(eventLonRad);
    const sinUserLon = Math.sin(userLonRad);
    const deltaLon = userLonRad - eventLonRad;
    const cosDelta = Math.cos(deltaLon);
    const sinDelta = Math.sin(deltaLon);

    // вычисления длины большого круга
    const y = Math.sqrt(
      Math.pow(cosUserLat * sinDelta, 2) +
        Math.pow(
          cosEventLat * sinUserLon - sinEventLon * cosUserLat * cosDelta,
          2
        )
    );
    const x = sinEventLon * sinUserLon + cosEventLat * cosUserLat * cosDelta;

    const calculateAtan = Math.atan2(y, x);
    const distance = calculateAtan * EARTH_RADIUS;
    if (distance < METERS_IN_KM) {
      return `${Math.round(distance)} м`;
    }
    const convertInKm = distance / METERS_IN_KM;
    return `${convertInKm.toFixed(2)} км`;
  }
  return null;
};
