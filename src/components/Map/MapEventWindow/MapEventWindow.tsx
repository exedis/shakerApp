import React from "react";
import { EventWindowCloseBtn, EventWindowTitle } from "./MapEventWindow.styles";
import { GrClose } from "react-icons/gr";
import { getDisance } from "@components/getDistance";

type Props = {
  title: string;
  description: string;
  eventCoords: [number, number];
  userCoords: [number, number];
  onClose?: () => void;
};

export const MapEventWindow: React.FC<Props> = ({
  title,
  description,
  eventCoords,
  userCoords,
  onClose,
}) => {
  const distanceBetweenPoints = getDisance({ userCoords, eventCoords });
  return (
    <div>
      <EventWindowTitle>
        <h6>Событие: {title}</h6>
        {onClose && (
          <EventWindowCloseBtn onClick={() => onClose()}>
            <GrClose size={40} />
          </EventWindowCloseBtn>
        )}
      </EventWindowTitle>
      <p>Расстояние до места: {distanceBetweenPoints}</p>

      <p>{description}</p>
    </div>
  );
};
