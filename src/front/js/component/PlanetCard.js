import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetCard = (props) => {
    const { store, actions } = useContext(Context)

    return (
        <div className="d-flex container m-5">
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.planets.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.planes.name}</h5>
                <p className="card-text">
                    <strong>Population:</strong> {props.planets.popularion}
                    <br></br>
                    <strong>Climate:</strong> {props.planets.climate}
                    <br></br>
                    <strong>Terrain:</strong> {props.planets.terrain}
                </p>
                <Link to={`/Planet/${props.planetCharacter.uid}`}
                    className="btn btn-outline-primary">
                    Learn more!
                </Link>
                <a href="#" className="btn btn-outline-warning amarillo" onClick={(event) => actions.toggleFavorite(props.planets)}>
                    <i className={actions.isFavorite(props.planets.name) == undefined
                        ? "far fa-heart"
                        : "fas fa-heart"}
                    >
                    </i>
                </a>

            </div>
        </div>
    </div>
    )
}