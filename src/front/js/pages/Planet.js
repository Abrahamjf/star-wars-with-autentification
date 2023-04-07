import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [details, setDetails] = useState("");

  // let character = store.planetCharacteristics.find((planetCharacteristics) => {
  //     return planetCharacteristics.uid == params.id

  // })
  const getDetails = () => {
    const planet = store.planets.find((planet) => planet._id == params.id);
    setDetails(planet);
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      <div className="jumbotron container card mb-3 mt-5" key={details?._id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${details?.uid}.jpg`}
              className="img-fluid rounded-start mt-4"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title display-4">
                {details?.properties?.name}{" "}
              </h1>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                perspiciatis sit possimus repudiandae totam, in blanditiis
                accusantium quidem ratione. Reiciendis, itaque. Necessitatibus
                veniam a fuga doloremque. Architecto hic vero aliquid.
              </p>
              <table className="table">
                <tr>
                  <td>
                    <strong>Diameter</strong>
                  </td>
                  <td>
                    <strong>Rotation Period</strong>
                  </td>
                  <td>
                    <strong>Orbital Period</strong>
                  </td>
                  <td>
                    <strong>Population</strong>
                  </td>
                  <td>
                    <strong>Climate</strong>
                  </td>
                  <td>
                    <strong>Terrain</strong>
                  </td>
                  <td>
                    <strong>Surface Water</strong>
                  </td>
                </tr>
                <tr>
                  <td>{details?.properties?.diameter}</td>
                  <td>{details?.properties?.rotation_period}</td>
                  <td>{details?.properties?.orbital_period}</td>
                  <td>{details?.properties?.population}</td>
                  <td>{details?.properties?.climate}</td>
                  <td>{details?.properties?.terrain}</td>
                  <td>{details?.properties?.surface_water}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <Link to="/">
          <span className="btn btn-primary btn-lg mb-4" href="#" role="button">
            Back home
          </span>
        </Link>
      </div>
    </>
  );
};
