
import AppProvider from "@components/providers/app-provider";
import Router from "@lib/router";

import appRoutes from "./routes";


function App() {
  return (
    <AppProvider>
      <Router routes={appRoutes} />
    </AppProvider>
  );
}

export default App;
