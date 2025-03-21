import { useTelegramUser } from "@src/hooks/useTelegramData";
import { Layout } from "@src/theme/Layout";
import { useStores } from "@store";
import WebApp from "@twa-dev/sdk";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";

export const AuthScreen: React.FC = observer(() => {
  // const dataUser = JSON.stringify(WebApp?.initData);
  const dataUser = JSON.stringify(WebApp?.initDataUnsafe.user);
  const {
    AuthStore: { login, verify, verifyCode, setVerifyCode, isAuthendificated },
  } = useStores();
  // const navigate = useNavigate();

  const [tgId, setTgId] = useState(null);

  useEffect(() => {
    const getTgId = useTelegramUser().id;
    setTgId(getTgId);
  }, []);

  console.log("isAuthendificated", isAuthendificated, tgId);

  // const searchParams = new URLSearchParams({
  //   bot_id: "7627400495",
  //   request_access: "write",
  //   origin: "https://exedis.github.io/shakerApp/auth",
  //   return_to: "https://exedis.github.io/shakerApp/auth",
  // });
  const data =
    "user=%7B%22id%22%3A347497067%2C%22first_name%22%3A%22Alexey%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22chingaevai%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FYxi5aZ6lSul2zl4gXvRFYquQxmpTQgNpuZuzdl9MfAY.svg%22%7D&chat_instance=3145166419576011054&chat_type=private&auth_date=1742582758&signature=e909ZT46M6E2XrCAC7lol20NB-q4VLII8yoH1ReqBJT9vt_LZ3ZBRAK-GIy1FnMCAfZ_ZCRbPmygQE-ULorKAg&hash=11725655bffc656a14474c602b17ee6f938f04d482fb4316c3a82e6b8e6834fa";
  // const url = "https://oauth.telegram.org/auth?" + searchParams.toString();
  console.log("data", data);
  return (
    <Layout>
      <div>
        {dataUser}
        <button onClick={() => login(data, dataUser)}>
          Войти через Telegram
        </button>

        <br />
        <input
          type="code"
          value={verifyCode}
          onChange={(e) => setVerifyCode(e.target.value)}
        />
        <button onClick={() => verify(useTelegramUser())}>Отправить</button>
      </div>
      <br />
    </Layout>
  );
});
