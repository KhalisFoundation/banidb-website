import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar fixed="top" bg="light" expand="lg" collapseOnSelect>
      <Container fluid className="px-0 nav-div">
        <Navbar.Brand>
          <Link href="/">
            <a className="navbar-brand">
              <Image
                src="/assets/full-banidb-logo.png"
                width="200"
                height="50"
                alt="Icon BANIDB"
              />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 px-0 text-center">
            <Nav.Link href="/" className=" px-3 fw-semibold text-dark  ">
              HOME
            </Nav.Link>
            <NavDropdown
              title="PARTNERS"
              id="navbarScrollingDropdown"
              className=" fw-semibold text-dark  "
            >
              <NavDropdown.Item className="py-2 px-3 fw-semibold text-dark  ">
                iGurbani
              </NavDropdown.Item>
              <NavDropdown.Item className="py-2 px-3 fw-semibold text-dark  ">
                SikhiToTheMax
              </NavDropdown.Item>
              <NavDropdown.Item className="py-2 px-3 fw-semibold text-dark  ">
                Learn Shudh Gurbani
              </NavDropdown.Item>
              <NavDropdown.Item className="py-2 px-3 fw-semibold text-dark  ">
                SHARE Charity
              </NavDropdown.Item>
              <NavDropdown.Item className="py-2 px-3 fw-semibold text-dark  ">
                Khalis Foundation
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about" className="px-3  fw-semibold text-dark  ">
              ABOUT
            </Nav.Link>

            <Nav.Link href="/contact" className="px-3  fw-semibold text-dark  ">
              CONTACT
            </Nav.Link>
            <Nav.Link
              href="/request-access"
              className="px-3  fw-semibold text-dark  "
            >
              BECOME A PARTNER
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// function navigation() {
//   return (
//     <nav className="navbar navbar-expand-lg fixed-top  navbar-light  bg-light ">
//       <div className="container px-0 nav-div ">
//         <Link href="/">
//           <a className="navbar-brand">
//             <Image
//               src="/assets/full-banidb-logo.png"
//               width="200"
//               height="50"
//               alt="Icon BANIDB"
//             />
//           </a>
//         </Link>

//         <button
//           className="navbar-toggler  bg-primary"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarCollapse"
//           aria-controls="navbarCollapse"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon "></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarCollapse">
//           <ul className="navbar-nav ms-auto mb-2 mb-md-0">
//             <li className="nav-item px-2">

//             </li>
//             {/* <li className="nav-item px-2">
//               <Link href="/">
//                 <a className="nav-link active fw-semibold" aria-current="page">
//                   PARTNERS
//                 </a>
//               </Link>
//             </li> */}
//             <li class="nav-item dropdown px-2">
//               <a
//                 className="nav-link active rounded fw-semibold dropdown-toggle"
//                 href="#"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 PARTNERS
//               </a>
//               <ul class="dropdown-menu py-0">
//                 <li>
//                   <Link href="/">
//                     <a
//                       data-bs-toggle="collapse"
//                       data-bs-target="#navbarCollapse"
//                       aria-controls="navbarCollapse"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                       aria-current="page"
//                       className="dropdown-item nav-link active fw-semibold"
//                     >
//                       Action
//                     </a>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/">
//                     <a
//                       data-bs-toggle="collapse"
//                       data-bs-target="#navbarCollapse"
//                       aria-controls="navbarCollapse"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                       aria-current="page"
//                       className="dropdown-item nav-link active fw-semibold"
//                     >
//                       Action
//                     </a>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/">
//                     <a
//                       data-bs-toggle="collapse"
//                       data-bs-target="#navbarCollapse"
//                       aria-controls="navbarCollapse"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                       aria-current="page"
//                       className="dropdown-item nav-link active fw-semibold"
//                     >
//                       Action
//                     </a>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/">
//                     <a
//                       data-bs-toggle="collapse"
//                       data-bs-target="#navbarCollapse"
//                       aria-controls="navbarCollapse"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                       aria-current="page"
//                       className="dropdown-item nav-link active fw-semibold"
//                     >
//                       Action
//                     </a>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/">
//                     <a
//                       data-bs-toggle="collapse"
//                       data-bs-target="#navbarCollapse"
//                       aria-controls="navbarCollapse"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                       aria-current="page"
//                       className="dropdown-item nav-link active fw-semibold"
//                     >
//                       Action
//                     </a>
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item px-2">

//             </li>
//             <li className="nav-item px-2">

//             </li>
//             <li className="nav-item px-2">

//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default navigation;
