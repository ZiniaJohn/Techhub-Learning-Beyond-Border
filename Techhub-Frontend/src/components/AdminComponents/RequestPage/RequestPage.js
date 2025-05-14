import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTeachersByStatus,
  updateTeacherStatus,
  reset,
} from "../../../redux/reducers/admin/adminSlice";
import toast from "react-hot-toast";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Spinner,
  Image,
  Modal,
} from "react-bootstrap";

const RequestsPage = () => {
  const dispatch = useDispatch();
  const {
    teachers,
    isLoading,
    successMessage,
    errorMessage,
  } = useSelector((state) => state.admin);

  const [localTeachers, setLocalTeachers] = useState([]);
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    dispatch(getTeachersByStatus());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  useEffect(() => {
    if (teachers.length) {
      setLocalTeachers(teachers);
    }
  }, [teachers]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(reset());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(reset());
    }
  }, [successMessage, errorMessage, dispatch]);

  const handleUpdateStatus = (teacherId, status) => {
    dispatch(updateTeacherStatus({ teacherId, status }));
    setLocalTeachers((prev) =>
      prev.map((teacher) =>
        teacher._id === teacherId ? { ...teacher, status } : teacher
      )
    );
  };

  const renderTeachers = (status) => {
    const filteredTeachers = localTeachers.filter(
      (teacher) => teacher.status === status
    );

    if (isLoading && !filteredTeachers.length) {
      return (
        <div className="text-center">
          <Spinner animation="border" variant="primary" style={{ width: "4rem", height: "4rem" }} />
        </div>
      );
    }

    if (filteredTeachers.length === 0) {
      return <p className="text-center">No teachers found in this category.</p>;
    }

    return filteredTeachers.map((teacher) => (
      <Card key={teacher._id} className="mb-2 shadow-sm rounded border-0">
        <Card.Body className="d-flex justify-content-between align-items-center flex-wrap gap-3 p-3">
          <div className="p-2 bg-light rounded" style={{ minWidth: "200px", fontSize: "14px" }}>
            <strong>Email:</strong> {teacher.universityEmail}
          </div>

          {status === "applied" && (
            <>
              <div className="d-flex gap-2">
                <Image
                  src={teacher.teacherCard?.url || "https://via.placeholder.com/100"}
                  rounded
                  fluid
                  onClick={() => setExpandedImage(teacher.teacherCard?.url)}
                  style={{ width: "100px", height: "auto", cursor: "pointer" }}
                />
                <Image
                  src={teacher.additionalProof?.url || "https://via.placeholder.com/100"}
                  rounded
                  fluid
                  onClick={() => setExpandedImage(teacher.additionalProof?.url)}
                  style={{ width: "100px", height: "auto", cursor: "pointer" }}
                />
              </div>
              <div>
                <Button
                  variant="success"
                  className="me-2"
                  onClick={() => handleUpdateStatus(teacher._id, "approved")}
                >
                  ✅ Approve
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleUpdateStatus(teacher._id, "rejected")}
                >
                  ❌ Reject
                </Button>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    ));
  };

  return (
    <Container className="mt-2">
      <Row>
        <Col md={12}>
          <h3 className="text-center" style={{ color: "#556cd6", fontSize: "2rem", fontWeight: "bold", padding: "10px", backgroundColor: "#f0f4ff", borderRadius: "10px" }}>
            Applied Teachers
          </h3>
          <div className="teacher-list">{renderTeachers("applied")}</div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <h3 className="text-center" style={{ color: "#FF6F61", fontSize: "1.75rem", fontWeight: "bold", padding: "10px", backgroundColor: "#fff0f0", borderRadius: "10px" }}>
            Rejected Teachers
          </h3>
          <div className="teacher-list">{renderTeachers("rejected")}</div>
        </Col>
        <Col md={6}>
          <h3 className="text-center" style={{ color: "#43A047", fontSize: "1.75rem", fontWeight: "bold", padding: "10px", backgroundColor: "#e8f5e9", borderRadius: "10px" }}>
            Approved Teachers
          </h3>
          <div className="teacher-list">{renderTeachers("approved")}</div>
        </Col>
      </Row>

      {/* Image Preview Modal */}
      <Modal show={!!expandedImage} onHide={() => setExpandedImage(null)} centered>
        <Modal.Body className="text-center">
          <Image src={expandedImage} fluid />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={() => setExpandedImage(null)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default RequestsPage;
