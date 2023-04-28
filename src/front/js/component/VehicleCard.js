import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const VehicleCard = (props) => {
  const { store, actions } = useContext(Context);
  const { vehicles } = props;

  return (
    <div className="d-flex container m-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles?.uid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{vehicles?.properties?.model}</h5>
          <p className="card-text">
            <strong>Manufacturer:</strong> {vehicles?.properties?.manufacturer}
            <br></br>
            <strong>Model:</strong> {vehicles?.properties?.model}
            <br></br>
            <strong>Crew:</strong> {vehicles?.properties?.crew}
            <br></br>
            <strong>Passengers:</strong> {vehicles?.properties?.passengers}
          </p>
          <Link
            to={`/Vehicle/${props.vehicles?._id}`}
            className="btn btn-outline-primary"
          >
            Learn more!
          </Link>
          <button
            type="button"
            className="btn btn-outline-warning amarillo"
            onClick={(event) => actions.toggleFavorite(props.vehicles?._id)}
          >
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
