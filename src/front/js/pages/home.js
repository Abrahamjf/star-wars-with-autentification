import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { VehicleCard } from "../component/VehicleCard";

export const Home = () => {
  const { store, actions } = useContext(Context);


  return (
    <div className="container">
      <h2 className="text-danger mt-5">Characters</h2>
      <div className="carousel">
        <div className="characters">
          {store.people.map((person) => {
            return <CharacterCard character={person} key={person._id} />;
          })}
        </div>
      </div>

      <h2 className="text-danger mt-5">Planets</h2>
      <div className="carousel">
        <div className="characters">
          {store.planets.map((planet) => {
            return <PlanetCard planets={planet} key={planet._id} />;
          })}
        </div>
      </div>

      <h2 className="text-danger mt-5">Vehicles</h2>
      <div className="carousel">
        <div className="characters">
          {store.vehicles.map((vehicles) => {
            return <VehicleCard vehicles={vehicles} key={vehicles._id} />;
          })}
        </div>
      </div>
    </div>
  );
};
