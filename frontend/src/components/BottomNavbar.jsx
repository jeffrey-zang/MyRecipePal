import React, { useState, useEffect } from 'react'


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const BottomNavbar = ({clickNewRecipe}) => {
    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    })
    const detectSize = () => {
        detectHW({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
        window.removeEventListener('resize', detectSize)
        }
    }, [windowDimenion])

    return (
        <>
        <Navbar fixed="bottom" bg="light" expand="lg" >
            <Container fluid>
                <Nav
                    className=" my-2 my-lg-0 me-auto"
                    style={{ maxHeight: '100px' }}
                >
                    <Button class="btn btn-primary" style={{backgroundColor: "#48BB78","width": windowDimenion.winWidth / 2 + "px"}}>Save to favourites</Button>

                    <Button class="btn btn-primary" onClick={clickNewRecipe} style={{backgroundColor: "#48BB78","width": windowDimenion.winWidth / 2 - 25 + "px"}}>Give me a new recipe!</Button>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
};

export default BottomNavbar;