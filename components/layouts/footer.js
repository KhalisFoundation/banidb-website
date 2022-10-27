import Link from "next/link";
import React from "react";

function footer() {
  return (
    <div className="bg-dark ">
      <div className="container px-4 pt-3 ">
        <footer
          className="d-flex flex-wrap justify-content-between
       align-items-center py-3 "
        >
          <div className="col-md-4 d-flex align-items-center">
            {/* <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span> */}
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link href="/term-and-condition">
                  <a
                    className="p-0 text-muted "
                    style={{ textDecoration: "none" }}
                  >
                    Terms of Service
                  </a>
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/privacy-policy">
                  <a
                    className="p-0 text-muted "
                    style={{ textDecoration: "none" }}
                  >
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/nposl">
                  <a
                    className="p-0 text-muted "
                    style={{ textDecoration: "none" }}
                  >
                    Non-Profit Open Software License 3.0 (NPOSL-3.0)
                  </a>
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/contact">
                  <a
                    className="p-0 text-muted "
                    style={{ textDecoration: "none" }}
                  >
                    Contact
                  </a>
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link href="/about">
                  <a
                    className="p-0 text-muted "
                    style={{ textDecoration: "none" }}
                  >
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <ul className="nav col-md-4 justify-content-end  text-muted">
            <p>
              © 2019 Khalis Foundation, a registered California non-profit
              organization
            </p>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default footer;
