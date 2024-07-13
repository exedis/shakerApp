import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Path } from "@consts/path";
import { Main } from "@screens/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { EventList } from "@screens/EventList";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Layout } from "@components/Layout/Layout";

const cacheEmotion = createCache({
  key: "shaker",
});

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://exedis.github.io/shakerApp/manifest.json">
      <CacheProvider value={cacheEmotion}>
        <Router basename="/shakerApp/">
          <Switch>
            <Route
              path={Path.TO_HOME}
              element={
                <Layout>
                  <Main />
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
          </Switch>
        </Router>
      </CacheProvider>
    </TonConnectUIProvider>
  );
}

export default App;
