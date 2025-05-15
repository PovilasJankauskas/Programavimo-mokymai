import { HiCheck } from "react-icons/hi";
import "./AboutUs.scss";
import img from "../../assets/about.jpg";
import { Row, Container, Col } from "react-bootstrap";

const AboutUs = ({
  title,
  description,
  whyChooseUsTitle,
  whyChooseUsItems,
}) => {
  return (
    <Container className="about">
      <Row>
        <Col>
          <img src={img} />
        </Col>
        <Col>
          <h2 className="about__title"> {title}</h2>
          <p>{description}</p>
          <h4> {whyChooseUsTitle}</h4>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {whyChooseUsItems.map((item, index) => (
              <Col sm={6} key={index}>
                <HiCheck /> {item}
              </Col>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutUs;
