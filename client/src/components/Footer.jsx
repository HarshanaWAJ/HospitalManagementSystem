import React from 'react';
import '../css/Footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FaxIcon from '@mui/icons-material/Fax';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer-main'>
      <br/>
      <hr/>
      <div className="content">
        <div className="section-1">
            <LocationOnIcon fontSize="large" style={{color:'black'}}/>
            <div className="address">
                <h3>Medi Care</h3>
                <h5>No: 125,</h5>
                <h5>Rajagiriya,</h5>
                <h5>Colombo</h5>
            </div>
        </div>
        <div className="section-2">
            <div className="contact">
                <div className="tell-des">
                    <CallIcon style={{color:'black', fontSize:'30px',}}/>
                    
                    <div className="tell">011 241 5896</div>
                </div>
                <div className="email-des">
                    <AlternateEmailIcon style={{color:'black', fontSize:'30px',}}/>
                    <div className="email">medi.care2024@gmail.com</div>
                </div>
                <div className="fax-des">
                    <FaxIcon style={{color:'black', fontSize:'30px',}}/>
                    
                    <div className="fax">011 241 5896</div>
                </div>
            </div>
        </div>
        <div className="section-3">
        <div className="social-icon">
            <IconButton className='icon-button' style={{
              height:'50px', 
              width:'50px',
              color: '#063970',
              borderRadius:'10px',
              //border: '2px solid #00008B ',
              }}>
            <LinkedInIcon className='footer-social-icon' style={{
              height:'40px', 
              width:'40px',
              }}/>
            </IconButton>
          </div>
          <div className="social-icon">
            <IconButton className='icon-button' style={{
              height:'50px', 
              width:'50px',
              color: '#154c79',
              borderRadius:'10px',
              //border: '2px solid #00008B ',
              }}>
            <TwitterIcon className='footer-social-icon' style={{
              height:'40px', 
              width:'40px',
              }}/>
            </IconButton>
          </div>
          <div className="social-icon">
            <IconButton className='icon-button' style={{
              height:'50px', 
              width:'50px',
              color: '#d62976',
              borderRadius:'10px',
              }}>
            <InstagramIcon className='footer-social-icon' style={{
              height:'40px', 
              width:'40px',
              }}/>
            </IconButton>
          </div>
          <div className="social-icon">
            <IconButton className='icon-button' style={{
              height:'50px', 
              width:'50px',
              color: '#002663',
              borderRadius:'10px',
              //border:'2px solid #00008B ',
              }}>
            <FacebookIcon className='footer-social-icon' style={{
              height:'40px', 
              width:'40px'
              }}/>
            </IconButton>
          </div>
        </div>
      </div>
      <hr/>
      <div className="copyright">&copy; 2024 Medi care. All Right Received</div>
      <hr/>
      <br/>
    </div>
  );
}

export default Footer;
