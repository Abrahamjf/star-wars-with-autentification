import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);
  const { planets } = props;
  console.log(planets);
  return (
    <div className="d-flex container m-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{planets?.properties?.name}</h5>
          <p className="card-text">
            <strong>Population:</strong> {planets?.properties?.population}
            <br></br>
            <strong>Climate:</strong> {planets?.properties?.climate}
            <br></br>
            <strong>Terrain:</strong> {planets?.properties?.terrain}
          </p>
          <Link
            to={`/Planet/${props.planets?.uid}`}
            className="btn btn-outline-primary"
          >
            Learn more!
          </Link>
          <button
            type="button"
            className="btn btn-outline-warning amarillo"
            onClick={(event) => actions.toggleFavorite(props.planets?._id)}
          >
            <i
            className="far fa-heart"
            ></i>
            {/* <i
              className={
                actions.isFavorite(props.planets?.name) == undefined
                  ? "far fa-heart"
                  : "fas fa-heart"
              }
            ></i> */}
          </button>
        </div>
      </div>
    </div>
  );
};
