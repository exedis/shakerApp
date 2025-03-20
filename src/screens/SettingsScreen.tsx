import React from "react";
import { Layout } from "@src/theme/Layout";
import { useStores } from "@store";
import { FormatDate } from "@utils/FormatDate";
import WebApp from "@twa-dev/sdk";

export const SettingsScreen = () => {
  const data = WebApp?.initData;

  const {
    AuthStore: { logout },
    UserStore: { user },
  } = useStores();
  // const navigate = useNavigate();

  // if (!user?.id) {
  //   navigate(Path.TO_AUTH);
  // }
  return (
    <Layout>
      {JSON.stringify(data)}
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
