import React from "react";
import WebApp from "@twa-dev/sdk";
import { EventData, EventType } from "@components/Events/EventList";
import styled from "@emotion/styled";

export const EventList = () => {
  const eventTpl = (event: EventType) => {
    return (
      <EventBlock>
        <EventImage>
          <img src="./mapIcon.png" alt="icon" width={30} />
        </EventImage>
        <div>
          <div>{event.name}</div>
          <div>{event.description}</div>
        </div>
      </EventBlock>
    );
  };

  return (
    <div>
      <p>Список событий</p>
      <div>{EventData.map((event) => eventTpl(event))}</div>
      <br />
      <button onClick={() => WebApp.showAlert(`Hello World! `)}>
        тестовый алерт
      </button>
    </div>
  );
};

export const EventBlock = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const EventImage = styled.div`
  margin-right: 10px;
`;
