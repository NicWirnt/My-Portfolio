import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Contact = () => {
  return (
    <section id='contact' className='py-5'>
        <Container>
            <Row>
                <Col className='d-flex justify-content-around fs-1'>
                <a href='mailto:nicowiranata@gmail.com'><i className="fas fa-envelope"></i></a>
                <a href='https://www.linkedin.com/in/nico-wiranata-247b3a1a1/'><i className="fab fa-linkedin"></i></a>
                <a href='https://www.facebook.com/wiranatanico/'><i className="fab fa-facebook-square"></i></a>
                <a href='https://twitter.com/tweet_wiranata'><i className="fab fa-twitter"></i></a>
                </Col>
            </Row>
        </Container>

    </section>
  )
}
