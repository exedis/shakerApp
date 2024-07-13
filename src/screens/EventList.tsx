import React from "react";
import WebApp from "@twa-dev/sdk";

export const EventList = () => {
  return (
    <div>
      <p>Список событий</p>
      <button onClick={() => WebApp.showAlert(`Hello World! `)}>
        Show Alert Список событий
      </button>
    </div>
  );
};
