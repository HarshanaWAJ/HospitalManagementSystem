import React from 'react';
import '../css/home_page.css';
import { Container} from 'react-bootstrap';

import Bgimg from '../assets/images/imgs/bg-img-1.avif';

export default function HomePage() {
  return (
    <section id='home' className='home'>
      <Container className='home-page'>
          <Container className='home-main-body'>
            <Container>
              <img src={Bgimg} alt="background" className='bg-anim-img'/>
            </Container>
            <Container className='content-1'>
                <p>I Love You</p>
            </Container>
          </Container>
      </Container>
    </section>
  )
}
 