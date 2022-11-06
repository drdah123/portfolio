import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [buttonText, setButtonText] = useState('send');
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_d7s6f2y',
        'template_87svqtx',
        formRef.current,
        'bZmEeRnVc0oLZKqBn'
      )
      .then(
        () => {
          alert('your message sent');
          // window.location.reload(false);
          setButtonText('sent');
          setIsSent(true);
        },
        (err) => {
          alert('your message does not send, please try again');
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col md={6}>
            <img src={contactImg} alt="Contact us" />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <form ref={formRef} onSubmit={sendEmail}>
              <Row>
                <Col className="px-1">
                  <input
                    type="text"
                    // value={formDetails.firstName}
                    placeholder="First name"
                    name="firstname"
                    // onChange={(e) => onUpdateForm('firstName', e.target.value)}
                  />
                  <Col className="px-1">
                    <input
                      type="text"
                      // value={formDetails.lastName}
                      placeholder="Last name"
                      name="lastName"
                      // onChange={(e) => onUpdateForm('lastName', e.target.value)}
                    />
                  </Col>
                  <Col className="px-1">
                    <input
                      type="email"
                      // value={formDetails.email}
                      placeholder="Email"
                      required
                      name="email"
                      // onChange={(e) => onUpdateForm('email', e.target.value)}
                    />
                  </Col>
                  <Col className="px-1">
                    <input
                      type="tel"
                      // value={formDetails.phone}
                      placeholder="Phone"
                      name="Phone"
                      // onChange={(e) => onUpdateForm('phone', e.target.value)}
                    />
                  </Col>
                  <Col>
                    <textarea
                      rows={6}
                      type="text"
                      // value={formDetails.message}
                      placeholder="Message"
                      name="message"
                      required
                      // onChange={(e) => onUpdateForm('message', e.target.value)}
                    />
                    <button type="sumbit" disabled={isSent}>
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
