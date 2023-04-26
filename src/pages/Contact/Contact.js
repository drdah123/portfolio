import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../../assets/img/contact-img.svg';
import emailjs from '@emailjs/browser';
import Footer from '../../components/Footer';
import './Contact.css';

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
          setButtonText('sent');
          setIsSent(true);
        },
        () => {
          alert('your message does not send, please try again');
        }
      );
  };

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row>
            <Col md={6} className="d-flex">
              <img src={contactImg} alt="Contact us" />
            </Col>
            <Col md={6} className="form-container">
              <form ref={formRef} onSubmit={sendEmail}>
                <Row>
                  <Col>
                    <input
                      type="text"
                      placeholder="First name"
                      name="firstname"
                    />
                    <Col>
                      <input
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                      />
                    </Col>
                    <Col>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        name="email"
                      />
                    </Col>
                    <Col>
                      <input type="tel" placeholder="Phone" name="Phone" />
                    </Col>
                    <Col>
                      <textarea
                        rows={6}
                        type="text"
                        placeholder="Message"
                        name="message"
                        required
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
      <Footer />
    </>
  );
};

export default Contact;
