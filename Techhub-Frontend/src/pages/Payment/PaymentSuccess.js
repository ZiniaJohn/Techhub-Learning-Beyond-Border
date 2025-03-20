import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <Container className="p-5">
        <h1 className="text-center">
          Congratulations! Payment Successfull. You are enrolled in the course.
          Please check your Enrolled Courses. 🎉🎉🎉
        </h1>
        <Link to={"/user-enrolledCourses"}>
          <div className="text-center">
            <Button style={{ backgroundColor: "#A45EE9", color: "white", borderRadius: "8px" }} className="mt-2" type="submit">View Course</Button>
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default PaymentSuccess;
