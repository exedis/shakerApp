import WebApp from "@twa-dev/sdk";

export const useTelegramUser = () => {
  const initDataUnsafeMock = {
    user: {
      id: 347497067,
      first_name: "Alexey",
      last_name: "",
      username: "chingaevai",
      language_code: "ru",
      allows_write_to_pm: true,
      photo_url:
        "https://t.me/i/userpic/320/Yxi5aZ6lSul2zl4gXvRFYquQxmpTQgNpuZuzdl9MfAY.svg",
    },
    chat_instance: "3145166419576011054",
    chat_type: "private",
    auth_date: "1740520099",
    signature:
      "cXEJ3TcDtdXau7ASOpb-GJdOwM2bM8Zr1mqJQLmKFXwnJH21pD-BVOtV0c9U24qGVq613uKXpUG2yod1f-nHBw",
    hash: "2b72f7b85b2fbe3599cb57c93b6eec8084c3feec906ed243b9285bb497368479",
  };

  const isTelegram = typeof WebApp.initDataUnsafe.user !== "undefined";
  console.log("isTelegram", isTelegram);
  const initData = isTelegram ? WebApp.initDataUnsafe : initDataUnsafeMock;
  return initData?.user;
};
