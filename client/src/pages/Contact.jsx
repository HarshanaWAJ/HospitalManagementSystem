import React from 'react';
import { Container} from 'react-bootstrap';
import '../css/Contact.css';
import {motion}  from 'framer-motion';

export default function Contact() {
  return (
    <motion.section id='contact' className='contact'
      initial={{ opacity: 0, scale: 0.5 }} 
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }} 
      transition={{ duration: 0.5 }} 
    >
      <Container className='contact'>
        <div className="contact-header">Contact Us</div>
        <div className="contact-content">
          <div className="contact-form">
          </div>
        </div>
      </Container>
    </motion.section>
  )
}
