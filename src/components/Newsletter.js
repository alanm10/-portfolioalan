import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
      <div className="newsletter-bx wow slideInUp" id="newsletter">
          <Row>
            <Col lg={12} md={6} xl={5}>
            <h3>You can contact me by email, cell phone, LinkedIn</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div>
                <h2>alan_martinez94@hotmail.com</h2>
                <h2> +54 9 3513059848</h2>
                <h2> alan-martinez55</h2>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
