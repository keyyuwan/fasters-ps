import { useDrawer } from "../../contexts/DrawerContext";
import { Condition } from "../Condition";
import { Contact } from "../Contact";
import { Depositions } from "../Depositions";
import { Drawer } from "../Drawer";
import { FirstSection } from "../FirstSection";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Products } from "../Products";
import { ReneeSection } from "../ReneeSection";
import { WhatsAppButton } from "../WhatsAppButton";
import styles from "./styles.module.scss";

export function Main() {
  const { isDrawerOpen } = useDrawer();

  return isDrawerOpen ? (
    <Drawer />
  ) : (
    <>
      <div className={styles.wrapper}>
        <Header />
        <FirstSection />
      </div>
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
