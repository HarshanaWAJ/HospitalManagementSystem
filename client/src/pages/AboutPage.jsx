import React from 'react'
import { Container} from 'react-bootstrap';
import '../css/About.css';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import {motion}  from 'framer-motion';

import Image2 from '../assets/images/imgs/slide-2.jpg';
import Image3 from '../assets/images/imgs/slide-3.avif';
import Image4 from '../assets/images/imgs/slide-4.jpg';
import Image5 from '../assets/images/imgs/slide-5.jpg';

export default function AboutPage() {

      const itemData = [
      {
        img: Image2,
        title: 'World Best Lab Facilities',
        author: 'We have world number one medical laboratory facilities.',
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: Image3,
        title: 'Comfirtable Hostel facilities',
        author: 'We have world number one hostel facilities.',
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: Image4,
        title: 'World Best Oparetion Theater',
        author: 'We have world number one oparetion theater facilities.',
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: Image5,
        title: 'Best Medical Device in the world',
        author: 'We have the number one medical device in the world',
        rows: 2,
        cols: 2,
        featured: true,
      },
    ];

  return (
    <motion.section id='about' className='about'
      initial={{ opacity: 0, scale: 0.5 }} 
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }} 
      transition={{ duration: 0.5 }} 
    >
      <Container className='about'>
        <h3  className='about-header'>About Us</h3>
        <div className="about-details">
          <h2 className='about-sub-header'>Our Vision</h2>
          <p>To be the leading provider of accessible, compassionate, 
            and high-quality healthcare for all</p>
          <h2 className='about-sub-header'>Our Mission</h2>
          <p>To provide efficient and effective administrative support to medical professionals, 
            allowing them to focus on delivering exceptional patient care.</p>
        </div>
        <Container className='gallery'>
          <div className="container"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <Box sx={{width:700, height:650, alignItems:'center'}}>
               <ImageList sx={{ width: 700, height: 550, display:'flex-box', overflow:'visible', alignContent: 'center'}}>
                <ImageListItem key="Subheader" cols={2}> 
                  <ListSubheader className='specialities-header' component="div" style={{
                    backgroundColor:'inherit',
                    fontFamily:'Times new Roman',
                    fontSize:'20px',
                    color:'black',
                    fontWeight:'600'
                  }}>
                    Our Specialaties
                </ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (
                  <ImageListItem key={item.img} className="hover-effect">
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      className='item-des'
                      title={item.title}
                      subtitle={item.author}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </div>
        </Container>
      </Container>
    </motion.section>
  )
}
