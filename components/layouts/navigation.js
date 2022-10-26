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
            <Link href="/" passHref>
              <Nav.Link className=" px-3 fw-semibold   ">
                HOME
              </Nav.Link>
            </Link>

            <Nav.Link className="pt-0 fw-semibold   ">
              <Link href="/partners" passHref>
                <NavDropdown
                  title="PARTNERS"
                  id="navbarScrollingDropdown"
                  className=" fw-semibold   "
                >
                  <Link href="/partners/igurbani" passHref>
                    <NavDropdown.Item className="py-2 px-3 fw-semibold   ">
                      iGurbani
                    </NavDropdown.Item>
                  </Link>

                  <Link href="/partners/sikhitothemax" passHref>
                    <NavDropdown.Item className="py-2 px-3 fw-semibold   ">
                      SikhiToTheMax
                    </NavDropdown.Item>
                  </Link>
                  <Link href="/partners/gurbani-unlimited" passHref>
                    <NavDropdown.Item className="py-2 px-3 fw-semibold   ">
                      Learn Shudh Gurbani
                    </NavDropdown.Item>
                  </Link>
                  <Link href="/partners/share-charity" passHref>
                    <NavDropdown.Item className="py-2 px-3 fw-semibold   ">
                      SHARE Charity
                    </NavDropdown.Item>
                  </Link>
                  <Link href="/partners/khalis-foundation" passHref>
                    <NavDropdown.Item className="py-2 px-3 fw-semibold   ">
                      Khalis Foundation
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Link>
            </Nav.Link>

            <Link href="/about" passHref>
              <Nav.Link className="px-3  fw-semibold   ">
                ABOUT
              </Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link className="px-3  fw-semibold   ">
                CONTACT
              </Nav.Link>
            </Link>
            <Link href="/request-access" passHref>
              <Nav.Link className="px-3  fw-semibold   ">
                BECOME A PARTNER
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
