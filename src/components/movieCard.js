import React, { useState, useEffect } from "react";
import { images } from "../config/axiosConfig";
import "../App.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, removefav } from "./../store/actions/favourites";

const Moviecard = ({ movie, deleteIcon }) => {
  const { id, poster_path, title, overview } = movie;
  const history = useHistory();
  
  const { favourites } = useSelector((state) => state.favourites);

  let found = favourites?.find((i) => i.id === movie.id);
  const [selected, setSelected] = useState(found ? true : false);

  const dispatch = useDispatch();

  const goToMovie = () => {
    history.push(`/movie-details/${id}`);
  };

  const toggleFav = (event) => {
    event.stopPropagation();
    dispatch(selected? removefav(movie):addToFavourites(movie));
    setSelected(!selected);
  };

  return (
    <div className="col-3 position-relative " onClick={goToMovie}>
      <div className="card text-start m-1 movie-card">
        <img className="card-img-top" src={images + poster_path} alt="" />
        <i
          className={`fa fa-2x position-absolute m-3 text-ligth
          ${ selected && "text-warning"}
          ${deleteIcon ?  "fa-trash text-danger":"fa-star"}
          `}
          onClick={(event) => toggleFav(event)}
        ></i>
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          {/* <p className="card-text fixedLines">{overview}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
