import { Row, Container, Col } from "react-bootstrap";
import "./Team.scss";
const Team = ({ title, description, teamItems }) => {
  return (
    <div className="team">
      <Container>
        <h1 className="team__title">{title}</h1>
        <p className="team__description"> {description}</p>
        <Row className="team__row-block">
          {teamItems.map((item, key) => (
            <Col md={3} key={key} className="team__img-block">
              <div>
                <img src={item.image} />
              </div>
              <div className="team__img-title">{item.name}</div>
              <div className="team__img-title2">{item.role}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Team;
