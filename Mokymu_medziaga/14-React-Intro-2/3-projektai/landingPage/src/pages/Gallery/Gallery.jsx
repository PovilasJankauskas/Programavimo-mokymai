import "./Gallery.scss";
import { Row, Container, Col } from "react-bootstrap";

const Gallery = ({ images, title, description }) => {
  return (
    <>
      <div className="gallery">
        <Container>
          <h1 className="gallery__title">{title}</h1>
          <span className="gallery__underline"></span>
          <p>{description}</p>
          <Row className="gallery__img">
            {images.map((item) => (
              <Col key={item.id} md={4} className="gallery__img-block">
                <img src={item.url} />
                <div className="gallery__img-title">{item.title}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Gallery;
