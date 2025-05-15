import "./Service.scss";
import { Row, Container, Col } from "react-bootstrap";
import ItemDetails from "../../components/itemDetails/ItemDetails";

const Service = ({ title, servicesItems, description }) => {
  return (
    <>
      <div className="services">
        <Container>
          <h1 className="services__title">{title}</h1>
          <span className="service__underline"></span>
          <p>{description}</p>
          <Row className="services__grid">
            {servicesItems.map((item, index) => (
              <Col key={index} md={4} className="service__card">
                <ItemDetails
                  title={item.title}
                  text={item.text}
                  iconName={item.icon}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Service;
