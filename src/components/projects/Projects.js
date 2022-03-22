import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SectionTitle } from '../title/Title'
import p1 from '../../assets/bg.jpg'

export const Projects = () => {
  return (
    <section id="projects" className='project-section'>
        <Container>
            <Row>
                <Col>
                    <SectionTitle title="Projects"></SectionTitle>
                </Col>
            </Row>
            {/* Project 1 */}
            <Row className='py-5'>
                <Col className='md-6'>
                    <img src={p1} alt="project-1" className='img-thumbnail' width="100%"></img>
                </Col>
                <Col className='md-6'>
                    <h2>My Portfolio</h2>
                    <div className="links">
                        <a href='#sent to github'><i className="fab fa-github"></i></a>
                        <a href='#sent to live project'><i className="fab fa-chrome"></i></a>
                    </div>
                    <p>Tech: HTML, CSS, JavaScript, React</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reiciendis dolores culpa exercitationem? Itaque, maxime.</p>
                </Col>
            </Row>

            {/* Project  2*/}
            <Row className='py-5'>
                <Col className='md-6 order-md-2'>
                    <img src={p1} alt="project-2" className='img-thumbnail' width="100%"></img>
                </Col>
                <Col className='md-6 mt-2 mt-md-0'>
                    <h2>My Portfolio</h2>
                    <div className="links">
                        <a href='#sent to github'><i className="fab fa-github"></i></a>
                        <a href='#sent to live project'><i className="fab fa-chrome"></i></a>
                    </div>
                    <p>Tech: HTML, CSS, JavaScript, React</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reiciendis dolores culpa exercitationem? Itaque, maxime.</p>
                </Col>
            </Row>

            {/* Project 3 */}
            <Row className='py-5'>
                <Col className='md-6'>
                    <img src={p1} alt="project-3" className='img-thumbnail' width="100%"></img>
                </Col>
                <Col className='md-6'>
                    <h2>My Portfolio</h2>
                    <div className="links">
                        <a href='#sent to github'><i className="fab fa-github"></i></a>
                        <a href='#sent to live project'><i className="fab fa-chrome"></i></a>
                    </div>
                    <p>Tech: HTML, CSS, JavaScript, React</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reiciendis dolores culpa exercitationem? Itaque, maxime.</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
