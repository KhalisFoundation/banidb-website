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
              <Nav.Link
                className=" px-3 
                 "
              >
                <strong>HOME</strong>
              </Nav.Link>
            </Link>

            <Nav.Link
              className="pt-0 
               "
            >
              <Link href="/partners" passHref>
                <NavDropdown
                  title="PARTNERS"
                  id="navbarScrollingDropdown"
                  className="                     "
                >
                  <Link href="/partners/igurbani" passHref>
                    <NavDropdown.Item
                      className="
                       "
                    >
                      <strong>iGurbani</strong>
                    </NavDropdown.Item>
                  </Link>

                  <Link href="/partners/sikhitothemax" passHref>
                    <NavDropdown.Item
                      className="
                       "
                    >
                      <strong>SikhiToTheMax</strong>
                    </NavDropdown.Item>
                  </Link>
                  <Link href="/partners/gurbani-unlimited" passHref>
                    <NavDropdown.Item
                      className="
                       "
                    >
                      <strong>Learn Shudh Gurbani</strong>
                    </NavDropdown.Item>
                  </Link>
                  <Link href="/partners/share-charity" passHref>
                    <NavDropdown.Item
                      className="
                       "
                    >
                      <strong>SHARE Charity</strong>
                    </NavDropdown.Item>
                  </Link>
                  <Link href="/partners/khalis-foundation" passHref>
                    <NavDropdown.Item
                      className="
                       "
                    >
                      <strong>Khalis Foundation</strong>
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Link>
            </Nav.Link>

            <Link href="/about" passHref>
              <Nav.Link
                className="px-3  
                 "
              >
                <strong>ABOUT</strong>
              </Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link
                className="px-3  
                 "
              >
                <strong>CONTACT</strong>
              </Nav.Link>
            </Link>
            <Link href="/request-access" passHref>
              <Nav.Link
                className="px-3  
                 "
              >
                <strong> BECOME A PARTNER</strong>
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
