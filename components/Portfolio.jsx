import {
  Navbar,
  Nav,
  Container,
  NavLink,
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
    return (
      <>
        <div className=" content flow">
          <img src={foto.url} alt="" onClick={handleShow} />
        </div>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body>
            {" "}
            <img src={foto.url} alt="" />
          </Modal.Body>
        </Modal>
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
