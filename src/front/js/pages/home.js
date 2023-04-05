import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { VehicleCard } from "../component/VehicleCard";

export const Home = () => {
  const { store, actions } = useContext(Context);

  // useEffect(() => {
  //   if (store.characters.length > 0) {
  //     actions.getCharacteristics();
  //   }
  // }, [store.characters]);
  // useEffect(() => {
  //   if (store.planets.length > 0) {
  //     actions.getPlanetCharacteristics();
  //   }
  // }, [store.planets]);
  // useEffect(() => {
  //   if (store.vehicles.length > 0) {
  //     actions.getVehicleCharacteristics();
  //   }
  // }, [store.vehicles]);

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
      {/*
      <h2 className="text-danger mt-5">Planets</h2>
      <div className="carousel">
        <div className="characters">
          {store.planets.map((planets, indexPlanet) => {
            return <PlanetCard planets={planets} key={indexPlanet} />;
          })}
        </div>
      </div>

      <h2 className="text-danger mt-5">Vehicles</h2>
      <div className="carousel">
        <div className="characters">
          {store.vehicles.map((vehicles, indexVehicle) => {
            return <VehicleCard vehicles={vehicles} key={indexVehicle} />;
          })}
        </div>
      </div> */}
    </div>
  );
};
