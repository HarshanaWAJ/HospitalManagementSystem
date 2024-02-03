import React from 'react';
import '../css/home_page.css';
import { Container} from 'react-bootstrap';

import Bgimg from '../assets/images/imgs/bg-img-1.avif';
import Logo from '../assets/images/icons/MediCare.ico';

export default function HomePage() {
  return (
    <section id='home' className='home'>
      <Container className='home-page'>
          <Container className='home-main-body'>
            <Container className='bg-img'>
              <img src={Bgimg} alt="background" className='bg-anim-img'/>
            </Container>
            <Container className='content-1'>
              <img src={Logo} alt="background" className='content-img'/>
              <h3>Welcome to Medi Care,</h3>
            </Container>
          </Container>
      </Container>
    </section>
  )
}
 