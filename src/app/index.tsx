
import appRoutes from './routes/app';
import AppProvider from '@components/providers/app-provider';
import Router from '@lib/router';

function App() {
  return (
    <AppProvider>
      <Router routes={appRoutes}/>
    </AppProvider>
  );
}

export default App;
