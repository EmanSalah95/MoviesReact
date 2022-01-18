import React, { useState, useEffect } from "react";
import Moviecard from "../../components/movieCard";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import changeMovies from './../../store/actions/movies';

const Home = () => {
  // const [movies, setMovies] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const { loader } = useSelector((state) => state.loader);
  const { movies } = useSelector((state) => state.movies);
  const dispatch =useDispatch();

  // const getMovies = (page = 1) => {
  //   axiosInstance
  //     .get(`movie/popular?&page=${page}`)
  //     .then((res) => setMovies(res.data.results))
  //     .catch((err) => console.log(err));
  // };

  const nextPage = () => {
    let pageValue = pageCount;
    setPageCount(++pageValue);
    dispatch(changeMovies(pageValue));
    // getMovies(pageValue);
  };

  const prevPage = () => {
    let pageValue = pageCount;
    (pageValue > 1) && --pageValue;
    setPageCount(pageValue);
    dispatch(changeMovies(pageValue));
    // getMovies(pageValue);
  };

  useEffect(() => {
    // getMovies();
    dispatch(changeMovies(pageCount));
  }, []);
  return (
    <div className="col-10 mx-auto mt-3">
      <h2>Home</h2>
      {loader&&  <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>}
      <div className="d-flex flex-wrap">
        {movies&&movies.map((i) => <Moviecard movie={i} key={i.id} />) }
      </div>

      <div className="d-flex justify-content-between">
        <button
          type="button"
          className={`btn btn-secondary ${pageCount < 2 && "opacity-0"} `}
          onClick={() => {
            prevPage();
          }}
        >
          previous
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            nextPage();
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Home;