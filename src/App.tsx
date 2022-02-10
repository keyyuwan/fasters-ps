import { Condition } from "./components/Condition";
import { Depositions } from "./components/Depositions";
import { FirstSection } from "./components/FirstSection";
import { Products } from "./components/Products";
import { ReneeSection } from "./components/ReneeSection";
import { WhatsAppButton } from "./components/WhatsAppButton";

import "./styles/global.scss";

function App() {
  return (
    <>
      <FirstSection />
      <ReneeSection />
      <Condition />
      <Products />
      <Depositions />
      <WhatsAppButton />
    </>
  );
}

export default App;
