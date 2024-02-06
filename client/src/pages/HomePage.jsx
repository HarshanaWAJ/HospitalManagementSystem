import React from 'react';
import '../css/home_page.css';
import { Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {motion}  from 'framer-motion';

import Bgimg from '../assets/images/imgs/bg-img-1.avif';
import Logo from '../assets/images/icons/MediCare.ico';

export default function HomePage() {

  return (
    <motion.section id='home' className='home'
      initial={{ opacity: 0, scale: 0.5 }} 
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }} 
      transition={{ duration: 0.5 }} 
    >
      <Container className='home-page'>
        <h3>Welcome to Medi Care</h3>
          <Container className='home-main-content-1'>
            <Container className='bg-img' >
              <img src={Bgimg} alt="background" className='bg-anim-img'/>
            </Container>
            <Container className='content-1'>
              <img src={Logo} alt="background" className='content-img'/>
              <h4>"We prioritize your health and well-being"</h4>
              <p>Madi Care prioritizes your health and well-being. 
                Our hospital management system is intended to streamline and improve your healthcare experience.
              </p>
            </Container>
          </Container>
          <Container className='home-main-content-3'>
            <Container className='why-medi-care-card' style={{padding:'50px'}}>
                    <Card
                      style={{
                        width: '50rem',
                        background: 'inherit',
                        borderColor: '#3399FF',
                        borderBottomLeftRadius: '50px',
                        borderTopRightRadius: '50px',
                        borderWidth: '2px',
                        boxShadow: '0 0 10px rgba(0, 0, 128, 1.8)',
                        transition: 'box-shadow 0.3s', // Add a transition for a smoother effect
                      }}
                      className="mb-2"
                      onMouseOver={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 128, 3.0)'; // Adjust the hover shadow
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 128, 1.8)';
                      }}
                    >
                  <Card.Header><h3>Why Medi Care</h3></Card.Header>
                  <Card.Body style={{ textAlign: 'center', padding:'20px' }}>
                    <blockquote className="blockquote mb-0">
                      <p className='content-card'>
                        {' '}
                        "Choose Madi Care for a personalized journey to well-being, 
                        where cutting-edge healthcare technology meets compassionate care, 
                        ensuring your health is not just managed but optimized with excellence."{' '}
                      </p>
                      <footer className="blockquote-footer" style={{
                        color:'#3399FF',
                        fontFamily:'Times New Roman',
                        fontWeight:'800'
                      }}>
                        Medi Care, <cite title="Source Title">Management Team</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
              </Card>
            </Container>
            <Container className='content-4'>
              <Card style={{width: '18rem',
                padding:'20px', 
                margin:'20px', 
                borderRadius:'20px',
                borderColor:'#3399FF',
                background:'inherit', 
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
                transition: 'box-shadow 0.3s', // Add a transition for a smoother effect
                      }}
                      className="mb-2"
                      onMouseOver={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 128, 2.0)'; // Adjust the hover shadow
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 128, 1.8)';
                      }}
                >
                <Card.Body className="text-center">
                  <Card.Title className='card-title'>Efficiency and Accessibility</Card.Title>
                  <hr/>
                  <Card.Text style={{fontFamily:'Times New Roman', paddingTop:'10px', letterSpacing:'2px'}}>
                  Madi Care ensures that managing your health is both efficient and accessible. 
                  Our user-friendly interface puts you in control of your healthcare journey
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{
                width: '18rem',
                padding:'20px', 
                margin:'20px', 
                borderRadius:'20px',
                borderColor:'#3399FF',
                background:'inherit',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
                transition: 'box-shadow 0.3s', // Add a transition for a smoother effect
                      }}
                      className="mb-2"
                      onMouseOver={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 128, 2.0)'; // Adjust the hover shadow
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 128, 1.8)';
                      }}
                >
                <Card.Body className="text-center">
                  <Card.Title className='card-title'>Security and Privacy</Card.Title>
                  <hr/>
                  <Card.Text style={{fontFamily:'Times New Roman', paddingTop:'10px', letterSpacing:'2px'}}>
                  Your health information is our priority. 
                  Madi Care employs advanced security measures to protect your data, 
                  ensuring confidentiality and privacy.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem',
                padding:'20px', 
                margin:'20px', 
                borderRadius:'20px',
                borderColor:'#3399FF',
                background:'inherit',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
                transition: 'box-shadow 0.3s', // Add a transition for a smoother effect
                      }}
                      className="mb-2"
                      onMouseOver={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 128, 2.0)'; // Adjust the hover shadow
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 128, 1.8)';
                      }}
                >
                <Card.Body className="text-center">
                  <Card.Title className='card-title'>24/7 Support</Card.Title>
                  <hr/>
                  <Card.Text style={{fontFamily:'Times New Roman', paddingTop:'10px', letterSpacing:'2px'}}>
                  Our support team is available around the clock to address your queries and provide assistance. 
                  Your satisfaction is our commitment.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Container>
      </Container>
    </motion.section>
  )
}
 