import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = (props) => {
  const { store, actions } = useContext(Context);
  const { character } = props;
  console.log(character);
  return (
    <div className="d-flex container m-5">
      <div className="card" style={{ minWidth: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{character?.properties?.name}</h5>
          <p className="card-text">
            <strong>Gender:</strong> {character?.properties?.gender}
            <br></br>
            <strong>Hair Color:</strong> {character?.properties?.hair_color}
            <br></br>
            <strong>Eye Color:</strong> {character?.properties?.skin_color}
          </p>
          <Link
            to={`/Character/${props.character?.uid}`}
            className="btn btn-outline-primary"
          >
            Learn more!
          </Link>
          <a
            href="#"
            className="btn btn-outline-warning amarillo"
            onClick={(event) => actions.toggleFavorite(props.character)}
          >
            <i
              className={
                actions.isFavorite(props.character?.name) == undefined
                  ? "far fa-heart"
                  : "fas fa-heart"
              }
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};
