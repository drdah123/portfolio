import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('send');
  const [status, setStatus] = useState({});

  const onUpdateForm = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDfault();
    setButtonText('sending');
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText('sent');
    let resault = response.json();
    setFormDetails(formInitialDetails);
    if (resault.code === 200) {
      setStatus({ success: true, message: 'Done' });
    } else {
      setStatus({ success: false, message: 'Somthing went wrong' });
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col md={6}>
            <img src={contactImg} alt="Contact us" />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form onSubmit={handleSumbit}>
              <Row>
                <Col className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First name"
                    onChange={(e) => onUpdateForm('firsName', e.target.value)}
                  />
                  <Col className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last name"
                      onChange={(e) => onUpdateForm('lastName', e.target.value)}
                    />
                  </Col>
                  <Col className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email"
                      required
                      onChange={(e) => onUpdateForm('email', e.target.value)}
                    />
                  </Col>
                  <Col className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone"
                      onChange={(e) => onUpdateForm('phone', e.target.value)}
                    />
                  </Col>
                  <Col>
                    <textarea
                      rows={6}
                      type="text"
                      value={formDetails.message}
                      placeholder="Message"
                      required
                      onChange={(e) => onUpdateForm('message', e.target.value)}
                    />
                    <button type="sumbit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
