import React, { useEffect } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Path } from "@consts/path";
import { BrowserRouter as Router } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { EventList } from "@pages/EventList";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Layout } from "@components/Layout/Layout";
import { Profile } from "@pages/Profile";
import { YMaps } from "@pbe/react-yandex-maps";
import { MapLayout } from "@pages/Map";
import { stores, StoresContext } from "@store";
import WebApp from "@twa-dev/sdk";
import { CreateEvent } from "@pages/CreateEvent";

const cacheEmotion = createCache({
  key: "shaker",
});

function App() {
  useEffect(() => {
    WebApp.ready();
  }, []);

  return (
    <StoresContext.Provider value={stores}>
      <TonConnectUIProvider manifestUrl="https://exedis.github.io/shakerApp/manifest.json">
        <CacheProvider value={cacheEmotion}>
          <Router basename="/shakerApp/">
            <Switch>
              <Route
                path={Path.TO_HOME}
                index
                element={
                  <Layout>
                    <YMaps
                      query={{ apikey: "cf9ae4bb-ef7b-4c05-acd6-cfa7ee09955e" }}
                    >
                      <MapLayout />
                    </YMaps>
                  </Layout>
                }
              />
              <Route
                path={Path.TO_EVENTS}
                element={
                  <Layout>
                    <EventList />
                  </Layout>
                }
              />
              <Route
                path={Path.TO_PROFILE}
                element={
                  <Layout>
                    <Profile />
                  </Layout>
                }
              />
              <Route
                path={Path.TO_CREATE_EVENT}
                element={
                  <Layout>
                    <CreateEvent />
                  </Layout>
                }
              />
            </Switch>
          </Router>
        </CacheProvider>
      </TonConnectUIProvider>
    </StoresContext.Provider>
  );
}

export default App;
