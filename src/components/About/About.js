import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import salad from '../../assets/images/salad.jpg';
import notebook from '../../assets/images/notebook.jpg';

const About = () => {
  return (
    <Container fluid className="about font-weight-light p-3">
      <Row className="my-5 center-text mx-auto">
        <Col sm={12} lg={6} className="my-auto">
          <Container fluid>
            <h1 className="font-weight-light pb-3">About EasyFit</h1>
            <p>
              The EasyFit calculator can be used to calculate the approximate
              number of calories and macronutrients a person needs to consume
              daily to maintain, gain, or lose weight. EasyFit uses a formula and average numbers to calculate one's caloric intake. Assuming that your goal is to maintain your weight and your results were not
              accurate, you may notice that you are either gaining or losing
              weight. You can easily decrease or increase the number of calories
              you are consuming to counteract your weight gain or loss and find
              the exact amount of calories you need to maintain your weight. The
              same concepts can be applied to other goals. Keep in mind that the
              results can be way off the actual numbers. The calculator's job is
              to give you a good and reliable starting point. From there you
              should play with your results to find the actual numbers of
              calories you need.
            </p>
          </Container>
        </Col>
        <Col sm={12} lg={6} className="order-2 order-lg-1 my-auto">
          <img src={salad} alt="Salad"
            className="img-thumbnail img-fluid "
          />
        </Col>
      </Row>

      <Row className="my-5 center-text mx-auto pb-3">
        <Col sm={12} lg={6} className="my-auto">
          <img src={notebook}
            alt="notebook"
            className="img-thumbnail img-fluid"
          />
        </Col>
        <Col sm={12} lg={6} className="my-auto">
          <Container fluid>
            <h1 className="font-weight-light pb-3">Tracking your calories</h1>
            <p>
              Keeping track of your calories can also be helpful in reaching
              your goal. With time, as you train, you will notice that your
              progress is slowing down. There a lot of factors and reasons for
              why that happens, however, one can be related to the number of
              calories you are consuming. Depending on your goal, you should
              decrease or increase the number of calories you are consuming. If
              your goal is to gain weight, then as you gain weight you must also
              increase the number of your calories with progress. Similarly, the
              same concept can be applied for losing weigh. As you lose weight
              you should decrease the number of calories you consume. Please
              keep in mind that you should not increase or decrease it
              significantly. Doing so can cause unwanted side effects. You
              should either increase or decrease it just enough for you to get
              back on track.
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default About;