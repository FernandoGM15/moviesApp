import AppProvider from "./context/AppContext/AppProvider";
import Router from "./router/Router";

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
