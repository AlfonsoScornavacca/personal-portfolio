import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/certifiedAzure.png";
import projImg2 from "../assets/img/sc-200.png";
import projImg3 from "../assets/img/ms-500.png";
import projImg4 from "../assets/img/certifiedJS.png";
import projImg5 from "../assets/img/react.png";
import projImg6 from "../assets/img/JSCertificate.png";
import projImg7 from "../assets/img/teclab.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Azure Fundamentals",
      description: "Microsoft",
      imgUrl: projImg1,
    },
    {
      title: "Security Operations Analyst Associate",
      description: "Microsoft",
      imgUrl: projImg2,
      ids:"ID: 46BEF32C211A552F"
    },
    {
      title: "Security Administrator Associate",
      description: "Microsoft",
      imgUrl: projImg3,
      ids:"ID: E8865B71D27E80E1"
    },
    {
      title: "JavaScript",
      description: "Microsoft",
      imgUrl: projImg4,
    },

  ];
  const devRock = [
    {
      title: "React",
      description: "DevRock",
      imgUrl: projImg5,
    },
    {
      title: "JavaScript",
      description: "DevRock",
      imgUrl: projImg6,
    },


  ];
  const teclab = [
    {
      title: "Regular Student",
      description: "Teclab",
      imgUrl: projImg7,
    }

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certifications</h2>
                <p>You can see my Microsoft certifications, DevRock school certifications and my certification from Teclab where I am currently study a technical degree</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Microsoft</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">DevRock</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Teclab</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          devRock.map((devRock, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...devRock}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          teclab.map((teclab, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...teclab}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}