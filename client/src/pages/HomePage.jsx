import React from 'react';
import '../css/home_page.css';
import { Container } from 'react-bootstrap';

export default function HomePage() {
  return (
    <section id='home' className='home'>
      <Container className='home-page'>
        This is The Home Page
      </Container>
    </section>
  )
}
