import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className='nav-link' to={"/"}> <button className="navbar-brand" href="#">ARTE EN CHOCOLATES</button></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className='nav-link' to={"/category/1"}> <button className="nav-link active" aria-current="page" href="#">HUEVOS</button> </Link>
            <Link className='nav-link' to={"/category/2"}> <button className="nav-link" href="#">CHUPETINES</button> </Link>
            <Link className='nav-link' to={"/category/3"}> <button className="nav-link" href="#">CHOCOMENSAJE</button> </Link>
          </div>
        </div>
      </div>/
      <CartWidget />
    </nav>
  );
}

export default NavBar;