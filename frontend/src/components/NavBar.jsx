import React from 'react'
import { Link } from 'react-router-dom'
import logoW from "../Imagenes/logoW.png"


const NavBar = () => {

  return (
    <nav className="navbar navbar-light flex ">
      <div className="container-fluid">
        <Link className="navbar-brand" href="Inicio">Dance World Academy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Dance World Academy</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body bg-">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="Inicio" className='nav-link active'>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="Blog" className='nav-link active'>Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="Grupos" className='nav-link active'>Grupos</Link>
              </li>
             
              
              

            </ul>

            <img src={logoW} alt="logoW" width="150" height="150" aling="center" />
          </div>
        </div>
      </div>
    </nav>

  )
}

export default NavBar