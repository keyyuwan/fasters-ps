import { Condition } from "./components/Condition";
import { Contact } from "./components/Contact";
import { Depositions } from "./components/Depositions";
import { FirstSection } from "./components/FirstSection";
import { Footer } from "./components/Footer";
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
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
