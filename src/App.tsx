import { Main } from "./components/Main";
import { DrawerProvider } from "./contexts/DrawerContext";

import "./styles/global.scss";

function App() {
  return (
    <DrawerProvider>
      <Main />
    </DrawerProvider>
  );
}

export default App;
