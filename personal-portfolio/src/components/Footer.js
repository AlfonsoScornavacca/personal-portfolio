import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import pdf from "../assets/img/CV-Alfonso-Scornavacca.pdf"
import { ArrowDownCircle } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <a  id='pdf' href={pdf} target="_blank" rel="noopener noreferrer" download="CV-Alfonso-Scornavacca.pdf"><button id="cv" onClick={() => console.log('connect')} >Download my CV <ArrowDownCircle id="arrow" size={25} /></button></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/alfonso-scornavacca" target={"_BLANK"}><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/AlfonDev89/" target={"_BLANK"} ><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/alfondev89"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}