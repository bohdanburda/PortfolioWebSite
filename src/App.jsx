import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Technologies from "./components/technologies/technologies";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="bg_section">
      <Header />
      <Nav />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

//<Technologies />

export default App;
