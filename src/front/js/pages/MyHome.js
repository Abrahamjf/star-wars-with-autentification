import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
//import { ItemCard } from "../component/ItemCard";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { VehicleCard } from "../component/VehicleCard";
import { Link } from "react-router-dom";

export const MyHome = () => {
  const { store, actions } = useContext(Context);

  return (
    <React.Fragment>
      {store.token ? (
        <div className="container">
          <h2 className="text-danger text-start my-4 display-4">Characters</h2>
          <div className=" carousel mb-5">
            <div className="itemcard gap-5">
              {store.people.map((character, index) => {
                return (
                  <CharacterCard
                    character={character}
                    key={character._id}
                    endpoint="people"
                    index={index}
                  />
                );
              })}
            </div>
          </div>
          <h2 className="text-danger text-start my-4 display-4">Planets</h2>
          <div className=" carousel mb-5">
            <div className="itemcard gap-5">
              {store.planets.map((planet) => {
                return (
                  <PlanetCard item={planet} key={planet._id} endpoint="planets" />
                );
              })}
            </div>
          </div>
          <h2 className="text-danger text-start my-4 display-4">Vehicles</h2>
          <div className=" carousel mb-5">
            <div className="itemcard gap-5">
              {store.vehicles.map((vehicle) => {
                return (
                  <VehicleCard
                    item={vehicle}
                    key={vehicle._id}
                    endpoint="vehicles"
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="card text-bg-dark">
          <img
            src="https://i.imgur.com/SmV3jTL.jpeg"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay d-flex justify-content-center align-items-center">
            <div className="d-flex">
              <Link to="/signup">
                <button className="btn btn-dark btn-lg">Please Sign-up</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
