import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h5">Git Users</span>
        <form className="d-flex">
          <input
            className="form-control me-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-md btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
