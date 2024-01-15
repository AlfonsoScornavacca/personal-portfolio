import { Container, Row, Col } from "react-bootstrap";
import microsoft from '../assets/img/microsoft.png'
import { useEffect , useState } from "react";
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Cloud Admin", "Security Admin" ];
    const period = 300;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(250);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Wolcome to my portfolio</span>
                        <h1>{`I'm Alfonso Scornavacca `}</h1>
                        <h2>" <span className="wrap">{text}</span> "</h2>
                        <p>I am 34 years old and I started my studies in web development three years ago.
Currently I work at Raona company and I have experience in projects to important international companies.
I am a very curious person and I like to learn new technologies, that is why I got certified in cloud Administration and Security.</p>
                        <a id="gh" href="https://github.com/AlfonsoScornavacca" target={"_BLANK"}><button onClick={() => console.log('connect')} >My GitHub <ArrowRightCircle size={25} /></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={microsoft} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
                </Row>
            </Container>
        </section>
    )
}