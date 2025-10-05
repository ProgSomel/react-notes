//? Named Import
import { Profile as P } from "./components/Gallery";
//? Default Import
import Gal from "./components/Gallery";

export default function App() {
  return (
    <div>
      <div>
        <P />
        <Gal />
      </div>
    </div>
  );
}
