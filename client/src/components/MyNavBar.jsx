import React from 'react'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {BrowserRouter as Router} from "react-router-dom";

import Logo from '../assets/images/icons/Icon.ico';
import '../css/MyNavBar.css';
import Button from '@mui/material/Button';
import Person2Icon from '@mui/icons-material/Person2';
  

export default function MyNavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <>
        <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
            <Navbar.Brand>
                <img src={Logo} alt="Logo" style={{height:'50px'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Us</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Contact Us</Nav.Link>
                <Button component="label" variant="secondary" startIcon={<Person2Icon fontSize="inherit"/>} 
                    sx={{
                        textTransform: 'none',
                        fontFamily:'Times New Roman',
                        fontSize:'20px',
                        fontWeight:'700',
                        '&:hover': {
                            fontSize:'1.35em',
                            transition: 'opacity 0.5s, font-size 0.5s'
                        }
                    }}>
                    Login
                </Button>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </Router>
    </>
  )
}
