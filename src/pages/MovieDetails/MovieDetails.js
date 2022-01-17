import React from "react";
import axiosInstance, { apikey ,images} from "./../../config/axiosConfig";
import { useState, useEffect } from "react";

const Moviedetails = ({ match }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`movie/${match.params.id}?api_key=${apikey}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="col-8 mx-auto">
      {movie ? (
        <div className="col-12" >
          <div className="card text-start m-1">
            <img className="card-img-top " src={images+ movie.poster_path} alt="" />
            <div className="card-body">
              <h4 className="card-title">{movie.title}</h4>
              <p className="card-text fixedLines">{movie.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Moviedetails;
