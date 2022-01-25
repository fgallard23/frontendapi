import React from 'react';
import PropTypes from 'prop-types'
import { Navbar, Container } from 'react-bootstrap';

const NavegationBar = ({ icon, title }) => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
            <Container>
                <Navbar.Brand href="/" className={icon}>{title}</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

NavegationBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default NavegationBar;