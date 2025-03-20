import React, { useEffect } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Path } from "@consts/path";
import { MainScreen } from "@screens/MainScreen";
import { BrowserRouter as Router } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { stores, StoresContext } from "@store";
import { TrackScreen } from "@screens/TrackScreen/TrackScreen";
import WebApp from "@twa-dev/sdk";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { UploadScreen } from "@screens/UploadScreen";
import { SettingsScreen } from "@screens/SettingsScreen";
import { AuthScreen } from "@screens/AuthScreen";
import { PrivateRoute } from "@components/PrivateRoute";
import { PublicRoute } from "@components/PublicRoute";

function App() {
  useEffect(() => {
    WebApp.ready();
  }, []);

  const cacheEmotion = createCache({
    key: "moro",
  });

  return (
    <StoresContext.Provider value={stores}>
      <TonConnectUIProvider manifestUrl="https://exedis.github.io/shakerApp/tonconnect-manifest.json">
        <CacheProvider value={cacheEmotion}>
          {/* <Router basename="/"> */}
          <Router basename="/shakerApp">
            <Switch>
              <Route
                path={Path.TO_HOME}
                element={
                  <PrivateRoute>
                    <MainScreen />
                  </PrivateRoute>
                }
              />
              <Route
                path={Path.TO_TRACK}
                element={
                  <PrivateRoute>
                    <TrackScreen />
                  </PrivateRoute>
                }
              />
              <Route
                path={Path.TO_UPLOAD}
                element={
                  <PrivateRoute>
                    <UploadScreen />
                  </PrivateRoute>
                }
              />
              <Route
                path={Path.TO_SETTINGS}
                element={
                  <PrivateRoute>
                    <SettingsScreen />
                  </PrivateRoute>
                }
              />
              <Route
                index
                path={Path.TO_AUTH}
                element={
                  <PublicRoute>
                    <AuthScreen />
                  </PublicRoute>
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
