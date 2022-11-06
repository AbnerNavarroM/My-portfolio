import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ImgCarousel from './defaultComponents/ImgCarousel';

import projImg1 from '../assets/img/uni-fti-1.png'
import projImg2 from '../assets/img/uni-fti-2.png'
import projImg3 from '../assets/img/uni-fti-3.png'

const Projects = () => {

    const projects = [
        {
            altDesc : 'Facultad de Tecnología de la Construcción - UNI',
            title: 'UNI - FTI',
            description: "Sitio Web - Facultad de Tecnología de la Construccion",
            imgSrc: projImg1,
        },
        {
            altDesc : 'Facultad de Tecnología de la Construcción - UNI',
            title: 'UNI - FTI',
            description: "Sitio Web - Facultad de Tecnología de la Construccion",
            imgSrc: projImg2,
        },
        {
            altDesc : 'Facultad de Tecnología de la Construcción - UNI',
            title: 'UNI - FTI',
            description: "Sitio Web - Facultad de Tecnología de la Construccion",
            imgSrc: projImg3,
        }
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident delectus, quibusdam quaerat consequatur debitis porro. Debitis ipsa facere excepturi accusantium explicabo corrupti temporibus, labore earum, eligendi sunt harum provident commodi.
                            Eius error officia soluta dolorum quaerat sed quia corporis, suscipit exercitationem. Placeat quaerat dolor ducimus neque, nulla praesentium sunt! Aliquam fugiat corporis architecto enim soluta laboriosam temporibus illum nihil qui!</p>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="prj1">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        {
                                            projects.map((p, i) => {
                                                return (
                                                    <Nav.Item key={i}>
                                                        <Nav.Link eventKey={`prj${i + 1}`}>{p.title}</Nav.Link>
                                                    </Nav.Item>
                                                )
                                            })
                                        }
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="prj1">
                                            <ImgCarousel imgSources={projects}/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="prj2">
                                            <ImgCarousel imgSources={projects} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="prj3">
                                            <ImgCarousel imgSources={projects} />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects