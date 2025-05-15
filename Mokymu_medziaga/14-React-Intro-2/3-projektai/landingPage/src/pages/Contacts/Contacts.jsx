import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contacts.scss";
import data from "../../data/data.json";
import * as icons from "react-icons/ci";

const Contacts = () => {
  const { title, subtitle, contactInfo, contactInfoItems } = data.contacts;
  return (
    <section className="contacts">
      <Container>
        <Row>
          <Col lg={8} className="contact-form">
            <h2>{title}</h2>
            <span className="section-underline"></span>
            <p>{subtitle}</p>
            <form>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mb-4">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Wingardium Leviosa
              </button>
            </form>
          </Col>
          <Col lg={4} className="contact-info">
            <h3>{contactInfo}</h3>
            <div className="info-items">
              {contactInfoItems.map((item, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{icons[item.icon]()}</div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-line"></div>
    </section>
  );
};
export default Contacts;
