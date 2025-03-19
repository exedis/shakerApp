import React from "react";
import { Layout } from "@src/theme/Layout";
import { useStores } from "@store";
import { useNavigate } from "react-router-dom";
import { Path } from "@consts/path";
import { FormatDate } from "@utils/FormatDate";

export const SettingsScreen = () => {
  const {
    AuthStore: { logout },
    UserStore: { user },
  } = useStores();
  const navigate = useNavigate();

  if (!user?.id) {
    navigate(Path.TO_AUTH);
  }
  return (
    <Layout>
      <div>
        <div>О пользователе</div>
        <div>Имя пользователя {user?.username}</div>
        <div>uuid пользователя {user?.uuid}</div>
        <div>Дата последней авторизации {FormatDate(user?.lastVisitAt)}</div>
        <div>Дата регистрации {FormatDate(user?.createdAt)}</div>
      </div>
      <button onClick={logout}>Выйти</button>
    </Layout>
  );
};
