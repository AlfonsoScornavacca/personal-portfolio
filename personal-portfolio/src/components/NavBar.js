import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }

    return(
        <Navbar expand="lg" className={ scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
              <img src={logo} alt="LOGO" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#' src={navIcon1} alt='LinkedIn'/>
                    <a href='#' src={navIcon2} alt='Instagram'/>
                    <a href='#' src={navIcon3} alt='Facebook'/>
                </div>
                <button className='vvd' onClick={()=>{console.log("Connect")}}> <span>Let´s connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}