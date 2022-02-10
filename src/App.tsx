import { Condition } from "./components/Condition";
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
      <WhatsAppButton />
    </>
  );
}

export default App;
