import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import { Link } from "react-router-dom";

import guyImg from '../asserts/hero.png';
// import "../styles/hero-section.css";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Food
                </h1>

                <button className="order__btn d-flex align-items-center justify-content-between " style={{backgroundColor:'orange', borderRadius: '8px' }}>
                  <Link to="/foodlisting" style={{ textDecoration: 'none'}}>
                    Menu <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
