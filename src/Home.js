import React from "react";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowWorks from "./components/HowWorks";
import Services from "./components/Services";
import About from "./components/About";

import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <HowWorks />
      <About />

      <Services />

      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
