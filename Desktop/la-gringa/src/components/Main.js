import { Container, Row, Col } from "react-bootstrap";


export const Main = () => {
  return (
    <section className="main" id="home">
      <Container>
        <Row>
          <h1>La Gringa Loca Art</h1>
        </Row>
        <Row>
          <Col xs={12} md={6} xl={6}>
            <div className="main-bunny">
              <a>
                <img
                  src="https://storage.googleapis.com/bucket_la_gringa_loca/laGringaLoca/img/bad-bunny.jpg
          "
                />
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div className="main-p">
              <p>
                Welcome to the land of La Gringa. Explore the many colors and
                textures of art made to feel whimsical. This site is still under
                construction, but come back to soon to experience a colorful
                smash to the face.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
