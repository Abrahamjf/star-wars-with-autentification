import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(params);

    let individuo = store.characteristics.find((characteristics) => {
        return characteristics.uid == params.id
    })
    console.log(individuo);
    return (
        <>
            <div className="jumbotron container card mb-3 mt-5" key={individuo.uid} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="img-fluid rounded-start mt-4" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title display-4">{individuo.name} </h1>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis sit possimus repudiandae totam, in blanditiis accusantium quidem ratione. Reiciendis, itaque. Necessitatibus veniam a fuga doloremque. Architecto hic vero aliquid.</p>
                                <table className="table">
                                    <tr >
                                        <td><strong>Height</strong></td>
                                        <td><strong>Weight</strong></td>
                                        <td><strong>Birth
                                            Year</strong></td>
                                        <td><strong>Gender</strong></td>
                                        <td><strong>Eye
                                            Color</strong></td>
                                        <td><strong>Skin
                                            Color</strong></td>
                                        <td><strong>Hair
                                            Color</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{individuo.height}</td>
                                        <td>{individuo.mass}</td>
                                        <td>{individuo.birth_year}</td>
                                        <td>{individuo.gender}</td>
                                        <td>{individuo.eye_color}</td>
                                        <td>{individuo.skin_color}</td>
                                        <td>{individuo.hair_color}</td>
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
    )
}