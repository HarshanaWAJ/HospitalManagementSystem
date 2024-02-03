import React from 'react';
import '../css/home_page.css';
import { Container} from 'react-bootstrap';

import Bgimg from '../assets/images/imgs/bg-img-1.avif';
import Logo from '../assets/images/icons/MediCare.ico';

export default function HomePage() {
  return (
    <section id='home' className='home'>
      <Container className='home-page'>
        <h3>Welcome to Medi Care</h3>
          <Container className='home-main-content-1'>
            <Container className='bg-img' >
              <img src={Bgimg} alt="background" className='bg-anim-img'/>
            </Container>
            <Container className='content-1'>
              <img src={Logo} alt="background" className='content-img' animate={{}}/>
              <h4>"We prioritize your health and well-being"</h4>
              <p>Madi Care prioritizes your health and well-being. 
                Our hospital management system is intended to streamline and improve your healthcare experience.
              </p>
            </Container>
          </Container>
      </Container>
    </section>
  )
}
 