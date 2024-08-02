import React from "react";
import WebApp from "@twa-dev/sdk";

export const Profile = () => {
  const test = WebApp.initData;
  return (
    <div>
      <p>Профиль</p>
      <p>{WebApp.initDataUnsafe?.user?.username}</p>
      <img
        src={WebApp.initDataUnsafe?.user?.photo_url}
        width={30}
        height={30}
      />
      <p>Рейтинг</p>
      <p>Мои события</p>
      <p>Создать событие</p>
      <p>Посещенные события</p>
      <p>{test.toString()}</p>
    </div>
  );
};
