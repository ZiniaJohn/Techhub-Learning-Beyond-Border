/* import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import aboutUsImage from "../../Images/laptop1.png"; // Replace with your actual image file path

const AboutUs = () => {
 return (
    <Container style={{ marginTop: "150px" }}>
      <Row>
        <Col>
          <h2 className="text-center mb-4">About TechHub</h2>
          <p>
            Welcome to TechHub, your go-to platform for online learning! At
            TechHub, we are passionate about providing high-quality and
            accessible online courses that empower individuals to enhance their
            skills and achieve their learning goals.
          </p>

          <p>
            Our journey started with a simple idea: to create a platform that
            brings together learners and educators from around the world.
            Whether you are looking to expand your knowledge in programming,
            design, business, or any other field, TechHub is the place for you.
          </p>

          <p>
            What sets TechHub apart is our commitment to fostering a vibrant
            learning community. We believe in the transformative power of
            education and the positive impact it can have on people's lives. Our
            platform is designed to facilitate engaging and interactive learning
            experiences, allowing students to connect with expert instructors
            and fellow learners.
          </p>

          <Row className="my-4">
            <Col md={6}>
              <Image src={aboutUsImage} alt="About Us" fluid rounded />
            </Col>
            <Col md={6}>
              <p>
                Discover a diverse spectrum of courses at TechHub, catering to
                everyone from beginners seeking foundational knowledge to
                advanced learners pursuing mastery. Our platform is fueled by
                collaboration with seasoned instructors, each driven by a
                passion for imparting their wealth of knowledge and expertise.
                At TechHub, we transcend the conventional notion of being a mere
                course provider. We've cultivated an immersive community where
                learners and educators synergize, creating an environment that
                goes beyond the ordinary. Together, we strive to redefine the
                learning experience, making it not just informative but also
                profoundly enriching and enjoyable. In this vibrant community,
                education is not confined to the exchange of information; it's a
                dynamic interaction that fosters collaboration, discussion, and
                growth. We believe that the collective journey of learners and
                educators is what truly elevates the learning process. By
                working together, we transform education into a shared
                adventure, where each participant contributes to the tapestry of
                knowledge. As you navigate the TechHub platform, you'll witness
                our commitment to fostering an inclusive and engaging
                atmosphere.
              </p>
            </Col>
          </Row>

          <p>
            As you explore TechHub, you'll discover a user-friendly interface,
            responsive design, and a commitment to excellence in education. Join
            us on this educational journey, and let's learn, grow, and succeed
            together.
          </p>

          <p>
            Thank you for choosing TechHub. We look forward to being part of
            your learning adventures!
          </p>
        </Col>
      </Row>
    </Container>
  ); 

  return (
    <StyledWrapper>
      <div className="background" />
      <Container className="mt-5 pt-4 mb-0 pb-0 position-relative">

        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold text-primary">About TechHub</h2>
            <p className="text-muted fs-5">
              Empowering learners through high-quality, accessible education.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center text-md-start">
            <h4 className="fw-semibold text-dark">Our Mission</h4>
            <p className="text-secondary">
              TechHub is dedicated to making learning engaging and accessible
              for everyone. Our goal is to connect learners with expert
              instructors worldwide.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src={aboutUsImage}
              alt="Learning"
              fluid
              className="rounded shadow-sm"
            />
          </Col>
        </Row>

        <Row className="align-items-center flex-column-reverse flex-md-row mb-5">
          <Col md={6} className="text-center">
            <Image
              src={aboutUsImage}
              alt="Community"
              fluid
              className="rounded shadow-sm"
            />
          </Col>
          <Col md={6} className="text-center text-md-start">
            <h4 className="fw-semibold text-dark">Why Choose TechHub?</h4>
            <ul className="list-unstyled text-secondary">
              <li>✔ Expert-led courses across various fields</li>
              <li>✔ Interactive and community-driven learning</li>
              <li>✔ Flexible, self-paced learning experience</li>
              <li>✔ Modern and easy-to-use platform</li>
            </ul>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <h4 className="fw-semibold text-dark">Join Us Today!</h4>
            <p className="text-secondary">
              Become part of a thriving learning community and take your skills
              to the next level.
            </p>
          </Col>
        </Row>
      </Container>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;


  .background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
    z-index: -10;
  }

  .container {
    padding-bottom: 0 !important;
    margin-bottom: 0 !important;
  }
`;


export default AboutUs;  */

import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import aboutUsImage from "../../Images/laptop1.png";
import { NavLink } from "react-router-dom";
import greenDoodle from "../../Images/green-doodle.svg";

const AboutUs = () => {
  /* return (
     <StyledWrapper>
       <div className="background" />
       <Container className="mt-5 pt-4 mb-0 pb-0 position-relative">
         
         <Row className="text-center mb-4">
           <Col>
             <h2 className="fw-bold main-title">About TechHub</h2>
             <p className="sub-text">
               Empowering learners through high-quality, accessible education.
             </p>
           </Col>
         </Row>
 
         <Row className="align-items-center mb-5">
           <Col md={6} className="text-center text-md-start">
             <h4 className="fw-semibold section-title">Our Mission</h4>
             <p className="text-secondary">
               TechHub is dedicated to making learning engaging and accessible
               for everyone. Our goal is to connect learners with expert
               instructors worldwide.
             </p>
           </Col>
           <Col md={6} className="text-center">
             <StyledImage 
               src={aboutUsImage} 
               alt="Learning" 
               fluid
             />
           </Col>
           
         </Row>
         
       
 
         <Row className="text-left">
           <Col>
             <h4 className="fw-semibold section-title">Why Choose TechHub?</h4>
             <ul className="list-unstyled text-secondary">
               <li>✔ Expert-led courses across various fields</li>
               <li>✔ Interactive and community-driven learning</li>
               <li>✔ Flexible, self-paced learning experience</li>
               <li>✔ Modern and easy-to-use platform</li>
             </ul>
           </Col>
           
         </Row>
 
         <Row className="text-center mt-5">
           <Col>
             <h4 className="fw-semibold section-title">Join Us Today!</h4>
             <p className="sub-text">
               Become part of a thriving learning community and take your skills
               to the next level.
             </p>
           </Col>
         </Row>
 
       </Container>
     </StyledWrapper>
   ); */
  return (
    <StyledWrapper>
      <Container className="position-relative">
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center">
            <p className="paragraph">
              About TechHub
            </p>
            <h1 className="main-title">
              Empowering students through expert-led{" "}
              <span
                className="green-doodle"
                style={{ backgroundImage: `url(${greenDoodle})` }}
              >
                learning.
              </span>
            </h1>
            <p className="description">
              TechHub is your gateway to world-class education, connecting learners with industry experts
              through an engaging and interactive platform.
            </p>
            <NavLink to="/Register">
              <button className="cta">
                <span>Get Started for Free</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </NavLink>
          </Col>
          <Col md={6} className="text-center position-relative custom-col-padding">
            <StyledImage src={aboutUsImage} alt="Learning" />
            <div className="background-shape" />
          </Col>
        </Row>
      </Container>
    </StyledWrapper>
  );
};

// Styled Components
/*const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;

  .background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

  .main-title {
    font-size: 2.5rem;
    color: #313131;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .section-title {
    font-size: 1.8rem;
    color: #333;
  }

  .sub-text {
    font-size: 1.2rem;
    color: #666;
  }
`;

const StyledImage = styled(Image)`
  max-width: 80%;
  border-radius: 12px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px;
  position: relative;
  top: 20px;
  
  &:hover {
    transform: scale(1.05) rotate(-2deg);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
  }
`; */

//finalll

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, #f8f9fc, #ffffff);
  padding: 60px 0;

  .main-title {
    font-size: 2rem;
    font-weight: 800;
    color: #2b2d42;
    margin-bottom: 20px;
  }
  
  .paragraph {
  color: #6c757d;
  padding-top: 40px;
  }

  .highlight {
    color: #4a90e2;
  }

  .description {
    font-size: 1.2rem;
    color: #6c757d;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .cta {
  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: #b1dae7;
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
}

.cta span {
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #234567;
}

.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #234567;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: #b1dae7;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active {
  transform: scale(0.95);
}


  .background-shape {
    position: absolute;
    width: 250px;
    height: 250px;
    background: #4a90e2;
    border-radius: 50%;
    opacity: 0.2;
    top: -10px;
    right: -40px;
    
  }

  .custom-col-padding {
    padding-top: 70px; /* Adjust the value as needed */
  }

  .green-doodle {
    background-image: url("/Images/green-doodle.svg");
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 170px;
}
`;

const StyledImage = styled.img`
  max-width: 90%;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;


export default AboutUs;

/*
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import image1 from "../../Images/pic1.jpg";
import image2 from "../../Images/pic2.jpg";
import image3 from "../../Images/pic3.jpg";

const AboutUs = () => {   
  return (
    <StyledWrapper>
      <div className="background" />
      <Container className="mt-5 pt-4 mb-0 pb-0 position-relative">
        
      
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold main-title">About TechHub</h2>
            <p className="sub-text">
              Empowering learners through high-quality, accessible education.
            </p>
          </Col>
        </Row>

        
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center text-md-start">
            <h4 className="fw-semibold section-title">Our Mission</h4>
            <p className="text-secondary">
              TechHub is dedicated to making learning engaging and accessible
              for everyone. Our goal is to connect learners with expert
              instructors worldwide.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <ImageCollage>
              <StyledImage src={image1} alt="Learning" />
              <StyledImage src={image2} alt="Collaboration" />
              <StyledImage src={image3} alt="Success" />
            </ImageCollage>
          </Col>
        </Row>

        
        <Row className="text-center">
          <Col>
            <h4 className="fw-semibold section-title">Why Choose TechHub?</h4>
            <ul className="list-unstyled text-secondary">
              <li>✔ Expert-led courses across various fields</li>
              <li>✔ Interactive and community-driven learning</li>
              <li>✔ Flexible, self-paced learning experience</li>
              <li>✔ Modern and easy-to-use platform</li>
            </ul>
          </Col>
        </Row>

      
        <Row className="text-center mt-4">
          <Col>
            <h4 className="fw-semibold section-title">Join Us Today!</h4>
            <p className="sub-text">
              Become part of a thriving learning community and take your skills
              to the next level.
            </p>
          </Col>
        </Row>

      </Container>
    </StyledWrapper>
  );
};

// Styled Components
const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;

  .background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
    z-index: -10;
  }
  .main-title {
    font-size: 2.5rem;
    color: #313131;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .section-title {
    font-size: 1.8rem;
    color: #333;
  }

  .sub-text {
    font-size: 1.2rem;
    color: #666;
  }
`;

const ImageCollage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05) rotate(-2deg);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

export default AboutUs; */
