import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [details, setDetails] = useState("");

  // let character = store.vehicleCharacteristics.find((vehicleCharacteristics) => {
  //   return vehicleCharacteristics.uid == params.id;
  // });
  const getDetails = () => {
    const character = store.vehicles.find(
      (vehicle) => vehicle._id == params.id
    );
    setDetails(character);
    console.log(character);
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
              src={`https://starwars-visualguide.com/assets/img/vehicles/${details?.uid}.jpg`}
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
                    <strong>Vehicle Class</strong>
                  </td>
                  <td>
                    <strong>Manufacturer</strong>
                  </td>
                  <td>
                    <strong>Lenght</strong>
                  </td>
                  <td>
                    <strong>Crew</strong>
                  </td>
                  <td>
                    <strong>Passengers</strong>
                  </td>
                  <td>
                    <strong>Cargo Capacity</strong>
                  </td>
                  <td>
                    <strong>Consumables</strong>
                  </td>
                </tr>
                <tr>
                  <td>{details?.properties?.vehicle_class}</td>
                  <td>{details?.properties?.manufacturer}</td>
                  <td>{details?.properties?.lenght}</td>
                  <td>{details?.properties?.crew}</td>
                  <td>{details?.properties?.passengers}</td>
                  <td>{details?.properties?.cargo_capacity}</td>
                  <td>{details?.properties?.consumables}</td>
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
