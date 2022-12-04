import React from "react";

export const PlanetCard = (props) => {
    return (
        <div className="d-flex container m-5">
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.planetCharacter.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.planetCharacter.name}</h5>
                <p className="card-text">
                    <strong>Population:</strong> {props.planetCharacter.popularion}
                    <br></br>
                    <strong>Climate:</strong> {props.planetCharacter.climate}
                    <br></br>
                    <strong>Terrain:</strong> {props.planetCharacter.terrain}
                </p>
                <Link to={`/singleP/${props.planetCharacter.uid}`}
                    className="btn btn-outline-primary">
                    Learn more!
                </Link>
                <a href="#" className="btn btn-outline-warning amarillo" onClick={(event) => actions.toggleFavorite(props.planetCharacter)}>
                    <i className={actions.isFavorite(props.planetCharacter.name) == undefined
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