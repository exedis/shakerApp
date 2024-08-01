import { createContext, useContext } from "react";
import { MapStore } from "./map";

const createStore = () => {
  const mapStore = new MapStore();
  return {
    mapStore,
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
