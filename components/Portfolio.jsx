import { Navbar, Nav, Container, NavLink, Row, Col } from "react-bootstrap";

function Portfolio() {
  return (
    <>
      <Row id="portfoli">
        <div id="cont_portfolio">
          <div className="apartado">Portfolio</div>

          <div class="grid">
            <div class="content flow">
              <img src="https://unsplash.it/500/700" alt="" />
            </div>
            <div class="content flow">
              <img src="https://unsplash.it/800/400" alt="" />
            </div>
            <div class="content flow">
              <img src="https://unsplash.it/400/800" alt="" />
            </div>
            <div class="content flow">
              <img src="https://unsplash.it/800/600" alt="" />
            </div>
            <div class="content flow">
              <img src="https://unsplash.it/500/400" alt="" />
            </div>
            <div class="content flow">
              <img src="https://unsplash.it/500/600" alt="" />
            </div>
            <div class="content flow">
              <img src="https://unsplash.it/400/300" alt="" />
            </div>
            <div class="content flow">
              <img src="https://unsplash.it/500/600" alt="" />
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Portfolio;
