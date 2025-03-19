import { useTelegramUser } from "@src/hooks/useTelegramData";
import { Layout } from "@src/theme/Layout";
import { useStores } from "@store";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";

export const AuthScreen: React.FC = observer(() => {
  const {
    AuthStore: { login, verify, verifyCode, setVerifyCode, isAuthendificated },
  } = useStores();
  // const navigate = useNavigate();

  const [tgId, setTgId] = useState(null);

  useEffect(() => {
    const getTgId = useTelegramUser().id;
    setTgId(getTgId);
  }, []);

  console.log("isAuthendificated", isAuthendificated);

  const searchParams = new URLSearchParams({
    bot_id: "7627400495",
    request_access: "write",
    origin: "https://exedis.github.io/shakerApp/auth",
    return_to: "https://exedis.github.io/shakerApp/auth",
  });

  const url = "https://oauth.telegram.org/auth?" + searchParams.toString();

  return (
    <Layout>
      <div>
        <button onClick={() => login(tgId)}>Войти через Telegram</button>

        <br />
        <input
          type="code"
          value={verifyCode}
          onChange={(e) => setVerifyCode(e.target.value)}
        />
        <button onClick={() => verify(useTelegramUser())}>Отправить</button>
      </div>
      <br />
      {url}
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?7"
        data-telegram-login="moro_music_bot"
        data-size="large"
        data-auth-url="https://localhost:3000/auth"
        data-request-access="write"
      ></script>
    </Layout>
  );
});
