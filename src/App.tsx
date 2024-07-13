import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Path } from "@consts/path";
import { Main } from "@screens/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { EventList } from "@screens/EventList";

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://exedis.github.io/shakerApp/manifest.json">
      <Router>
        <Switch>
          <Route path={Path.TO_HOME} element={<Main />} />
          <Route path={Path.TO_EVENTS} element={<EventList />} />
        </Switch>
      </Router>
    </TonConnectUIProvider>
  );
}

export default App;
