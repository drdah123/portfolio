import React, { useEffect, useState } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'

const NewsLetters = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (status === 'success') clearFieldes()
    }, [status])

    const handleSumbit = (e) => {
        e.preventDefault()
        email &&
            email.indexOf('@') > -1 &&
            onValidated({
                EMAIL: email
            })
    }

    const clearFieldes = () => {
        setEmail('')
    }

    return (
        <Col lg={12}>
            <div className='newsletter-bx wow slideInUp'>
                <Row lg={12} md={6} xl={5}>
                    <Col>
                        <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
                        {status === "sending" && <Alert>Sending...</Alert>}
                        {status === "error" && <Alert variant='danger'>{message}</Alert>}
                        {status === "success" && <Alert variant='sccess'>{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSumbit}>
                            <div className='new-email-bx'>
                                <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email address' />
                                <button type='sumbit'>Sumbit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default NewsLetters