import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import HowWorks from "./components/HowWorks";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <HowWorks />
      <About />
      <Services />
    </div>
  );
}

export default App;
