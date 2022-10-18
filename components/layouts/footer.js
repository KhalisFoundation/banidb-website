import React from "react";

function footer() {
  return (
    <div className="container px-4 pt-3">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          {/* <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span> */}
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Terms of Service
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Privacy Policy
              </a>
            </li>{" "}
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Non-Profit Open Software License 3.0 (NPOSL-3.0)
              </a>
            </li>{" "}
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Contact
              </a>
            </li>{" "}
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <p>
            © 2019 Khalis Foundation, a registered California non-profit
            organization
          </p>
        </ul>
      </footer>
    </div>
    // <div className="container">
    //   <footer className="p-5">
    //     <div className="row">
    //       <div className="col-6 ">
    //         <h5>Section</h5>
    //         <ul className="nav flex-column">
    //           <li className="nav-item mb-2">
    //             <a href="#" className="nav-link p-0 text-muted">
    //               Home
    //             </a>
    //           </li>
    //
    //           <li className="nav-item mb-2">
    //             <a href="#" className="nav-link p-0 text-muted">
    //               About
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="col-6 ">
    //         <div className="">
    //           <p>
    //             © 2019 Khalis Foundation, a registered California non-profit
    //             organization
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}

export default footer;
