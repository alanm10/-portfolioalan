import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import utn from "../assets/img/utn.jpg";
import depc from "../assets/img/depc.png";
import coderhouse from "../assets/img/coderhouse.jpg";
import udemy from "../assets/img/udemy.png";
import ceicos from "../assets/img/ceicos.jpg";
import crehana from "../assets/img/crehana.png";
import español from "../assets/img/español.jpg";
import ingles from "../assets/img/ingles.jpg";
import portugues from "../assets/img/portugues.png";
import unc from "../assets/img/unc.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "National Technological University",
      description: "FullStack with C#",
      imgUrl: utn,
    },
    {
      title: "DePC",
      description: "FullStack with Php and React",
      imgUrl: depc,
    },
    {
      title: "CoderHouse",
      description: "React",
      imgUrl: coderhouse,
    },
    {
      title: "CEICOS",
      description: "Advertising and Marketing",
      imgUrl: ceicos,
    },
    {
      title: "Udemy",
      description: "Python and Flask",
      imgUrl: udemy,
    },
    {
      title: "Crehana",
      description: "Graphic Desing",
      imgUrl: crehana,
    },
    ];

    const idioms =[
      {
        title: "Spanish",
        description: "Native",
        imgUrl: español,
      },
      {
        title: "English",
        description: "C1",
        imgUrl: ingles,
      },
      {
        title: "Portuguese",
        description: "B1",
        imgUrl: portugues,
      },

    ];
    const others =[
      {
        title: "National University of Cordoba",
        description: "Graduate in Bio Image Production",
        imgUrl: unc,
      },
    ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Studies</h2>
                  <p>Establishments where I learned some of my professional skills</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Programming</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Idioms</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Others</Nav.Link>
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
                            idioms.map((idioms, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...idioms}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            others.map((others, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...others}
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
