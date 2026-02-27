import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Content() {
  const features = [
    { title: 'Feature 1', text: 'This is the description for feature 1.' },
    { title: 'Feature 2', text: 'This is the description for feature 2.' },
    { title: 'Feature 3', text: 'This is the description for feature 3.' },
    { title: 'Feature 4', text: 'This is the description for feature 4.' },
    { title: 'Feature 5', text: 'This is the description for feature 5.' },
    { title: 'Feature 6', text: 'This is the description for feature 6.' },
  ];

  return (
    <Container style={{ marginTop: '30px', marginBottom: '30px' }}>
      <h1 style={{ marginBottom: '20px' }}>Welcome to My Website</h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
        This is the main content area of the website.
      </p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {features.map((feature, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.text}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Content;
