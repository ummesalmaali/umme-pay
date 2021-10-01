import "./App.css";
import { Route, Switch } from "react-router-dom";

// router//

import Home from "./Home";
import About from "./pages/About";
import ContactForm from "./components/ContactForm";
import Service from "./pages/Service";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/service" component={Service} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  );
}

export default App;
