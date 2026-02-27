import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#282c34', padding: '20px', textAlign: 'center', color: 'white' }}>
      <Container>
        <p style={{ margin: 0, fontSize: '14px' }}>
          © {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
