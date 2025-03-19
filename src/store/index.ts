import { createContext, useContext } from "react";
import { TrackStore } from "./trackStore";
import { UploadStore } from "./uploadStore";
import { PlayerStore } from "./playerStore";
import { AuthStore } from "./authStore";
import { UserStore } from "./userStore";

const createStore = () => {
  const trackStore = new TrackStore();
  const uploadStore = new UploadStore();
  const playerStore = new PlayerStore();
  const userStore = new UserStore();
  const authStore = new AuthStore(userStore);

  return {
    AuthStore: authStore,
    PlayerStore: playerStore,
    TrackStore: trackStore,
    UploadStore: uploadStore,
    UserStore: userStore,
  };
};

export const stores = createStore();

export type RootStore = ReturnType<typeof createStore>;

export const StoresContext = createContext<RootStore | null>(null);

export const useStores = (): RootStore => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const stores = useContext(StoresContext);

  if (!stores) {
    throw new Error(
      "useStores() следует использовать внутри <StoresContext.provider />"
    );
  }

  return stores;
};
