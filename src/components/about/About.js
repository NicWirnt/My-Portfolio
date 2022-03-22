import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SectionTitle } from '../title/Title'
import imgProfile from '../../assets/MeBg.png'

export const About = () => {
  return (
    <section id="about-me">
        <SectionTitle title="About Me"/>
        <Container>
            <Row>
                <Col className='about-me-img'>
                <img src={imgProfile} alt='me' className='text-center pt-5'
                width="80%"

                ></img>
                </Col>
                <Col>
                <p>Born 30th August 1994</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis, accusantium fugiat perferendis sed id ex iusto sint numquam illum!</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
