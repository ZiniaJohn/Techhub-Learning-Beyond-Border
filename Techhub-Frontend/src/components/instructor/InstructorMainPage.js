import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import InstructorGuideCards from "./InstructorGuideCards";
import InstructorOffCanvas from "./InstructorOffCanvas";
import { Link } from "react-router-dom";
import BackButton from "../SharedComponents/BackButton";

const InstructorMainPage = () => {
  return (
    <Container fluid style={{ marginTop: "150px" }}>
      <style>
        {`
          .custom-button {
            color: #007bff !important;
            border-color: #007bff !important;
            transition: all 0.3s ease-in-out;
          }
          .custom-button:hover {
            background-color: #007bff !important;
            color: white !important;
          }
        `}
      </style>
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
                  <Button
                    variant="outline-success" className="w-50 custom-button">
                    Add New Course
                  </Button>
                  
                </Link>
              </Col>
            </Row>
            {/* cards */}
            <InstructorGuideCards />
            <BackButton />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default InstructorMainPage;