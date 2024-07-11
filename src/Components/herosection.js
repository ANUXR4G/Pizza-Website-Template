import React from 'react';
import { Carousel, Button } from 'antd';
import slide1 from '../Assets/slide1.jpg';
import slide2 from '../Assets/slide2.jpg';
import slide3 from '../Assets/slide3.jpg';

const contentStyle = (backgroundImage) => ({
  height: '90vh', // Full viewport height
  width: '100%', // Full viewport width
  color: '#fff',
  textAlign: 'center',
  background: `url(${backgroundImage}) center center / cover no-repeat`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end', // Align content to the bottom
  alignItems: 'start',
  padding: '5%', // Added padding for text content
});

const textStyle = {
  textAlign: 'left',
};

const buttonStyle = {
  backgroundColor: '#bd3333',
  marginBottom: '5%', // Adjusted margin for responsiveness
  marginTop: '2%',
  transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
  lineHeight: 'normal',
  borderWidth: '0',
  padding: '2rem 3rem', // Adjusted button padding for responsiveness
  letterSpacing: '0',
  fontWeight: '400',
  fontSize: '1.5rem', // Adjusted font size for responsiveness
};

const Herosection = () => (
  <div style={{ width: '100%', height: '100vh' }}>
    <Carousel autoplay>
      <div>
        <div style={contentStyle(slide1)}>
          <div style={textStyle} className='font-black font-serif text-4xl lg:max-w-lg'>The Only Pizza Made From Fresh Dough From Fresh Pizza</div>
          <Button type="primary" style={buttonStyle}>Order Online</Button>
        </div>
      </div>
      <div>
        <div style={contentStyle(slide2)}>
          <div style={textStyle} className='font-black font-serif text-4xl lg:max-w-lg'>The Only Pizza Made From Fresh Dough From Fresh Pizza</div>          
          <Button type="primary" style={buttonStyle}>Order Online</Button>
        </div>
      </div>
      <div>
        <div style={contentStyle(slide3)}>
          <div style={textStyle} className='font-black font-serif text-4xl lg:max-w-lg'>The Only Pizza Made From Fresh Dough From Fresh Pizza</div>          <Button type="primary" style={buttonStyle}>Order Online</Button>
        </div>
      </div>
    </Carousel>
  </div>
);

export default Herosection;
