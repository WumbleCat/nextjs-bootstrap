import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fs-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/plan">Plans</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/assignments">Assignments</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/documents">Documents</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/links">Links</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
