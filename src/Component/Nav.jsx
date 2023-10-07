import React from "react";
import { Link } from "react-router-dom";
import SearchM from "./SearchM";
import CartNav from "./CartNav";

const Nav = () => {
  return (
    <div className="Mainnavbar py-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  Kasturi
                </Link>
                <CartNav forShow="d-lg-none d-block ms-auto me-4"/>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/about"
                      >
                        ABOUT
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/Items"
                      >
                        ORDER ONLINE
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.instagram.com/m_aruf_/"
                      >
                        INSTAGRAM
                      </a>
                    </li>
                    <li className="nav-item navBtn">
                      <a className="nav-link" href="#">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Order Now
                        </button>
                      </a>
                    </li>
                    <li className="nav-item d-lg-block d-none">
                      <a
                        className="nav-link d-flex align-items-center h-100"
                        data-bs-toggle="modal"
                        data-bs-target="#Nav"
                      >
                        <i className="bi bi-search"></i>
                      </a>
                      <SearchM target="Nav" />
                    </li>
                    <CartNav forShow="d-lg-block d-none"/>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
