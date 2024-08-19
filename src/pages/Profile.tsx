import React from "react";
import WebApp from "@twa-dev/sdk";
import { useNavigate } from "react-router-dom";
import { Path } from "@consts/path";

export const Profile = () => {
  // const test = WebApp.initData;
  const navigate = useNavigate();
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
      <button onClick={() => navigate(Path.TO_CREATE_EVENT)}>создать</button>
    </div>
  );
};
