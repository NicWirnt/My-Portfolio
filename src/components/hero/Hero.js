import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../Layout/Header'
import './hero.css';
import Me from '../../assets/MeBg.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <Header />
        <Container>
        <Row className='mt-5 pb-2'>
            <Col md="7">
                <div className="mb-2 pb-3">Hi I'm Nico Wiranata</div>
                        <h2>Full-Stack MERN Developer!</h2>

                        <p className="mt-5 mb-2">
                            I am passionate software engineeer student who love to learn new things
                        </p>
                        <button className="btn btn-danger">
                            Download Resume 
                        </button>
            </Col>
            <Col md="5" className='text-center order-md-2 pt-2 pb-2'>
                <img id='imgMe' src={Me} width="70%" alt="" />
            </Col>
        </Row>
        </Container>
    </div>
  )
}
