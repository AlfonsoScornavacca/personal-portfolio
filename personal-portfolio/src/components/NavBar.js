import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

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
        <Navbar expand="lg" className={ crolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
              <img src={""} alt="LOGO" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === "home" ? "active navBar-link" : "navBar-link"}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === "skills" ? "active navBar-link" : "navBar-link"}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === "projects" ? "active navBar-link" : "navBar-link"}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#' src={''} alt='LinkedIn'/>
                    <a href='#' src={''} alt='Instagram'/>
                    <a href='#' src={''} alt='Facebook'/>
                </div>
                <button className='vvd' onClick={()=>{console.log("Connect")}}> <span>Let´s connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}