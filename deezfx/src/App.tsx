import "./App.css";
import { Navbar } from "./01-Components/Navbar.tsx";
import { MainSection } from "./01-Components/MainSection.tsx";
import { Footer } from "./01-Components/Footer.tsx";

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
