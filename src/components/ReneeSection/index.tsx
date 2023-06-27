import { Renee } from "./Renee";
import { Nelson } from "./Nelson";
import { Benefits } from "../Benefits";

export function ReneeSection() {
  return (
    <div id="empresa" style={{ paddingTop: 32 }}>
      <Renee />

      <Nelson />

      <Benefits />
    </div>
  );
}
