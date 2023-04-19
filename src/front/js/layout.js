import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { MyHome } from "./pages/MyHome";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Character } from "./pages/Character";
import { Planet } from "./pages/Planet";
import { Vehicle } from "./pages/Vehicle";
import injectContext from "./store/appContext";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
// import { CharacterCard } from "./component/CharacterCard";
// import { VehicleCard } from "./component/VehicleCard";
// import { PlanetCard } from "./component/PlanetCard";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<MyHome />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Home />} path="/home" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Character />} path="/Character/:id" />
            <Route element={<Planet />} path="/Planet/:id" />
            <Route element={<Vehicle />} path="/Vehicle/:id" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
