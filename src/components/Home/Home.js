import React from "react";
import bgImage from "./../../assets/images/sectionBg.png";
import Bg from "./../../assets/images/bg.jpg";
import { Container, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import useCourses from "../../hooks/useCourses";
import Course from "../Course/Course";


const Home = () => {
  const history = useHistory();
  const [courses] = useCourses();
  const featureCourses = courses.slice(0, 6);
  function GoServices() {
    history.push("/courses");
  }

  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-secondary">Go Doctor</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-secondary fs-5">
               We are to help you-24/7
                </p>
              </Bounce>

              <Bounce>
                <Button
                  onClick={GoServices}
                  className="rounded-pill fs-5 py-2 px-4"
                  variant="secondary"
                >
                  Go
                </Button>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
      >
        <Container className="py-5">
          <Slide left>
            <h2 className="text-center text-white mb-2"> Doctors Community  </h2>
          </Slide>
          <Slide right>
            <p className="text-muted text-center">
              Here you can find our beloved Doctors 
            </p>
          </Slide>
          <Row>
            {featureCourses?.map((course) => (
              <Course course={course} key={course.key}></Course>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
