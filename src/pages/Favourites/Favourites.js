import React from "react";
import { useSelector } from "react-redux";
import Moviecard from "../../components/movieCard";

const Favourites = ({ history }) => {
  const logout = () => {
    history.push("/register");
    localStorage.removeItem("auth");
  };

  const { favourites } = useSelector((state) => state.favourites);
  console.log(favourites);
  return (
    <div className="col-10 mx-auto mt-3">
      <div className="d-flex flex-wrap">
        {favourites.length!==0
          ? favourites.map((i) => <Moviecard movie={i} key={i.id} deleteIcon/>)
          : <div className="mx-auto fw-bolder"> no favourite movies</div>
        }
      </div>
    </div>
  );
};

export default Favourites;