import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import InstructorGuideCards from "./InstructorGuideCards";
import InstructorOffCanvas from "./InstructorOffCanvas";
import { Link } from "react-router-dom";
import BackButton from "../SharedComponents/BackButton";
const InstructorMainPage = () => {
  return (
    <Container fluid style={{ marginTop: "150px" }}>
      <Row>
        <Col md={2} className="">
          <InstructorOffCanvas />
        </Col>
        <Col md={8}>
          <h1>Courses</h1>
          <p>
            Considering our expertise, we believe the following resources might
            prove beneficial.
          </p>

          <p className=" ">
            From what we've learned, these resources seem like they could offer
            some valuable assistance. Considering what we know, exploring these
            resources might be a good idea. Based on our background, we think
            these resources could be helpful for you.
          </p>
          <Container className="">
            <Row className="my-5">
              <Col md={6}>
                <Link to="/instNewCourseForm">
                  <Button variant="success" className="w-50">
                    Add New Course
                  </Button>
                </Link>
              </Col>
            </Row>

            
            <InstructorGuideCards />
            <BackButton />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default InstructorMainPage; 

/*
import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import InstructorGuideCards from "./InstructorGuideCards";
import InstructorOffCanvas from "./InstructorOffCanvas";
import BackButton from "../SharedComponents/BackButton";

const InstructorMainPage = () => {
  return (
    <Container fluid style={{ marginTop: "100px" }}>
      <Row>
        
        <Col md={3} className="d-flex justify-content-center align-items-start">
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              padding: "20px",
              borderRadius: "15px",
              width: "90%",
              textAlign: "center",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <InstructorOffCanvas />
          </div>
        </Col>

  
        <Col md={9} className="px-5">
          <h1 className="fw-bold text-primary">Empower Your Students with Knowledge</h1>
          <p className="text-muted">
            As an instructor, you have the ability to shape minds and inspire future leaders. 
            Below are resources and tools to help you create, manage, and enhance your courses.
          </p>

          <Card className="p-4 my-4 border-0 shadow-sm">
            <Card.Body>
              <h3 className="text-success fw-semibold">Your Teaching Toolkit</h3>
              <p className="text-muted">
                Access valuable resources, create engaging courses, and connect with students worldwide. 
                Let's build an impactful learning experience together.
              </p>
              <Link to="/instNewCourseForm">
                <Button variant="success" size="lg" className="rounded-pill px-4 shadow">
                  ➕ Add a New Course
                </Button>
              </Link>
            </Card.Body>
          </Card>

        
          <InstructorGuideCards />
          <BackButton />
        </Col>
      </Row>
    </Container>
  );
};

export default InstructorMainPage;

*/