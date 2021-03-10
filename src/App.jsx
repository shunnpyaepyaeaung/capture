import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
};

export default App;
