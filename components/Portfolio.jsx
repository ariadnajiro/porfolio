import {
  Navbar,
  Nav,
  Container,
  Carousel,
  Row,
  Modal,
  Col,
} from "react-bootstrap";
import { useState } from "react";

function Portfolio() {
  const proyectos = [
    { id: 1, url: "https://unsplash.it/500/700" },
    { id: 2, url: "https://unsplash.it/800/400" },
    { id: 3, url: "https://unsplash.it/400/800" },
    { id: 4, url: "https://unsplash.it/800/600" },
    { id: 5, url: "https://unsplash.it/500/400" },
    { id: 6, url: "https://unsplash.it/500/605" },
    { id: 7, url: "https://unsplash.it/400/300" },
    { id: 8, url: "https://unsplash.it/500/600" },
  ];

  let fotografias = proyectos.map((foto) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //carrousel
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <>
        <div className=" content flow">
          <img src={foto.url} alt="" onClick={handleShow} />
        </div>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body>
            {" "}
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img src={foto.url} alt="" />
                <Carousel.Caption>
                  <h3>Títol</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>

        {/* kdaf */}
      </>
    );
  });

  return (
    <>
      <Row id="portfoli">
        <div id="cont_portfolio">
          <div className="apartado">Portfolio</div>
          <div class="grid">{fotografias}</div>
        </div>
      </Row>
    </>
  );
}

export default Portfolio;
