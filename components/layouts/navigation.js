import Link from "next/link";
import React from "react";

function navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  bg-light ">
      <div className="container px-4 ">
        <a className="navbar-brand" href="/">
          <img src="./assets/full-banidb-logo.png" width="240" height="50" />
        </a>
        <button
          className="navbar-toggler bg-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item px-2">
              <Link href="/">
                <a className="nav-link active fw-semibold" aria-current="page" >
                  HOME
                </a>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link href="/">
                <a className="nav-link active fw-semibold" aria-current="page" >
                  PARTNERS
                </a>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link href="/about">
                <a className="nav-link active fw-semibold" aria-current="page" >
                  ABOUT
                </a>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link href="/contact">
                <a className="nav-link active fw-semibold" aria-current="page" >
                  CONTACT
                </a>
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link href="/request-access">
                <a className="nav-link active fw-semibold" aria-current="page" >
                  BECOME A PARTNER
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navigation;
