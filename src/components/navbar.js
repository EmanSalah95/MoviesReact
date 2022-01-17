import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector } from 'react-redux';
import { langCont } from './../context/langContext';

const Navbar = () => {
  const { favourites } = useSelector((state) => state.favourites);
  const { lang, setLang } = useContext(langCont);

  const toggleLang=()=>{
    setLang(lang==='en'?'ar':'en')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies World
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item  ">
              <Link className="nav-link position-relative" to="/favourite">
                Favourites<span className={`counter`}> {favourites.length}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-link " to="/register" onClick={toggleLang}>
                {lang}
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
