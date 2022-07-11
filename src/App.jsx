import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Sobremi from "../components/Sobremi";
import Contacto from "../components/Contacto";
import "./App.css";
import "../components/navLayout.css";
import "../components/header.css";
import "../components/portfolio.css";

import { Navbar, Nav, Container } from "react-bootstrap";
import { StickyNav } from "react-js-stickynav";
import { HashLink as Link } from "react-router-hash-link";

import Logo from "/../uploads/logo2.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <StickyNav className="principal" length="1">
            <Navbar collapseOnSelect expand="md">
              <Nav href="#home">
                <img src={Logo} style={{ height: "65px" }} />
              </Nav>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="menu">
                  <Link to="#portfoli">PORTFOLIO</Link>
                  <Link to="#about">SOBRE MI</Link>
                  <Link to="#contact">CONTACTO</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </StickyNav>

          <Header />
          <Portfolio />
          <Sobremi />
          <Contacto />
        </Container>

        {/* <header className="App-header">
        <Header />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route index element={<NavLayout />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
