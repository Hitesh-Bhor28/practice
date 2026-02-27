import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Container,
  Badge,
  Spinner,
  Modal,
} from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleClose = () => setShow(false);

  const handleShow = (user) => {
    setSelectedUser(user);
    setShow(true);
  };

  if (!users.length) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Users List</h2>

      <Row>
        {users.map((user) => (
          <Col key={user.id} md={6} lg={4} xl={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={user.image}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <Card.Body>
                <Card.Title>
                  {user.firstName} {user.lastName}
                </Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                  @{user.username}
                </Card.Subtitle>

                <Badge bg={user.role === "admin" ? "danger" : "primary"}>
                  {user.role}
                </Badge>
              </Card.Body>

              <Card.Footer className="text-center">
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleShow(user)}
                >
                  View Profile
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedUser?.firstName} {selectedUser?.lastName}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedUser && (
            <Row>
              <Col md={4} className="text-center">
                <img
                  src={selectedUser.image}
                  alt={selectedUser.firstName}
                  className="img-fluid rounded mb-3"
                />
                <Badge
                  bg={
                    selectedUser.role === "admin" ? "danger" : "primary"
                  }
                >
                  {selectedUser.role}
                </Badge>
              </Col>

              <Col md={8}>
                <p><strong>Username:</strong> @{selectedUser.username}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Phone:</strong> {selectedUser.phone}</p>
                <p><strong>Age:</strong> {selectedUser.age}</p>
                <p><strong>Gender:</strong> {selectedUser.gender}</p>
                <p>
                  <strong>Address:</strong>{" "}
                  {selectedUser.address.address},{" "}
                  {selectedUser.address.city},{" "}
                  {selectedUser.address.state}
                </p>
                <p><strong>University:</strong> {selectedUser.university}</p>
                <p>
                  <strong>Company:</strong>{" "}
                  {selectedUser.company.name} ({selectedUser.company.title})
                </p>
              </Col>
            </Row>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Users;