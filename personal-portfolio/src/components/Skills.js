import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>

                        <Carousel className="skill-slider" infinite={true} responsive={responsive}>
                            <div className="item">
                                <img src={meter1} alt="React"></img>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Express"></img>
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Azure Cloud Administrator"></img>
                                <h5> Azure Administrator</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Power Platform"></img>
                                <h5>Power Platform</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Sharepoint"></img>
                                <h5>Sharepoint</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Sharepoint"></img>
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="CSS"></img>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="HTML"></img>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="JavaScript"></img>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="SQL"></img>
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="HTML"></img>
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="backg" />
        </section>

    )
}