import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [details, setDetails] = useState("");

  // let character = store.characteristics.find((characteristics) => {
  //     return characteristics.uid == params.id
  // })
  // console.log(character);
  const getDetails = () => {
    const character = store.people.find((person) => person._id == params.id);
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
              src={`https://starwars-visualguide.com/assets/img/characters/${details?.uid}.jpg`}
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
                    <strong>Height</strong>
                  </td>
                  <td>
                    <strong>Weight</strong>
                  </td>
                  <td>
                    <strong>Birth Year</strong>
                  </td>
                  <td>
                    <strong>Gender</strong>
                  </td>
                  <td>
                    <strong>Eye Color</strong>
                  </td>
                  <td>
                    <strong>Skin Color</strong>
                  </td>
                  <td>
                    <strong>Hair Color</strong>
                  </td>
                </tr>
                <tr>
                  <td>{details?.properties?.height}</td>
                  <td>{details?.properties?.mass}</td>
                  <td>{details?.properties?.birth_year}</td>
                  <td>{details?.properties?.gender}</td>
                  <td>{details?.properties?.eye_color}</td>
                  <td>{details?.properties?.skin_color}</td>
                  <td>{details?.properties?.hair_color}</td>
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
