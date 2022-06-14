import { Advanced } from "./components/Advanced";
import { Boost } from "./components/Boost";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Showcase } from "./components/Showcase";

export default function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Advanced />
      <Boost />
      <Footer />
    </>
  );
}
