import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; // To integrate with React Router

function NavigationBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Image-guided Automatic Robotic Surgery</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Brand href="http://www.cuhk.edu.hk" title="CUHK">
                            <img src="./images/Icon_cuhk.png" alt="CUHK" />
                        </Navbar.Brand>
                        <Navbar.Brand href="http://www.hku.hk" title="HKU">
                            <img src="./images/Icon_hku.png" alt="HKU" />
                        </Navbar.Brand>
                        <Navbar.Brand href="https://www.cityu.edu.hk/" title="CityU">
                            <img src="./images/Icon_cityu.png" alt="CITYU" />
                        </Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg" className="pb-4">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-center w-100">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/project-introduction">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/research-topic">
                                <Nav.Link>Research Topic</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/journal-papers">
                                <Nav.Link>Research Output</Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to="/conference-papers">
                                <Nav.Link>Conference Papers</Nav.Link>
                            </LinkContainer> */}
                            <LinkContainer to="/patent">
                                <Nav.Link>Technology Transfer</Nav.Link>
                            </LinkContainer>
                            {/* <LinkContainer to="/trs-symposium-2019">
                                <Nav.Link>TRS Symposium 2019</Nav.Link>
                            </LinkContainer> */}
                            <LinkContainer to="/gallery">
                                <Nav.Link>Meetings and Workshops Gallery</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;