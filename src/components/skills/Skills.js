import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SectionTitle } from '../title/Title'

export const Skills = () => {
  return (
    <section id="skills">
        <Container>
            <Row>
                <Col>
                <SectionTitle title="Skills"></SectionTitle>
                <div className="skill-list mb-5 text-center d-flex justify-content-between fw-bold flex-wrap">
                <span className='text-info'><i className="fab fa-react d-block "></i>REACT</span>
                <span className='text-primary'><i className="fab fa-html5 d-block"></i>HTML5</span>
                <span className='text-danger'><i className="fab fa-css3-alt d-block"></i>CSS3</span>
                <span className='text-warning'><i className="fab fa-js-square d-block"></i>JAVASCRIPT</span>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
