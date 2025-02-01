import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Path } from "@consts/path";
import { MainScreen } from "@screens/MainScreen";
import { BrowserRouter as Router } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { stores, StoresContext } from "@store";
import { TrackScreen } from "@screens/TrackScreen";

function App() {
  return (
    <StoresContext.Provider value={stores}>
      <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
        <Router>
          <Switch>
            <Route path={Path.TO_HOME} element={<MainScreen />} />
            <Route path={Path.TO_TRACK} element={<TrackScreen />} />
          </Switch>
        </Router>
      </TonConnectUIProvider>
    </StoresContext.Provider>
  );
}

export default App;
